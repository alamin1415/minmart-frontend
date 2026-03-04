// Define types
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
}

// Fetch product by ID with proper typing
export async function fetchProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${process.env.API_URL}/products/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) return null;

  return res.json();
}
