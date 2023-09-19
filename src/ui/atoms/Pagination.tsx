import Link from 'next/link'
import React from 'react'

export const Pagination = ({ pagePagination, categoryName }: { pagePagination: string, categoryName: string }): React.JSX.Element => {
  return (
    <ul className="flex justify-center">
      <Link href={`/products/${categoryName}/${pagePagination}`} key={pagePagination}>
        <li className="mx-2 px-4 py-2 border">{pagePagination}</li>
      </Link>
    </ul>
  )
}
