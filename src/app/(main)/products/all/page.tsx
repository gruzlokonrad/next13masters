import React, { Suspense } from 'react';
import { ProductList } from '@ui/organisms/ProductList';
import { SuggestedProductsList } from '@/ui/organisms/SuggestedProductsList';
import { getProducts } from '@/app/db/utils';

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <section className="bg-white">
        {/* {category && <h2 className="text-2xl font-bold text-center mt-6">Category: {category}</h2>} */}
        <ProductList products={products}/>
        <Suspense fallback={<div>Loading...</div>}>
          <SuggestedProductsList products={products}/>
        </Suspense>
      </section>
    </>
  )
}