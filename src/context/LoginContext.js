import { useState, createContext } from "react";

const LoginContext = createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

const LoginContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
