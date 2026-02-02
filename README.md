src/
└── app/
    ├── layout.tsx                 # Root layout (theme, providers)
    ├── page.tsx                   # Entry (redirect / home)
    ├── loading.tsx
    ├── error.tsx
    ├── not-found.tsx
    ├── middleware.ts




app/
├── (public)/
│   ├── layout.tsx                 # Navbar, footer
│   ├── page.tsx                   # Home
│   ├── location/
│   │   └── page.tsx               # Select delivery location
│   ├── search/
│   │   └── page.tsx
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── offers/
│   │   └── page.tsx
│   └── subscription/
│       └── page.tsx


app/
├── (auth)/
│   ├── layout.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── otp/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   └── logout/
│       └── page.tsx



app/
├── (user)/
│   ├── layout.tsx                 # Bottom nav
│   ├── cart/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   ├── orders/
│   │   ├── page.tsx
│   │   └── [orderId]/
│   │       └── page.tsx
│   ├── addresses/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   └── wallet/
│       └── page.tsx


app/
├── (delivery)/
│   ├── layout.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── orders/
│   │   └── page.tsx
│   ├── order/
│   │   └── [id]/
│   │       └── page.tsx
│   └── earnings/
│       └── page.tsx



app/
├── (admin)/
│   ├── layout.tsx                 # Admin layout (sidebar + header)
│   ├── dashboard/
│   │   └── page.tsx               # Admin dashboard
│   ├── products/
│   │   ├── page.tsx               # Products list
│   │   └── create/
│   │       └── page.tsx           # Create new product
│   ├── categories/
│   │   ├── page.tsx               # Categories list
│   │   └── create/
│   │       └── page.tsx           # Add category
│   ├── inventory/
│   │   └── page.tsx               # Inventory list
│   ├── orders/
│   │   └── page.tsx               # Orders list
│   ├── users/
│   │   └── page.tsx               # Users list
│   ├── stores/
│   │   └── page.tsx               # Stores list
│   └── coupons/
│       └── page.tsx               # Coupons list
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Table.tsx
│   │   └── Input.tsx
│   └── layout/
│       ├── Sidebar.tsx
│       └── Header.tsx
├── lib/
│   └── api.ts                      # API helper functions
├── types/
│   └── index.ts                    # TypeScript types/interfaces
└── styles/
    └── globals.css




app/
├── api/
│   ├── auth/
│   │   └── route.ts
│   ├── products/
│   │   └── route.ts
│   ├── cart/
│   │   └── route.ts
│   ├── orders/
│   │   └── route.ts
│   └── payments/
│       └── route.ts



































































This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
