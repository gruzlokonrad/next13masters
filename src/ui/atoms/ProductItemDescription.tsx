import React from 'react'
import Link from 'next/link'
import { formatMoney } from '@/utils/formatMoney'
import type { ParsedProductType } from '@types'

export const ProductListItemDescription = ({ productId, name, category, price }: ParsedProductType) => {
	return (
		<div className="mt-2 mx-1">
			<div className='flex justify-between'>
				<Link href={`/product/${productId}`}>
					<h3 className="text-sm font-bold text-gray-900">{name}</h3>
				</Link>
				<Link href={`/product/${productId}`}>
					<p className="text-sm font-bold text-gray-500">
						<span className="sr-only">Cena:</span> {formatMoney(price / 100)}
					</p>
				</Link>
			</div>
			<p className="text-sm text-gray-500">
				{/**** Add handle category params ****/}
				<Link href={`/products/${category}/1`}>
					<span className="sr-only">Kategoria:</span> {category}
				</Link>
			</p>
		</div>
	)
}
