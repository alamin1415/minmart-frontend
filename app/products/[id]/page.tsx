import { fetchProductById, Product } from '@/app/lib/product-api';
import { notFound } from 'next/navigation';

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>; // params is a Promise
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  // Await the params before using
  const { id } = await params;

  // Fetch the product by ID
  const product: Product | null = await fetchProductById(id);

  if (!product) {
    notFound();
  }

  const imageBase64 =
    product.images.length > 0
      ? `data:image/png;base64,${Buffer.from(product.images[0].image_data.data).toString('base64')}`
      : '/placeholder.png';

  return (
    <div className="p-10">
      <img
        src={imageBase64}
        alt={product.name}
        className="w-96 h-96 object-cover mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <p className="mb-4 text-gray-600">{product.description}</p>

      <div className="text-xl">
        <span className="line-through text-gray-400 mr-4">
          ৳{product.price}
        </span>
        <span className="text-green-600 font-bold">
          ৳{product.discount_price}
        </span>
      </div>

      <p className="mt-2 text-gray-500">SKU: {product.sku}</p>
    </div>
  );
}
