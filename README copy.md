import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const SearchBar = ({ onUserSelect }) => {
  const [username, setUsername] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setError(null);
      const response = await axios.get(
        `http://localhost:8080/api/users`
      );

      console.log(response);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching for user:", error);
      if (error.response && error.response.status === 404) {
        setError("User not found.");
      } else {
        setError("An error occurred while searching.");
      }
      setSearchResults([]);
    }
  };

  console.log(searchResults);


  const handleUserSelect = (user) => {
    setUsername("");
    setSearchResults([]);
    onUserSelect(user);
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Search username..."
        value={username}
        onChange={handleInputChange}
      />
      <button
        className="absolute right-0 top-0 mt-2 mr-2"
        onClick={handleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.5 17.5l4.5 4.5"
          />
        </svg>
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        {searchResults.map((user) => (
          <div
            key={user.id}
            className="cursor-pointer p-2 hover:bg-gray-100"
            onClick={() => handleUserSelect(user)}
          >
            {user.username}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onUserSelect: PropTypes.func.isRequired,
};












// chat
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import axios from "axios";
import { over } from "stompjs";
import SearchBar from "./SearchBar";

var stompClient = null;

export const ChatPage2 = () => {
      const [selectedUser, setSelectedUser] = useState(null);
    const [receiver, setReceiver] = useState("");
    const [message, setMessage] = useState("");
    const [media, setMedia] = useState("");
    const [tab, setTab] = useState("CHATROOM");
    const [publicChats, setPublicChats] = useState([]);
    const [privateChats, setPrivateChats] = useState(new Map());
    const [username] = "vietnq1";
    const navigate = useNavigate();
    const connected = useRef(false);

    if (!username.trim()) {
        navigate("/login");
    }

    useEffect(() => {
        if (!connected.current) {
            connect();
        }
        return () => {
            if (stompClient && stompClient.connected) {
                stompClient.disconnect(() => {
                    connected.current = false;
                });
            }
        };
    }, []);

      const handlePrivateMessage = (user) => {
        setSelectedUser(user);
        console.log(selectedUser);
        setReceiver(user.username);
        if (!privateChats.has(user.username)) {
          privateChats.set(user.username, []);
          setPrivateChats(new Map(privateChats));
        }
      };

    const onMessageReceived = (payload) => {
        const payloadData = JSON.parse(payload.body);
        console.log("Public message received:", payloadData);
        switch (payloadData.status) {
            case "JOIN":
                if (payloadData.senderName !== username) {
                    if (!privateChats.get(payloadData.senderName)) {
                        privateChats.set(payloadData.senderName, []);
                        setPrivateChats(new Map(privateChats));
                    }
                }
                break;
            case "LEAVE":
                if (payloadData.senderName !== username) {
                    if (privateChats.get(payloadData.senderName)) {
                        privateChats.delete(payloadData.senderName);
                        setPrivateChats(new Map(privateChats));
                    }
                }
                break;
            case "MESSAGE":
                setPublicChats((prev) => [...prev, payloadData]);
                break;
            default:
                console.warn("Unknown status received:", payloadData.status);
        }
    };

    const onPrivateMessage = (payload) => {
        const payloadData = JSON.parse(payload.body);
        console.log("Private message received:", payloadData);
        if (privateChats.has(payloadData.senderName)) {
            privateChats.get(payloadData.senderName).push(payloadData);
        } else {
            privateChats.set(payloadData.senderName, [payloadData]);
        }
        setPrivateChats(new Map(privateChats));
    };

    const onConnect = () => {
        console.log("Connected to WebSocket");
        connected.current = true;

        stompClient.subscribe("/chatroom/public", onMessageReceived);
        stompClient.subscribe(`/user/${username}/private`, onPrivateMessage);

        userJoin();
    };

    const onError = (err) => {
        console.error("WebSocket connection error:", err);
    };

    const connect = () => {
        let sock = new SockJS("http://localhost:8080/ws");
        stompClient = over(sock);
        stompClient.connect({}, onConnect, onError);
    };

    const userJoin = () => {
        let chatMessage = {
            senderName: "vietnq",
            status: "JOIN",
        };

        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    };

    const userLeft = () => {
        let chatMessage = {
            senderName: username,
            status: "LEAVE",
        };

        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    };

    const handleLogout = () => {
        userLeft();
        localStorage.removeItem("chat-username");
        navigate("/login");
    };

    const base64ConversionForImages = (e) => {
        if (e.target.files[0]) {
            getBase64(e.target.files[0]);
        }
    };

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => setMedia(reader.result);
        reader.onerror = (error) => console.error("Error converting file:", error);
    };

    const sendMessage = () => {
        if (message.trim().length > 0 || media) {
            stompClient.send(
                "/app/message",
                {},
                JSON.stringify({
                    senderName: username,
                    status: "MESSAGE",
                    media: media,
                    message: message,
                })
            );
            setMessage("");
            setMedia("");
        }
    };

    const sendPrivate = () => {
        if (message.trim().length > 0 && receiver) {
            let chatMessage = {
                senderName: username,
                receiverName: receiver,
                message: message,
                media: media,
                status: "MESSAGE",
            };

            privateChats.get(receiver).push(chatMessage);
            setPrivateChats(new Map(privateChats));

            stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));

            setMessage("");
            setMedia("");
        }
    };

    const tabReceiverSet = (name) => {
        setReceiver(name);
        setTab(name);
    };

    const fetchChatHistory = async (user1, user2) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/messages/history/${user1}/${user2}`
            );

            if (response.status === 200) {
                setPrivateChats((prevChats) => {
                    prevChats.set(user2, response.data);
                    return new Map(prevChats);
                });
            } else {
                console.error("Failed to fetch chat history:", response.status);
            }
        } catch (error) {
            console.error("Error fetching chat history:", error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-[100%]">
            <div className="flex w-full h-full">
                {/* Member List */}
                <div className="flex flex-col p-3 w-[200px] h-[551px] bg-transparent">
                    <ul className="list-none space-y-2">
                        <li
                            key={"o"}
                            className={`p-2 cursor-pointer rounded ${tab === "CHATROOM" ? "bg-blue-500 text-white" : "bg-gray-200"
                                }`}
                            onClick={() => setTab("CHATROOM")}
                        >
                            <span>Chat Room</span>
                        </li>
                        {[...privateChats.keys()].map((name, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    tabReceiverSet(name);
                                    fetchChatHistory(username, name); 
                                }}
                                className={`p-2 cursor-pointer rounded ${tab === name ? "bg-blue-500 text-white" : "bg-gray-200"
                                    }`}
                            >
                                <span className="text-lg">{name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col w-[50%] mt-3">
                    {/* Chat Box */}
                    <div
                        className="p-3 flex-grow overflow-hidden bg-gray-300 border border-green-500 flex flex-col space-y-2 rounded-md"
                        style={{ height: "500px", backgroundColor: "red", color:"black" }}
                    >
                        {tab === "CHATROOM"
                            ? publicChats.map((message, index) => (
                                <div
                                    className={`flex ${message.senderName !== username
                                            ? "justify-start"
                                            : "justify-end"
                                        }`}
                                    key={index}
                                >
                                    <div
                                        className={`p-2 flex flex-col max-w-lg ${message.senderName !== username
                                                ? "bg-white rounded-t-lg rounded-r-lg"
                                                : "bg-blue-500 rounded-t-lg rounded-l-lg"
                                            }`}
                                    >
                                        {message.senderName !== username && (
                                            <div className="rounded bg-blue-400 mb-2 p-1 text-white">
                                                {message.senderName}
                                            </div>
                                        )}
                                        <div
                                            className={
                                                message.senderName === username ? "text-white" : ""
                                            }
                                        >
                                            {message.message}
                                        </div>
                                        {message.media &&
                                            message.media
                                                .split(";")[0]
                                                .split("/")[0]
                                                .split(":")[1] === "image" && (
                                                <img src={message.media} alt="" width={"250px"} />
                                            )}
                                        {message.media &&
                                            message.media
                                                .split(";")[0]
                                                .split("/")[0]
                                                .split(":")[1] === "video" && (
                                                <video width="320" height="240" controls>
                                                    <source src={message.media} type="video/mp4" />
                                                </video>
                                            )}
                                    </div>
                                </div>
                            ))
                            : privateChats.get(tab).map((message, index) => (
                                <div
                                    className={`flex ${message.senderName !== username
                                            ? "justify-start"
                                            : "justify-end"
                                        }`}
                                    key={index}
                                >
                                    <div
                                        className={`p-2 flex flex-col max-w-lg ${message.senderName !== username
                                                ? "bg-white rounded-t-lg rounded-r-lg"
                                                : "bg-blue-500 rounded-t-lg rounded-l-lg"
                                            }`}
                                    >
                                        <div
                                            className={
                                                message.senderName === username ? "text-white" : ""
                                            }
                                        >
                                            {message.message}
                                        </div>
                                        {message.media &&
                                            message.media
                                                .split(";")[0]
                                                .split("/")[0]
                                                .split(":")[1] === "image" && (
                                                <img src={message.media} alt="" width={"250px"} />
                                            )}
                                        {message.media &&
                                            message.media
                                                .split(";")[0]
                                                .split("/")[0]
                                                .split(":")[1] === "video" && (
                                                <video width="320" height="240" controls>
                                                    <source src={message.media} type="video/mp4" />
                                                </video>
                                            )}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="flex items-center p-2">
                        <input
                            className="flex-grow p-2 border outline-blue-600 rounded-l-lg"
                            type="text"
                            placeholder="Message"
                            value={message}
                            onKeyUp={(e) => {
                                if (e.key === "Enter" || e.key === 13) {
                                    tab === "CHATROOM" ? sendMessage() : sendPrivate();
                                }
                            }}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <label
                            htmlFor="file"
                            className="p-2 bg-blue-700 text-white rounded-r-none cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="24"
                                fill="currentColor"
                                className="bi bi-paperclip"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                            </svg>
                        </label>
                        <input
                            id="file"
                            type="file"
                            onChange={(e) => base64ConversionForImages(e)}
                            className="hidden"
                        />
                        <input
                            type="button"
                            className="ml-2 p-2 bg-blue-700 text-white rounded cursor-pointer"
                            value="Send"
                            onClick={tab === "CHATROOM" ? sendMessage : sendPrivate}
                        />
                        <input
                            type="button"
                            className="ml-2 p-2 bg-blue-700 text-white rounded cursor-pointer"
                            value="Logout"
                            onClick={handleLogout}
                        />
                    </div>
                </div>
                <div className="pl-4 pt-3">
                    <SearchBar onUserSelect={handlePrivateMessage} />
                </div>
            </div>
        </div>
    );
};
