import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains("dark"));
  const [activeNav, setActiveNav] = useState("Trang chủ");
  const navItems = ["Trang chủ", "Khám phá", "Tải lên"];
  const toggleDarkMode = () => {
    const nextIsDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", nextIsDarkMode);
    setIsDarkMode(nextIsDarkMode);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Nav */}
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-2 group" href="#">
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                StudyIT
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeNav === item;

                return (
                  <button
                    key={item}
                    className={`text-sm font-medium pb-1 border-b-2 transition-all ${
                      isActive
                        ? "text-primary border-primary -translate-y-0.5"
                        : "text-slate-600 dark:text-slate-400 border-transparent hover:text-primary dark:hover:text-white"
                    }`}
                    onClick={() => setActiveNav(item)}
                    type="button"
                  >
                    {item}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                placeholder="Tìm kiếm tài liệu, khóa học..."
                type="text"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            
            {/* Dark Mode */}
            <button
              aria-label={isDarkMode ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}
              className="relative h-10 w-10 overflow-hidden rounded-full text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={toggleDarkMode}
            >
              <DarkModeIcon
                className={`absolute inset-0 m-auto transition-all duration-300 ${
                  isDarkMode ? "scale-75 rotate-45 opacity-0" : "scale-100 rotate-0 opacity-100"
                }`}
              />
              <LightModeIcon
                className={`absolute inset-0 m-auto transition-all duration-300 ${
                  isDarkMode ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-45 opacity-0"
                }`}
              />
            </button>

            {/* Notification */}
            <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <NotificationsIcon />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>

            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>

            {/* Avatar */}
            <button className="flex items-center gap-2 p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <img
               alt="Profile avatar"
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM28gaZL2I9W0a0loEHCxWCp-Apm8EMnzXlPGVW-zT9ZlqpH-VE3MZlYTZSkJfV2ZhkUAp9aqw1Vwe_gfKXFTReMY8j6LYy0cgJfm1AAHbjSX3qv49u2rh1UsqLvFpPyry0fCBk9SxhgOhlAJqRZiwWdLfZCWsWgDreJwyMmrgEiJTj6z3mo5gixSbKgKpelwPAm9XrQ7gupBmGK8fAw3glIOnXpABSED9Fj3G6AtQbfG2JnfHSdb7BxJEKCkXYlQhXGtj2wL_qHo"
                
              />
              <ExpandMoreIcon className="text-slate-400" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}