# 👟 Shoe Store Frontend (V1)

Giao diện cửa hàng giày thời trang cao cấp được xây dựng trên nền tảng **React + TypeScript + Vite**. Dự án áp dụng kiến trúc **Features-Based / Domain-Driven Design (DDD)** ở phía Frontend, phân tách rõ ràng cấu trúc để sẵn sàng tích hợp với hệ thống Backend Spring Boot (DDD Architecture) trong tương lai.

---

## 🎯 Phạm vi Triển khai: Giai đoạn 1 (Landing Page & Storefront)

Trong giai đoạn chưa có Backend, hệ thống tập trung hoàn thiện trải nghiệm người dùng (UX/UI) và điều hướng mượt mà. 

> ⚠️ **Kỷ luật thiết kế:** Tuyệt đối **không cài đặt form "Đặt hàng nhanh" trực tiếp** tại Landing Page lúc này để tránh việc tạo đơn giả lập không có nơi xử lý. Toàn bộ các nút kêu gọi hành động (CTA) sẽ được điều hướng chuẩn hóa về hệ thống Route (`/products`, `/login`, `/register`) hoặc kích hoạt Modal "Sắp ra mắt".

### Cấu trúc Thành phần Landing Page:
*   **Announcement Bar:** Thông báo chiến dịch (Freeship, đổi trả, khuyến mãi).
*   **Header / Navigation:** Thanh điều hướng chính (Logo, Danh mục Nam/Nữ/Sneaker/Sale, Ô tìm kiếm, Giỏ hàng, Đăng nhập/Đăng ký).
*   **Hero Banner:** Banner chính thu hút, nút CTA điều hướng bộ sưu tập.
*   **Category Showcase:** Phân loại danh mục trực quan (Giày nam, nữ, Sneaker, Sandal, Phụ kiện).
*   **Featured Products:** Danh sách sản phẩm nổi bật (Product Card hiển thị giá gốc/giá sale, đánh giá, badge bestseller, nút thêm nhanh vào giỏ hàng).
*   **Brand / USP Section:** Lợi thế cạnh tranh (Chất liệu cao cấp, đổi size 7 ngày, bảo hành).
*   **Promotional Banner:** Banner truyền thông cho chiến dịch Sale theo mùa.
*   **New Arrivals:** Khu vực trưng bày sản phẩm mới lên kệ.
*   **Social Proof:** Đánh giá từ khách hàng, số sao trung bình kèm hình ảnh thực tế.
*   **Newsletter:** Form đăng ký nhận thông tin ưu đãi qua Email.
*   **Footer:** Hệ thống link chính sách (Giao hàng, đổi trả, bảo hành), thông tin liên hệ và Social links.

---

## 🏗️ Kiến trúc Thư mục (Architecture)

Mã nguồn được tổ chức theo hướng mô-đun hóa (Modularization). Khi Backend xuất hiện, nhà phát triển chỉ cần bổ sung các tầng `api/`, `hooks/`, `queries/` vào từng feature tương ứng mà không cần đập đi xây lại cấu trúc UI hiện tại.

```text
src/
├── app/                  # Cấu hình toàn cục (Global Configuration)
│   ├── router/          # Định tuyến hệ thống (AppRouter.tsx)
│   └── providers/       # Các Provider bọc toàn ứng dụng (Theme, Auth, CartContext...)
│
├── assets/               # Tài nguyên tĩnh (Static Assets)
│   ├── images/          # Hình ảnh chia theo mục (banners, categories, products)
│   └── icons/           # Bộ icon sử dụng trong dự án
│
├── core/                 # Tầng dùng chung toàn hệ thống (Shared Kernel / Reusable)
│   ├── components/      # Các UI Component nguyên tử (Button, Container, ProductCard, SectionTitle)
│   ├── constants/       # Các hằng số hệ thống cố định (routes.ts)
│   ├── hooks/           # Các Custom Hooks tiện ích dùng chung (useLocalStorage...)
│   └── utils/           # Các hàm bổ trợ helper độc lập (currency.ts)
│
├── features/             # Tầng Nghiệp vụ chính (Domain Bounded Contexts)
│   ├── auth/            # Xác thực người dùng (LoginPage.tsx, RegisterPage.tsx, auth.types.ts)
│   ├── cart/            # Giỏ hàng & Xử lý lưu trữ trạng thái (CartContext.tsx, CartPage.tsx)
│   ├── product/         # Nghiệp vụ sản phẩm (ProductListPage.tsx, dữ liệu mẫu product.mock.ts)
│   └── landing-page/    # Storefront Composition Layer (Tập hợp các Section của HomePage, landing.mock.ts)
│
├── layouts/              # Bộ khung bọc giao diện hệ thống (MainLayout, Header, Footer)
├── styles/               # Cấu hình CSS toàn cục (index.css tích hợp Tailwind)
├── App.tsx               # Thành phần gốc khởi tạo ứng dụng
└── main.tsx              # Điểm khởi đầu (Entry point) của dự án



⚙️ Kỷ luật Phát triển Frontend (DDD-Ready)
Phát triển dựa trên Mock Data (mocks/): Toàn bộ dữ liệu mẫu phải được định nghĩa thông qua các file types.ts nghiêm ngặt, mô phỏng chính xác cấu trúc Spring Boot DTO/Entity dự kiến để tránh xung đột kiểu dữ liệu sau này.

Tách biệt State độc lập: Sử dụng CartContext kết hợp với useLocalStorage ở tầng core/ nhằm giả lập hành vi lưu trữ giỏ hàng thực tế mà không phụ thuộc vào Database của Backend.

UI Components thuần túy: Các components bên trong features/ và core/components/ chỉ nhận dữ liệu thông qua Props và phát Event ra ngoài thông qua Callback Functions, giữ tính độc lập tuyệt đối với API layer.

🛠️ Công nghệ Sử dụng (Tech Stack)
Framework: React 18 / 19 (TypeScript)

Bundler: Vite (Tối ưu hóa tốc độ biên dịch và HMR)

Styling: Tailwind CSS (Responsive Design)

Code Quality: ESLint (Đảm bảo quy chuẩn code sạch)

