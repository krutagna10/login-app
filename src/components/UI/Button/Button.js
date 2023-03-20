import classes from "./Button.module.css";

const Button = ({ className, children, onClick, type }) => {
  return (
    <button
      className={`${classes.btn} ${classes["btn--blue"]} ${className}`}
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
