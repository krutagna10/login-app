import React, { useContext } from "react";
import { LoginContext } from "./context/LoginContext";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <React.Fragment>
      <Header />
      <main>{isLoggedIn ? <Home /> : <Login />}</main>
    </React.Fragment>
  );
}

export default App;
