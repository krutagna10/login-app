import { useReducer, useContext } from "react";
import { emailReducer, passwordReducer } from "./loginReducers";
import LoginContext from "../../context/LoginContext";
import Button from "../Button/Button";
import Flex from "../Layouts/Flex/Flex";
import "./Login.css";

const validateEmail = (inputEmail) => {
  // Returns true if email is valid and false if it is not valid
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return inputEmail.match(mailFormat) ? true : false;
};

const Login = () => {
  const { onLogin } = useContext(LoginContext);

  const [email, emailDispatch] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [password, passwordDispatch] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = email;
  const { isValid: passwordIsValid } = password;

  const handleEmailChange = (event) => {
    emailDispatch({
      type: "user-input",
      changedValue: event.target.value,
      changedIsValid: validateEmail(event.target.value),
    });
  };

  const handlePasswordChange = (event) => {
    passwordDispatch({
      type: "user-input",
      changedValue: event.target.value,
      changedIsValid: event.target.value.trim().length >= 7,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email.value)) {
      emailDispatch({ type: "change-isValid", changedIsValid: false });
      return;
    }

    if (password.value.trim().length < 7) {
      passwordDispatch({ type: "change-isValid", changedIsValid: false });
      return;
    }

    onLogin({ email: email, password: password });
    emailDispatch({ type: "reset-email" });
    passwordDispatch({ type: "reset-password" });
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div
          className={`form__input-wrapper ${
            email.isValid === false ? "error" : ""
          }`}
        >
          <Flex className="flex--justify-space flex--align-center">
            <label className="form__label" htmlFor="form__input-email">
              Email
            </label>
            {email.isValid === false && (
              <span
                className="form__error-message"
                id="form__error-message--password"
              >
                {email.value.trim().length === 0
                  ? "Email cannot be empty"
                  : "Enter a valid email"}
              </span>
            )}
          </Flex>
          <input
            className="form__input"
            id="form__input-email"
            type="email"
            onChange={handleEmailChange}
            value={email.value}
            aria-label="Email address"
            aria-describedby="form__error-message--email"
          />
        </div>

        <div
          className={`form__input-wrapper ${
            password.isValid === false ? "error" : ""
          }`}
        >
          <Flex className="flex--justify-space flex--align-center">
            <label className="form__label" htmlFor="form__input-password">
              Password
            </label>
            {password.isValid === false && (
              <span
                className="form__error-message"
                id="form__error-message--password"
              >
                {password.value.trim().length === 0
                  ? "Password cannot be empty"
                  : "Password length should be greater than equal to 8"}
              </span>
            )}
          </Flex>
          <input
            className="form__input"
            id="form__input-password"
            type="password"
            aria-label="Password"
            value={password.value}
            aria-describedby="form__error-message--password"
            onChange={handlePasswordChange}
          />
        </div>

        <Button type="submit" className="btn--blue">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
