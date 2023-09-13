import React from 'react'
import { ProductListItemImage } from '@atoms/ProductListItemImage'
import { ProductListItemDescription } from '@atoms/ProductListItemDescription'
import type { Product, Image } from '@types'

type ProductListItem = {
  product: Product,
  image: Image,
}

export const ProductListItem = ({product, image}: ProductListItem) => {
  return (
    <article>
      <ProductListItemImage {...image} />
      <ProductListItemDescription {...product} />
    </article>
  )
}
