import { LuLogOut, LuSettings, LuUser } from "react-icons/lu";
import "./ProfileOptions.css";

const ProfileOptions = ({ menuRef }) => {
  return (
    <div className="user-options" ref={menuRef}>
      <div className="dropdown-header">
        <span className="dropdown-user-name">Alex Morgan</span>
        <span className="dropdown-user-role">Senior Partner</span>
      </div>

      <button className="dropdown-item">
        <LuUser className="dropdown-icon" />
        <span>My Profile</span>
      </button>

      <button className="dropdown-item">
        <LuSettings className="dropdown-icon" />
        <span>Settings</span>
      </button>

      <button className="dropdown-item logout-item">
        <LuLogOut className="dropdown-icon" />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default ProfileOptions;
