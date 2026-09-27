import { Outlet, useLocation } from "react-router";
import Sitebar from "../Navigation/Sitebar";
import Header from "../Navigation/Header/Header";
import "./Layout.css";
import { useEffect, useState } from "react";
import MobileMenu from "../Navigation/MobileMenu/MobileMenu";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const timeoutId = setTimeout(() => {
      setMobileMenuOpen(false);
    }, 0);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    const handleResize = (e) => {
      if (e.matches) {
        setMobileMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="app-layout" style={{ display: "flex", minHeight: "100vh" }}>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <Sitebar />
      <main className="main-content">
        <Header
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />
        <Outlet />
      </main>
    </div>
  );
}
