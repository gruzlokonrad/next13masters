import React from 'react'
import Image from 'next/image';
import { type ProductListItemImageType } from '@types'


export const ProductListItemImage = ({ src, alt }: ProductListItemImageType) => {
  return (
    <div className='hover:bg-gradient-to-tr from-green-600 via-black hover:to-blue-500 group p-[3px] rounded-md '>
      <div className="
      aspect-square overflow-hidden rounded-md 
      border border-slate-200 
      transition-all ease-in-out
      cursor-pointer
      bg-slate-100 group-hover:bg-white
      group-hover:border-gray-200 group-hover:border-none
      group-hover:shadow-[0px_0px_15px] group-hover:shadow-gray-400
      ">
        <Image
          src={src}
          alt={alt}
          width={320}
          height={320}
          priority
          className='h-full w-full object-cover object-center p-4 transition-transform group-hover:scale-105'
        />
      </div>
    </div>
  )
}
