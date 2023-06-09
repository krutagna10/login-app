import classes from "./Header.module.css";
import HeaderNav from "../HeaderNav/HeaderNav";
import Button from "../UI/Button/Button";
import Flex from "../Layouts/Flex/Flex";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

const Header = () => {
  const { isLoggedIn, onLogout } = useContext(LoginContext);
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <section className={classes["header-section"]}>
      <Flex
        Element="header"
        className={`${classes.header} flex--justify-space flex--align-center`}
      >
        <h1>A Typical Page</h1>

        {isLoggedIn && (
          <Flex
            className={`${classes["header__content"]} flex--align-center flex--gap`}
          >
            <HeaderNav navOpen={navOpen} />
            <Button
              className={`${classes["header__btn"]} btn--blue`}
              onClick={onLogout}
            >
              Logout
            </Button>
            <button
              className={classes["header__nav-toggle"]}
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
