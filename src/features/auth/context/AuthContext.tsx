import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

// Định nghĩa dữ liệu user mẫu dựa theo thiết kế của bạn
interface UserProfile {
  name: string;
  email: string;
  birthday: string;
  phone: string;
  address: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserProfile | null;
  loginMock: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserProfile | null>(null);

  // Kiểm tra trạng thái đã đăng nhập trước đó từ localStorage khi tải trang
  useEffect(() => {
    const savedAuth = localStorage.getItem("isLoggedIn");
    const savedUser = localStorage.getItem("userData");
    if (savedAuth === "true" && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Hàm giả lập đăng nhập thành công
  const loginMock = (email: string) => {
    const mockUser: UserProfile = {
      name: "Phan Hai",
      email: email || "phanhai0407@gmail.com",
      birthday: "07/04/2004",
      phone: "0793837962",
      address: "Chưa cập nhật",
    };

    setIsAuthenticated(true);
    setUser(mockUser);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userData", JSON.stringify(mockUser));
  };

  // Hàm đăng xuất
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loginMock, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook để sử dụng tiện lợi ở các component khác
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}