import React from 'react'
import { ProductItem } from '@/ui/molecules/ProductItem';
import { type ProductItemType } from '@/ui/organisms/SuggestedProductsList';

export const ProductList = async ({products}: {products: ProductItemType[]}) => {
  return (
    <div className='mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl'>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-testid="products-list">
        {products.map(({ id, image, product }): JSX.Element => (
          <li key={id}>
            <ProductItem image={ image } product={ product } />
          </li>
        ))}
      </ul>
    </div>
  )
}
