import "./Flex.css";

const Flex = ({ Element = "div", className, children }) => {
  return <Element className={`flex ${className}`}>{children}</Element>;
};

export default Flex;