import FacebookIcon from "@mui/icons-material/Facebook";
import GroupsIcon from "@mui/icons-material/Groups";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">

          {/* Logo + Description */}
          <div className="col-span-2">
            <a className="flex items-center gap-2 mb-6" href="#">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">
                  school
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
                IT LearnHub
              </span>
            </a>

            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
              Nền tảng chia sẻ và quản lý tài liệu học tập IT dành cho cộng đồng lập trình viên.
            </p>

            <div className="flex gap-4">
  <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
    <FacebookIcon />
  </a>

  <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
    <GroupsIcon />
  </a>

  <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
    <AlternateEmailIcon />
  </a>
</div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-slate-800 dark:text-white mb-6">
              Về chúng tôi
            </h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary" href="#">Giới thiệu</a></li>
              <li><a className="hover:text-primary" href="#">Điều khoản</a></li>
              <li><a className="hover:text-primary" href="#">Bảo mật</a></li>
              <li><a className="hover:text-primary" href="#">Liên hệ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-slate-800 dark:text-white mb-6">
              Tài nguyên
            </h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary" href="#">Tài liệu</a></li>
              <li><a className="hover:text-primary" href="#">Video</a></li>
              <li><a className="hover:text-primary" href="#">Blog</a></li>
              <li><a className="hover:text-primary" href="#">Roadmap</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2024 IT LearnHub. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <span>Tiếng Việt</span>
            <span>Toàn cầu</span>
          </div>
        </div>

      </div>
    </footer>
  );
}