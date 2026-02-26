# 🛒 MinMart Frontend (Next.js)

MinMart Frontend is a modern, scalable e-commerce web application built with
**Next.js 13**.  
It works seamlessly with the MinMart Backend API to provide a full-featured
shopping experience for customers, delivery personnel, and admin users.

---

## 🌐 Features

### Public (Guest / Home)

- Browse products, categories, and offers
- Search products by name, category, or tags
- Select delivery location
- Subscription page for newsletters and promotions
- Product detail pages with images, inventory status, and pricing

### Authentication (Auth)

- Login (email/password) and OTP verification
- Registration for new users
- Secure logout flow
- JWT-based authentication integrated with backend

### Customer (User)

- Persistent shopping cart
- Checkout workflow with guest or logged-in accounts
- Order history and order tracking
- Manage addresses, profile, and wallet
- Responsive bottom navigation for mobile-first experience

### Delivery Personnel (Delivery)

- Dashboard with assigned orders
- Track and update order status
- View earnings and completed deliveries

### Admin Panel

- Admin dashboard overview
- CRUD management for products, categories, inventory, orders, users, stores,
  and coupons
- Sidebar + header layout for easy navigation
- Advanced analytics and inventory control integration

---

## 🛠 Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules / Global Styles
- **Components:** Reusable UI components (Button, Table, Input, Sidebar, Header)
- **API Integration:** Axios / Fetch with backend REST API (`src/api/*`)
- **Routing:** Nested routes with layouts for auth, user, delivery, and admin

---

## 📂 Project Structure (App Router)

app/
├── (public)/ # Public pages (home, product, category, offers)
├── (auth)/ # Authentication pages (login, register, OTP)
├── (user)/ # Customer pages (cart, checkout, orders, profile, wallet)
├── (delivery)/ # Delivery personnel pages (dashboard, orders, earnings)
├── (admin)/ # Admin dashboard and management (products, categories, inventory, orders, users, stores, coupons)
├── components/ # Reusable UI & layout components (Buttons, Tables, Inputs, Sidebar, Header)
├── lib/ # API helpers (axios/fetch wrappers, endpoints)
├── types/ # TypeScript interfaces and types
├── styles/ # Global & component-specific CSS
└── api/ # Next.js route handlers (auth, products, cart, orders, payments)
