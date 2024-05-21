import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./view/home/home";
import Login from "./view/login/login";
import SignUp from "./view/signup/signup";
import Loading from "./component/loading/loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
