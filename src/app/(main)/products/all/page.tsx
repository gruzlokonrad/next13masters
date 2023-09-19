import React from 'react';
import { ProductList } from '@ui/organisms/ProductList';
import { getProducts } from '@/app/db/utils';

export default async function Products() {
  const products = await getProducts();

  return (
    <section className="bg-white">
      <ProductList products={products} />
    </section>
  )
}