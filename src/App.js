import React from "react";
import AppRouter from "./routes/AppRouter";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="314797400419-36q4svfkerjm47ja45hrn7kfbgjeo0d9.apps.googleusercontent.com">
        <AppRouter />
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
