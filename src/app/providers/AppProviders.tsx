import React from "react";
// Sau này khi bạn làm đến Giỏ hàng, bạn sẽ import CartProvider vào đây, ví dụ:
// import { CartProvider } from "@/features/cart/context/CartContext";

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <>
      {/* Hiện tại chưa có Context nào, ta trả về children trước */}
      {/* Sau này có giỏ hàng, bạn sẽ bọc như thế này: */}
      {/* <CartProvider> {children} </CartProvider> */}
      {children}
    </>
  );
}