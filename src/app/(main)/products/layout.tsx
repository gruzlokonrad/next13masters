import React from 'react'
// import { getAllCategories } from '@/app/db/utils'

type ProductsLayout = {
  children: React.ReactNode
}

// const categories = getAllCategories()

const ProductsLayout = ({ children }: ProductsLayout) => {
  return (
    <div className='border flex'>
      <div className='border'>categories</div>
      <div className='mx-auto'>{children}</div>
    </div>
  )
}

export default ProductsLayout