import React from 'react'
import { type ParsedImageType, ProductListItemImage } from '@/ui/atoms/ProductItemImage'
import { type ParsedProductType, ProductListItemDescription } from '@/ui/atoms/ProductItemDescription'

export const ProductItem = ({ product, image }: {product: ParsedProductType, image: ParsedImageType}) => {
  return (
    <article>
      <ProductListItemImage {...image} />
      <ProductListItemDescription {...product} />
    </article>
  )
}
