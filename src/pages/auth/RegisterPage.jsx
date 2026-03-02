import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 relative flex items-center justify-center px-4 py-10 overflow-hidden font-sans">
      
      {/* ===== BACKGROUND LAYER ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-white"></div>

        {/* floating tags */}
        <div className="absolute top-[15%] left-[10%] hidden lg:flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow text-sm font-semibold text-slate-600">
          🤖 AI & Robotics
        </div>

        <div className="absolute bottom-[20%] left-[12%] hidden lg:flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow text-sm font-semibold text-slate-600">
          💻 Web Development
        </div>

        <div className="absolute top-[20%] right-[10%] hidden lg:flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow text-sm font-semibold text-slate-600">
          📊 Data Science
        </div>

        <div className="absolute bottom-[25%] right-[15%] hidden lg:flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow text-sm font-semibold text-slate-600">
          ☁️ Cloud & DevOps
        </div>
      </div>

      {/* ===== CARD ===== */}
      <div className="relative z-10 w-full max-w-[560px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        
        {/* HEADER */}
        <div className="px-8 pt-8 pb-4">
          <h1 className="text-3xl font-black text-gray-900 mb-2">
            Đăng ký
          </h1>
          <p className="text-gray-500">
            Tham gia cộng đồng chia sẻ tài liệu IT hàng đầu.
          </p>
        </div>

        <div className="px-8 pb-8 flex flex-col gap-6">

          {/* SOCIAL LOGIN */}
          <div className="grid grid-cols-2 gap-4">
            <button className="h-12 rounded-lg border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center gap-2 font-medium">
              Google
            </button>

            <button className="h-12 rounded-lg border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center gap-2 font-medium">
              GitHub
            </button>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-sm text-gray-400">
              Hoặc đăng ký bằng email
            </span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-5">

            {/* FULL NAME */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                className="mt-2 w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="mt-2 w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Mật khẩu
              </label>

              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  className="w-full h-12 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>

              {/* PASSWORD STRENGTH */}
              <div className="mt-3">
                <div className="flex gap-1 h-1 w-full">
                  <div className="w-1/4 bg-red-400 rounded-full"></div>
                  <div className="w-1/4 bg-gray-200 rounded-full"></div>
                  <div className="w-1/4 bg-gray-200 rounded-full"></div>
                  <div className="w-1/4 bg-gray-200 rounded-full"></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Độ mạnh: Yếu
                </p>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Xác nhận mật khẩu
              </label>

              <div className="relative mt-2">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Nhập lại mật khẩu"
                  className="w-full h-12 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirm ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* TERMS */}
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-500">
                Tôi đồng ý với{" "}
                <span className="text-blue-600 font-medium cursor-pointer">
                  Điều khoản dịch vụ
                </span>{" "}
                và{" "}
                <span className="text-blue-600 font-medium cursor-pointer">
                  Chính sách bảo mật
                </span>
              </p>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-2 h-12 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition active:scale-95"
            >
              Đăng ký ngay
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-500">
            Đã có tài khoản?{" "}
            <Link
  to="/"
  className="text-blue-600 font-semibold"
>
  Đăng nhập ngay
</Link>
          </p>

        </div>
      </div>
    </div>
  );
}