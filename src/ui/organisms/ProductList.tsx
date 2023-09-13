import React from 'react'
import { ProductListItem } from '@molecules/ProductListItem';
import { type Products } from '@types';


export const ProductList = () => {
  const products: Products[] = [
    {
      id: '1',
      image: { src: '/bluzka.webp', alt: 'bluzka' },
      product: { category: "Ubrania", name: "Bluzka", price: 2137 }
    },
    {
      id: '2',
      image: { src: '/bluza.webp', alt: 'bluza' },
      product: { category: "Ubrania", name: "Bluza", price: 2137 }
    },
    {
      id: '3',
      image: { src: '/czapka.webp', alt: 'czapka' },
      product: { category: "Akcesoria", name: "Czapka", price: 2137 }
    },
    {
      id: '4',
      image: { src: '/kubek.webp', alt: 'kubek' },
      product: { category: "Akcesoria", name: "Kubek", price: 2137 }
    },
  ];
  return (
    <div className='mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl'>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-testid="products-list">
        {products?.map(({ id, image, product }): JSX.Element => (
          <li key={id}>
            <ProductListItem image={image} product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
