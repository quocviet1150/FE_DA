import React from "react";
import AppRouter from "./routes/AppRouter";
import { LoadingProvider } from "./component/loading/LoadingProvider";
import Loading from "./component/loading/loading";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <LoadingProvider>
      <Loading />
      <AppRouter />
      <ToastContainer />
    </LoadingProvider>
  );
};

export default App;
