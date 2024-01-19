import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export type ParsedImageType = {
  productId: string;
  src: string;
  alt: string;
}

export const ProductListItemImage = ({ productId, src, alt }: ParsedImageType) => {
  return (
    <Link href={`/product/${productId}`}>
      <div className='hover:brand-gradient group p-[3px] rounded-md '>
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
    </Link>
  )
}
