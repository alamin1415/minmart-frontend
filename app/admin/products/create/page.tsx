'use client';

import { useState } from 'react';

type ProductForm = {
  name: string;
  description?: string;
  price: number;
  discount_price?: number;
  sku: string;
  category_id: number;
  weight?: number;
  status?: 'ACTIVE' | 'INACTIVE';
  image?: string; // base64 string
};

const INITIAL_FORM: ProductForm = {
  name: '',
  description: '',
  price: 0,
  discount_price: undefined,
  sku: '',
  category_id: 1,
  weight: undefined,
  status: 'ACTIVE',
  image: undefined,
};

export default function AdminAddProductPage() {
  const [form, setForm] = useState<ProductForm>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm(prev => ({
        ...prev,
        image: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to add product');
      }

      alert('✅ Product created successfully');
      setForm(INITIAL_FORM);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Product</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        {error && (
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Product Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            label="SKU"
            name="sku"
            value={form.sku}
            onChange={handleChange}
            required
          />
          <Input
            label="Price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />
          <Input
            label="Discount Price"
            name="discount_price"
            type="number"
            value={form.discount_price || ''}
            onChange={handleChange}
          />
          <Input
            label="Category ID"
            name="category_id"
            type="number"
            value={form.category_id}
            onChange={handleChange}
            required
          />
          <Input
            label="Weight (kg)"
            name="weight"
            type="number"
            value={form.weight || ''}
            onChange={handleChange}
          />
        </div>

        {/* Status */}
        <div>
          <label className="text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="mt-3 w-full max-h-60 object-contain border border-gray-300 rounded-lg"
            />
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
}

/* Reusable Input */
function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string },
) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        {...rest}
        className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
