import { getProductsByCategoryName } from "@/app/db/utils";
import { Pagination } from "@/ui/atoms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import type { CategoryType } from "@/ui/types";


export async function generateStaticParams({ params }: { params: CategoryType }) {
  switch (params.name) {
    case 'Accessories':
      return [{ pageNumber: '1' }, { pageNumber: '2' }]
    case 'Hoodies':
      return [{ pageNumber: '1' }, { pageNumber: '2' }, { pageNumber: '3' }]
    case 'T-Shirts':
      return [{ pageNumber: '1' }]
    default:
      return [{ pageNumber: '1' }, { pageNumber: '2' }, { pageNumber: '3' }, { pageNumber: '4' }]
  }
}

export default async function Page({ params }: { params: { categoryName: string, pageNumber: string } }) {
  const products = await getProductsByCategoryName(params.categoryName);
  return (
    <div className="mx-auto my-10">
      <h2 className="container mx-auto">{params.categoryName}</h2>
      <ProductList products={products} />
      <Pagination pagePagination={params.pageNumber} categoryName={params.categoryName} />
    </div>
  )
}