// components/layout/Sidebar.tsx
import Link from 'next/link';

const links = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/products/create', label: 'Add Product' }, // <-- added this
  { href: '/admin/categories', label: 'Categories' },
  { href: '/admin/inventory', label: 'Inventory' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/stores', label: 'Stores' },
  { href: '/admin/coupons', label: 'Coupons' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav className="flex flex-col gap-3">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:bg-gray-700 p-2 rounded"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
