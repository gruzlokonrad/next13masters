import React from 'react';
import { type Route } from 'next';
import { ProductList } from '@ui/organisms/ProductList';
import { getProducts } from '@/app/db/utils';
import { Pagination } from '@/ui/atoms/Pagination';

export async function generateStaticParams() {
  return [
    { page: '/products/all/1'},
    { page: '/products/all/2'},
  ]
}

export default async function Products({ params }: { params: { page: string } }) {
  const products = await getProducts();
  const paginationsLinks: Route[] = []

  const to = Number(params.page) * 4
  const from = to - 4

  for (let i = 0; i < products.length / 4; i++) {
    paginationsLinks.push(`/products/all/${(i + 1)}` as Route)
  }

  return (
    <section className="bg-white">
      <ProductList products={products.slice(from, to)} />
      <Pagination links={paginationsLinks} />
    </section>
  )
}