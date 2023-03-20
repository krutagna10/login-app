import React, { useState, useEffect, useContext } from "react";
import LoginContext from "./context/LoginContext";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = ({ email, password }) => {
    setIsLoggedIn(true);
    setUserDetails((prevState) => {
      return {
        ...prevState,
        email: email,
        password: password,
      };
    });
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      <Header />
      <main>{isLoggedIn ? <Home /> : <Login />}</main>
    </LoginContext.Provider>
  );
}

export default App;
