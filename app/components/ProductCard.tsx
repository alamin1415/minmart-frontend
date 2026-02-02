'use client';
import React from 'react';

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
  // Convert Buffer data to base64
  const imageBase64 =
    product.images.length > 0
      ? `data:image/png;base64,${Buffer.from(
          product.images[0].image_data.data,
        ).toString('base64')}`
      : '/placeholder.png'; // fallback image

  return (
    <div className="border p-4 rounded shadow-md w-64">
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
  );
};

export default ProductCard;
