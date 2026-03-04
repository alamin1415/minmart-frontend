// app/lib/fetchAllProducts.ts

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

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.API_URL}/products`, {
    next: { revalidate: 60 }, // ISR caching
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();
  return data;
}
