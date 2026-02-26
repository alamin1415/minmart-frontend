# 🛒 MinMart Frontend (Next.js 13)

MinMart Frontend is a modern, scalable e-commerce web application built with
**Next.js 13**. It works seamlessly with the MinMart Backend API and provides a
full-featured shopping experience for **customers, delivery personnel, and admin
users**.

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

## 🏗 Project Structure

```
.next/                – Next.js build output folder (auto-generated)
app/                  – Main application folder
│ ├─ admin/           – Admin pages and components
│ ├─ category/        – Category-related pages
│ ├─ components/      – Shared React components (Button, Table, Input, Sidebar, Header)
│ ├─ location/        – Location-related pages
│ ├─ offer/           – Offer-related pages
│ ├─ product/         – Product-related pages
│ ├─ search/          – Search pages
│ ├─ subscription/    – Subscription pages
│ ├─ error.tsx        – Error page
│ ├─ globals.css      – Global styles
│ ├─ layout.tsx       – Main App layout
│ ├─ loading.tsx      – Loading page/component
│ ├─ middleware.ts    – Next.js middleware
│ ├─ not-found.tsx    – 404 page
│ └─ page.tsx         – Main landing page
node_modules/         – Project dependencies
public/               – Static assets (images, fonts, icons, etc.)
```

---

## 🛠 Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules / Global Styles
- **Components:** Reusable UI components (Button, Table, Input, Sidebar, Header)
- **API Integration:** Axios / Fetch with backend REST API (`src/api/*`)
- **Routing:** Nested routes with layouts for auth, user, delivery, and admin

---

## ⚙️ Project Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/minmart-frontend.git
cd minmart-frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Environment Variables

Create a `.env.local` file in the root folder:

```env
NEXT_PUBLIC_API_URL=https://api.mysite.com
NEXT_PUBLIC_MAPBOX_TOKEN=your-mapbox-token
# Add any other environment variables your app needs
```

> **Note:** Use the `NEXT_PUBLIC_` prefix for variables that need to be accessed
> in browser-side code.

### 4️⃣ Run Development Server

```bash
npm run dev
# or
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) to view the app locally.

### 5️⃣ Build for Production

```bash
npm run build
npm start
```

- For production deployment, use `.env.production` for environment variables.

---

## 📂 Config & Dependency Files

- `.gitignore` – Git ignore rules
- `eslint.config.mjs` – ESLint configuration
- `next-env.d.ts` – TypeScript types for Next.js
- `next.config.ts` – Next.js configuration
- `package.json` & `package-lock.json` – Project metadata and dependencies
