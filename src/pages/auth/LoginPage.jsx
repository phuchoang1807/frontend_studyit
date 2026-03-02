import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // chặn reload trang

    // Sau này bạn call API login ở đây
    // Nếu thành công thì chuyển trang

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex bg-[#f3f4f6]">
      
      {/* LEFT SIDE - FORM */}
      <div className="w-1/2 min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-md px-8">
          
          {/* HEADER */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-indigo-600 mb-6">
              <div className="w-9 h-9">
                <svg viewBox="0 0 48 48" fill="currentColor">
                  <path d="M44 11.27C44 14.01 39.83 16.39 33.69 17.63C39.83 18.87 44 21.26 44 24C44 26.73 39.83 29.12 33.69 30.36C39.83 31.6 44 33.98 44 36.72C44 40.74 35.04 44 24 44C12.95 44 4 40.74 4 36.72C4 33.98 8.16 31.6 14.31 30.36C8.16 29.12 4 26.73 4 24C4 21.26 8.16 18.87 14.31 17.63C8.16 16.39 4 14.01 4 11.27C4 7.25 12.95 4 24 4C35.04 4 44 7.25 44 11.27Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                DevDocs Hub
              </h2>
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back
            </h1>
            <p className="text-gray-500 mt-2">
              Please enter your details to sign in.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleLogin}>
            
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="user@example.com"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  className="w-full h-12 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-indigo-600 font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full h-12 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          </form>

          {/* SOCIAL */}
          <div className="mt-8">
            <p className="text-center text-gray-400 text-sm mb-4">
              Or continue with
            </p>

            <div className="flex gap-4">
              <button className="flex-1 h-11 border rounded-lg hover:bg-gray-50">
                Google
              </button>
              <button className="flex-1 h-11 border rounded-lg hover:bg-gray-50">
                GitHub
              </button>
            </div>
          </div>

          {/* SIGN UP */}
          <p className="mt-8 text-sm text-gray-500">
            Don’t have an account?
            <Link
              to="/register"
              className="text-indigo-600 font-semibold ml-1"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - BANNER */}
      <div className="w-1/2 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6ecff] to-[#f4f6fb]">
        <div className="text-center max-w-md px-8">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW0c8Lica8XJjUJpQxmzasAS4BJ3EksZpCX022xXa-MrZbMr0rCz3m_eTL1_7uCi-JfMMDDw_eFKh6X4hjl6cTauazy9LOPESPEyMkU2zj2JzKBBu4nUjx-3MrIwe3SWWACM6cDBoOFvANeF1MYcoVaItTUVoZkHvBx_l7noIP5VfNjMLR34P2NOpX1ELo7ONPTv15W6yT-BD3Wr_vIQlDSongu7YwQScjRsKbu8I9FJaGrAwx_UvYsjORtmAALU7R8OkIxqPoXh4"
            alt="coding"
            className="w-72 mx-auto"
          />
          <h3 className="text-2xl font-bold mt-6 text-gray-800">
            Master Your Craft
          </h3>
          <p className="text-gray-500 mt-3">
            Access thousands of curated documentation and connect with developers.
          </p>
        </div>
      </div>
    </div>
  );
}