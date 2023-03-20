import "./Header.css";
import HeaderNav from "./HeaderNav";
import Button from "../Button/Button";
import Flex from "../Layouts/Flex/Flex";
import { useContext, useState } from "react";
import LoginContext from "../../context/LoginContext";

const Header = ({ onLogout }) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <section className="header-section">
      <Flex
        Element="header"
        className="header flex--justify-space flex--align-center"
      >
        <h1 className="header__heading">A Typical Page</h1>

        {isLoggedIn && (
          <Flex className="header__content flex--align-center flex--gap">
            <HeaderNav navOpen={navOpen} />
            <Button className="header__btn btn--blue" onClick={onLogout}>
              Logout
            </Button>
            <button
              className="header__nav-toggle"
              aria-controls="header__nav"
              aria-expanded={navOpen}
              onClick={handleClick}
            >
              <span className="sr-only">Menu</span>
            </button>
          </Flex>
        )}
      </Flex>
    </section>
  );
};

export default Header;
