import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layout/MainLayout"; 
import { HomePage } from "@/features/landing-page-shoes/pages/HomePage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { ForgotPasswordPage } from "@/features/auth/pages/ForgotPasswordPage";
import { AccountPage } from "@/features/auth/pages/AccountPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Bộ khung Layout dùng chung Header/Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}