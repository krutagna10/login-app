import { useEffect, useRef } from "react";
import Flex from "../../Layouts/Flex/Flex";
import classes from "./Input.module.css";

const Input = ({ id, label, isValid, value, onChange, type, ariaLabel }) => {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current.focus());
  }, []);

  return (
    <div className={isValid === false ? classes.error : ""}>
      <Flex className="flex--justify-space flex--align-center">
        <label className={classes["form__label"]} htmlFor={id}>
          {label}
        </label>
        {isValid === false && (
          <span className={classes["form__error-message"]}>
            {value.trim().length === 0
              ? `${label} cannot be empty`
              : `Enter a valid ${label}`}
          </span>
        )}
      </Flex>
      <input
        className={classes["form__input"]}
        id={id}
        ref={inputRef}
        type={type}
        onChange={onChange}
        value={value}
        aria-label={ariaLabel}
      />
    </div>
  );
};

export default Input;
