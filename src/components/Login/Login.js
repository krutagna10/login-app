import { useReducer, useContext } from "react";
import { emailReducer, passwordReducer } from "./loginReducers";
import { LoginContext } from "../../context/LoginContext";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";

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
    <div className={classes["form-wrapper"]}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Input
          id="form__input--email"
          type="email"
          label="Email"
          isValid={email.isValid}
          value={email.value}
          onChange={handleEmailChange}
          ariaLabel="Email Address"
        />
        <Input
          id="form__input-password"
          type="password"
          label="Password"
          isValid={password.isValid}
          value={password.value}
          onChange={handlePasswordChange}
          ariaLabel="Password"
        />
        <Button type="submit" className="btn--blue">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
