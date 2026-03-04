'use client';
import React from 'react';
import Link from 'next/link';

interface ProductImage {
  id: number;
  image_data: {
    type: string;
    data: number[];
  };
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discount_price: string;
  sku: string;
  images: ProductImage[];
}

const ProductCard = ({ product }: { product: Product }) => {
  const imageBase64 =
    product.images.length > 0
      ? `data:image/png;base64,${Buffer.from(
          product.images[0].image_data.data,
        ).toString('base64')}`
      : '/placeholder.png';

  return (
    <Link href={`/products/${product.id}`}>
      <div className="border p-4 rounded shadow-md w-64 cursor-pointer hover:shadow-lg transition">
        <img
          src={imageBase64}
          alt={product.name}
          className="w-full h-48 object-cover mb-2"
        />
        <h2 className="font-bold text-lg">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <div className="mt-2">
          <span className="line-through text-gray-400 mr-2">
            ৳{product.price}
          </span>
          <span className="text-green-600 font-semibold">
            ৳{product.discount_price}
          </span>
        </div>
        <p className="text-gray-500 text-xs mt-1">SKU: {product.sku}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
