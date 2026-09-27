import { useState } from "react";
import { LuCircleChevronLeft } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import "./Navigation.css";
import { Link } from "react-router";
import NavMenu from "./NavMenu";
import { RxStitchesLogo } from "react-icons/rx";

const Sitebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`sitebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className={"sitebar-container"}>
        <div className="site-header">
          <Link to="/" className="sitebar-logo">
            <RxStitchesLogo className="menu-icon" />
            <span className="sidebar-text">LegalInspect</span>
          </Link>
          <button
            className={`collapse-button ${isCollapsed ? "collapsed" : ""}`}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <LuCircleChevronLeft className="menu-icon collapse-icon" />
          </button>
        </div>
        <div className="site-menu">
          <NavMenu />
        </div>
      </div>
      <div className="sitebar-container">
        <div className="logout-container">
          <button
            className="logout-button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <MdLogout className="menu-icon" />
            <span className="sidebar-text">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sitebar;
