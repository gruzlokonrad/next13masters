import React from 'react'
import { ProductListItemImage } from '@atoms/ProductListItemImage'
import { ProductListItemDescription } from '@atoms/ProductListItemDescription'
import type { ProductListItemProductType, ProductListItemImageType } from '@types'

export const ProductListItem = ({ product, image }:{ product: ProductListItemProductType, image: ProductListItemImageType }) => {
  return (
    <article>
      <ProductListItemImage {...image} />
      <ProductListItemDescription {...product} />
    </article>
  )
}
