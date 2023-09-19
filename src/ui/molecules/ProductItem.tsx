import React from 'react'
import { ProductListItemImage } from '@/ui/atoms/ProductItemImage'
import { ProductListItemDescription } from '@/ui/atoms/ProductItemDescription'
import type { ParsedImageType, ParsedProductType } from '@types'

export const ProductItem = ({ product, image }: {product: ParsedProductType, image: ParsedImageType}) => {
  return (
    <article>
      <ProductListItemImage {...image} />
      <ProductListItemDescription {...product} />
    </article>
  )
}
