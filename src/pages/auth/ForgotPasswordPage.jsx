import { Link } from "react-router-dom";

    export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
        
        {/* MAIN */}
        <main className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
            
            <div className="w-full max-w-[480px] bg-white rounded-xl shadow-lg border border-[#e5e7eb] overflow-hidden relative z-10">
            
            <div className="p-8 flex flex-col gap-6">
                
                <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 mb-2">                    🔐
                </div>
                <h1 className="text-3xl font-black">
                    Quên Mật khẩu
                </h1>
                <p className="text-gray-500">
                    Khôi phục quyền truy cập vào tài khoản của bạn.
                </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-center text-gray-700">
                    Nhập email đã đăng ký, chúng tôi sẽ gửi liên kết đặt lại mật khẩu.
                </p>
                </div>

                <form className="flex flex-col gap-4">
                
                <div className="flex flex-col gap-2">
                    <label className="font-medium" htmlFor="email">
                    Địa chỉ Email
                    </label>

                    <input
                    id="email"
                    type="email"
                    placeholder="user@example.com"
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                </div>

                <button
                    type="button"
                    className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition"
                >
                    Gửi liên kết xác nhận
                </button>
                </form>

                <div className="flex justify-center mt-2">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-indigo-600 transition"
                >
                    ← Quay lại Đăng nhập
                </Link>
                </div>

            </div>
            </div>
        </main>

        <footer className="py-6 text-center text-sm text-gray-500">
            © 2023 IT Docs Share. All rights reserved.
        </footer>

        </div>
    );
    }