import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Magnetic from "../../motion/Magnetic";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../../data/nav";
import { profile } from "../../data/profile";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
          scrolled ? "border-b border-line/10 bg-paper/70 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <nav className="shell flex items-center justify-between py-4 text-ink">
          <Magnetic>
            <Link to="/" data-cursor className="font-display text-lg font-bold tracking-tight">
              {profile.displayName}
              <span className="text-accent">.</span>
            </Link>
          </Magnetic>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} data-cursor className="group relative text-sm font-medium">
                  {({ isActive }) => (
                    <span className="relative">
                      {l.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-[120] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={open} />
    </>
  );
}
