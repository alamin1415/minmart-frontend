// app/(admin)/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="p-6 bg-white shadow rounded">Total Products: 120</div>
      <div className="p-6 bg-white shadow rounded">Total Orders: 50</div>
      <div className="p-6 bg-white shadow rounded">Total Users: 200</div>
      <div className="p-6 bg-white shadow rounded">Revenue: $12,000</div>
    </div>
  );
}
