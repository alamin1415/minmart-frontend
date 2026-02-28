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
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.API_URL}/products`, {
    next: { revalidate: 60 }, // ISR caching
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}
