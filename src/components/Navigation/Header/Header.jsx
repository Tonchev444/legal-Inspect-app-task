import { useLocation } from "react-router";
import "./Header.css";
import { LuSearch, LuMenu } from "react-icons/lu";
import UserActions from "../UserActions/UserActions";
import { PAGE_TITLES } from "../../../consts/consts";

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const location = useLocation();

  const currentTitle = PAGE_TITLES[location.pathname] || "LegalInspect";

  return (
    <header className="app-header">
      <div className="header-title">
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <LuMenu className="menu-icon" />
        </button>
        <h1>{currentTitle}</h1>
      </div>
      <div className="header-body">
        <div className="header-search">
          <LuSearch className="search-icon" />
          <input id="search" type="text" placeholder="Search..." />
        </div>
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
