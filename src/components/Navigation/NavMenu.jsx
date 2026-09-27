import { BsBuildingGear } from "react-icons/bs";
import {} from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { GoGear, GoWorkflow } from "react-icons/go";
import { LuChartArea, LuMessageCircleQuestion } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import "./Navigation.css";
import { Link, useLocation } from "react-router";
import { VscHome, VscNote, VscSearch } from "react-icons/vsc";

const NavMenu = () => {
  const location = useLocation();
  const menuGroups = [
    {
      id: "main",
      title: "MAIN",
      items: [
        { id: "dashboard", title: "Dashboard", icon: VscHome, path: "/" },
        { id: "cases", title: "Cases", icon: VscNote, path: "/cases" },
        {
          id: "legal_search",
          title: "Legal Search",
          icon: VscSearch,
          path: "/legal-search",
        },
        {
          id: "smart_review",
          title: "Smart Review",
          icon: BsBuildingGear,
          path: "/smart-review",
        },
      ],
    },
    {
      id: "analytics",
      title: "ANALYTICS",
      items: [
        {
          id: "compliance",
          title: "Compliance View",
          icon: LuChartArea,
          path: "/compliance",
        },
        {
          id: "legal_forms",
          title: "Legal Forms",
          icon: FaWpforms,
          path: "/legal-forms",
        },
      ],
    },
    {
      id: "management",
      title: "MANAGEMENT",
      items: [
        { id: "team", title: "Team", icon: RiGroupLine, path: "/team" },
        {
          id: "integrations",
          title: "Integrations",
          icon: GoWorkflow,
          path: "/integrations",
        },
      ],
    },
    {
      id: "other",
      title: "OTHER",
      items: [
        { id: "settings", title: "Settings", icon: GoGear, path: "/settings" },
        {
          id: "support_center",
          title: "Support Center",
          icon: LuMessageCircleQuestion,
          path: "/support",
        },
      ],
    },
  ];
  return (
    <nav className="nav-menu">
      {menuGroups.map((group, index) => (
        <div key={group.id} className="menu-group">
          <div className="sidebar-text menu-group-title">{group.title}</div>
          <div className="menu-items">
            {group.items.map((item) => (
              <Link key={item.id} to={item.path}>
                <div
                  key={item.id}
                  className={`menu-item ${location.pathname === item.path ? "active" : ""} `}
                  onClick={() => {
                    location.pushState({}, "", item.path);
                  }}
                >
                  <item.icon className="menu-icon" />
                  <span className="sidebar-text">{item.title}</span>
                </div>
              </Link>
            ))}
          </div>
          {index < menuGroups.length - 1 && <hr className="divider" />}
        </div>
      ))}
    </nav>
  );
};

export default NavMenu;
