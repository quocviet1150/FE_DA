import React, { Suspense } from "react";
import AppRouter from "./routes/AppRouter";
import { LoadingProvider } from "./component/loading/LoadingProvider";
import Loading from "./component/loading/loading";
import { ToastContainer } from "react-toastify";
import "./i18n";

const App = () => {
  return (
    <Suspense >
      <LoadingProvider>
        <Loading />
        <AppRouter />
        <ToastContainer />
      </LoadingProvider>
    </Suspense>
  );
};

export default App;
