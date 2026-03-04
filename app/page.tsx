import ProductCard from './components/ProductCard';
import { fetchAllProducts } from './lib/fetchAllProducts';

export default async function HomePage() {
  const products = await fetchAllProducts();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
