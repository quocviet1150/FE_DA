import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const HomePage = () => {
  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    console.log("Google login successful!", token);
    

    try {
      const response = await axios.get("http://localhost:8080/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User info:", response.data);
      alert(`Welcome, ${response.data.name}`);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => alert("Google Login Failed!")}
      />
    </div>
  );
};

export default HomePage;
