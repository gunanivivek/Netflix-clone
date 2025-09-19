import { useAppSelector } from "@/hooks/useAppSelector";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import HeaderRight from "./HeaderComp/RightHeader";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import AvatarMenu from "./HeaderComp/AvatarMenu";
import { setLanguage } from "@/features/language/languageSlice";
import type { RootState } from "@/store/ProStore";
import { useAppDispatch } from "@/hooks/useAppDispatch";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navLoading, setNavLoading] = useState(false);
  const dispatch = useAppDispatch();
  const currentLang = useAppSelector((state: RootState) => state.language.code);

  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/home" || location.pathname === "/browse")
      return;
    setNavLoading(true);
    setTimeout(() => {
      navigate("/");
      setNavLoading(false);
    }, 400);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    window.addEventListener("scroll", closeMenu);
    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("scroll", closeMenu);
    };
  }, [menuOpen]);

  if (navLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-10 py-4 sm:py-6 z-30 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      {/* Left: Logo & Hamburger */}
      <div className="flex items-center flex-shrink-0 hover:cursor-pointer   gap-2 sm:gap-8">
        {/* Netflix Logo */}

        <img
          src="/Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
          className="h-7 sm:h-9 w-auto ml-0"
          onClick={handleLogoClick}
        />

        {/* Hamburger for mobile */}
        {user && (
          <button
            className="lg:hidden ml-2 text-white focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            {menuOpen ? (
              <HiOutlineX className="w-7 h-7" />
            ) : (
              <HiOutlineMenu className="w-7 h-7" />
            )}
          </button>
        )}

        {/* Nav Links (desktop only) */}
        {location.pathname !== "/membership" &&
          location.pathname !== "/overview" &&
          location.pathname !== "/devices" &&
          location.pathname !== "/profile" &&
          location.pathname !== "/security" &&
          location.pathname !== "/help" &&
          user && (
            <nav className="hidden lg:flex ml-5 gap-6 mb-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-sans transition ${
                    isActive ? "font-bold " : " text-white hover:text-gray-400"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/tvshows"
                className={({ isActive }) =>
                  `text-lg font-sans transition ${
                    isActive ? "font-bold text-gray-800" : " text-white hover:text-gray-400"
                  }`
                }
              >
                TV Shows
              </NavLink>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `text-lg font-sans transition ${
                    isActive ? "font-bold text-gray-800" : " text-white hover:text-gray-400"
                  }`
                }
              >
                Movies
              </NavLink>
              <NavLink
                to="/new-popular"
                className={({ isActive }) =>
                  `text-lg font-sans transition ${
                    isActive ? "font-bold text-gray-800" : " text-white hover:text-gray-400"
                  }`
                }
              >
                New & Popular
              </NavLink>
              <NavLink
                to="/my-list"
                className={({ isActive }) =>
                  `text-lg font-sans transition ${
                    isActive ? "font-bold text-gray-800" : " text-white hover:text-gray-400"
                  }`
                }
              >
                My List
              </NavLink>
              <NavLink
                to="/browse-by-lang"
                className={({ isActive }) =>
                  `text-lg font-sans transition ${
                    isActive ? "font-bold text-gray-800" : " text-white hover:text-gray-400"
                  }`
                }
              >
                Browse by Language
              </NavLink>
            </nav>
          )}
      </div>

      {/* Hamburger Menu Drawer (mobile only) */}
      {user && menuOpen && (
        <div className="fixed inset-0 z-30 bg-black/90 flex flex-col items-center justify-start pt-24 lg:hidden transition">
          <nav className="flex flex-col gap-6 w-full items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl font-sans transition ${
                  isActive ? "font-bold" : " text-white hover:text-gray-400"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/tvshows"
              className={({ isActive }) =>
                `text-xl font-sans transition ${
                  isActive ? "font-bold" : " text-white hover:text-gray-400"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              TV Shows
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `text-xl font-sans transition ${
                  isActive ? "font-bold" : " text-white hover:text-gray-400"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Movies
            </NavLink>
            <NavLink
              to="/new-popular"
              className={({ isActive }) =>
                `text-xl font-sans transition ${
                  isActive ? "font-bold" : " text-white hover:text-gray-400"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              New & Popular
            </NavLink>
            <NavLink
              to="/my-list"
              className={({ isActive }) =>
                `text-xl font-sans transition ${
                  isActive ? "font-bold" : " text-white hover:text-gray-400"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              My List
            </NavLink>
            <NavLink
              to="/browse-by-lang"
              className={({ isActive }) =>
                `text-xl font-sans transition ${
                  isActive ? "font-bold" : " text-white hover:text-gray-400"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Browse by Language
            </NavLink>
          </nav>
        </div>
      )}

      {/* Right: Auth or Profile/Icons */}
      {!user ? (
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <select
            className="bg-black/50 text-white px-3 py-1 rounded hover:cursor-pointer hover:bg-black/70 transition"
            value={currentLang.toUpperCase()}
            onChange={(e) => dispatch(setLanguage(e.target.value))}
          >
            <option value="EN">English</option>
            <option value="HI">Hindi</option>
          </select>

          {/* Sign In Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded font-semibold transition">
            <Link to="/login">Sign In</Link>
          </button>
        </div>
      ) : (
        <>
          <div className="hidden sm:block">
            <HeaderRight />
          </div>
          {/* Mobile right icons */}
          <div className="flex sm:hidden items-center gap-4">
            <button
              className="text-white"
              aria-label="Search"
              onClick={() => navigate("/search")}
            >
              {/* 🔍 Icon */}
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                />
              </svg>
            </button>
            <button className="text-white" aria-label="Notifications">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                data-icon="BellMedium"
                data-icon-id=":r1:"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div className="text-white" aria-label="Account">
              <AvatarMenu />
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
