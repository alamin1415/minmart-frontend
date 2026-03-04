// app/lib/api.ts

export interface ProductImage {
  id: number;
  image_data: {
    type: string;
    data: number[];
  };
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discount_price: string;
  sku: string;
  images: ProductImage[];
  // যদি inventory বা category_id দরকার হয়, uncomment করতে পারো
  // inventory?: any[];
  // category_id?: number;
}

// 🔹 Fetch all products
export async function fetchProducts(): Promise<Product[]> {
  console.log('🔹 Fetching all products...');

  const res = await fetch(`${process.env.API_URL}/products`, {
    next: { revalidate: 60 }, // ISR caching
  });

  console.log('🔹 Response status (all products):', res.status);

  if (!res.ok) {
    console.error('❌ Failed to fetch all products:', res.statusText);
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();
  console.log('✅ Fetched all products data:', data);

  return data;
}

// 🔹 Fetch single product by ID
export async function fetchProductById(id: string): Promise<Product | null> {
  console.log('🔹 Fetching product with ID:', id);

  const res = await fetch(`${process.env.API_URL}/products/${id}`, {
    cache: 'no-store',
  });

  console.log('🔹 Response status (single product):', res.status);

  if (!res.ok) {
    console.error('❌ Failed to fetch product:', res.statusText);
    return null;
  }

  const data = await res.json();
  console.log('✅ Fetched product data:', data);

  return data;
}
