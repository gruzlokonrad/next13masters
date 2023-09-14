import React from 'react'
import { type ProductListItemProductType } from '@types'
import { formatMoney } from '@utils'


export const ProductListItemDescription = ({ name, category, price }: ProductListItemProductType) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
			<h3 className="text-sm font-bold text-gray-900">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<div>
				<p className="text-sm font-bold text-gray-500">
					<span className="sr-only">Cena:</span> {formatMoney(price / 100)}
				</p>
			</div>
		</div>
	)
}
