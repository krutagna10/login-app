import "./Button.css";

const Button = ({ className, children, onClick, type }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
