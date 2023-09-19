/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { ProductItem } from '@/ui/molecules/ProductItem';
import type { ProductItemType } from '@types';




export const SuggestedProductsList = async ({ products }: {products: ProductItemType[]}) => {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(5000);
  return (
    <div className='mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl'>
      <h2>Suggested</h2>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-testid="products-list">
        {products.slice(-3)?.map(({ id, image, product }) => (
          <li key={id}>
            <ProductItem image={image} product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
