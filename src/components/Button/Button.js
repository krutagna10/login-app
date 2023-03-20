import "./Button.css";

const Button = ({ className, children, onClick, type, disabled }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
