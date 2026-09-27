import { LuMenu } from "react-icons/lu";
import NavMenu from "../NavMenu";
import "./MobileMenu.css";
import UserActions from "../UserActions/UserActions";
import ProfileOptions from "../../ProfileOptions/ProfileOptions";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
      <div className="actions-container">
        <button className="mobile-menu-button" onClick={() => onClose()}>
          <LuMenu className="menu-icon" />
        </button>
        <UserActions />
      </div>
      <div className="menu-body">
        <ProfileOptions />
        <NavMenu />
      </div>
    </div>
  );
};

export default MobileMenu;
