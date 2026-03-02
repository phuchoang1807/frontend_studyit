import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function Header() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Nav */}
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-2 group" href="#">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <span className="material-icons-outlined text-xl">
                  description
                </span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                DevDocs Hub
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <a className="text-sm font-medium text-primary border-b-2 border-primary pb-1" href="#">
                Trang chủ
              </a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors" href="#">
                Khám phá
              </a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors" href="#">
                Cộng đồng
              </a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors" href="#">
                Tải lên
              </a>
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
              className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              onClick={toggleDarkMode}
            >
              <DarkModeIcon className="dark:hidden" />
<LightModeIcon className="hidden dark:block" />
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
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM28gaZL2I9W0a0loEHCxWCp-Apm8EMnzXlPGVW-zT9ZlqpH-VE3MZlYTZSkJfV2ZhkUAp9aqw1Vwe_gfKXFTReMY8j6LYy0cgJfm1AAHbjSX3qv49u2rh1UsqLvFpPyry0fCBk9SxhgOhlAJqRZiwWdLfZCWsWgDreJwyMmrgEiJTj6z3mo5gixSbKgKpelwPAm9XrQ7gupBmGK8fAw3glIOnXpABSED9Fj3G6AtQbfG2JnfHSdb7BxJEKCkXYlQhXGtj2wL_qHo"
                alt="Profile avatar"
              />
              <ExpandMoreIcon className="text-slate-400" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}