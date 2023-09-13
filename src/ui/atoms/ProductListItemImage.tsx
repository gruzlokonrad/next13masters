import React from 'react'
import Image from 'next/image';
import { type Image as ImageType } from '@types'


export const ProductListItemImage = ({ src, alt }: ImageType) => {
  return (
    <div className="
      aspect-square overflow-hidden rounded-md 
      border border-slate-200 
      bg-slate-50 hover:bg-white
      hover:shadow-[0px_0px_85px] hover:shadow-white
    ">
      <Image
        src={src}
        alt={alt}
        width={320}
        height={320}
        className='h-full w-full object-cover object-center p-4 transition-transform hover:scale-105'
      />
    </div>
  )
}
