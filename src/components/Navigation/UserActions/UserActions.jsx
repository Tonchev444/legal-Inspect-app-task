import { useEffect, useRef, useState } from "react";
import { LuBellDot, LuBrainCircuit, LuPlus } from "react-icons/lu";
import "./UserActions.css";
import ProfileOptions from "../../ProfileOptions/ProfileOptions";

const UserActions = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="user-actions">
      <div className="action-buttons">
        <button className="icon-btn header-button" aria-label="Notifications">
          <LuPlus />
        </button>
        <button className="icon-btn header-button" aria-label="Language">
          <LuBrainCircuit />
        </button>
        <button className="icon-btn header-button" aria-label="Toggle Theme">
          <LuBellDot />
        </button>
      </div>

      <div
        className="profile-btn header-button"
        onClick={() => setProfileMenuOpen((open) => !open)}
        aria-expanded={profileMenuOpen}
        aria-haspopup="menu"
      >
        <div className="avatar-wrapper">
          <img src="src\assets\profile.jpeg" />
        </div>
        {profileMenuOpen && (
          <div className="user-dropdown-menu">
            <ProfileOptions menuRef={menuRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserActions;
