import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import DashboardHome from "./pages/dashboard/DashboardHome";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Khi vào "/" sẽ tự động chuyển sang /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Layout KHÔNG có Header + Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        {/* Layout CÓ Header + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
        </Route>

      </Routes>
    </Router>
  );
}