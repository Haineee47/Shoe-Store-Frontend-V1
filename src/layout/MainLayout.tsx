import { Outlet } from "react-router-dom";
import { Header } from "@/layout/Header"; // Đổi sang @/ và kiểm tra xem có chữ 's' hay không
import { Footer } from "@/layout/Footer"; // Đổi sang @/ và sửa lỗi export ở file Footer nữa nhé


export function MainLayout() {
    return (
      <div className="flex min-h-screen flex-col bg-white text-stone-800">
        {/* Header luôn cố định ở trên cùng */}
        <Header />
  
        {/* Vùng nội dung thay đổi theo từng trang */}
        <main className="flex-1">
          <Outlet />
        </main>
  
        {/* Footer luôn cố định ở dưới cùng */}
         <Footer /> 
      </div>
    );
  }