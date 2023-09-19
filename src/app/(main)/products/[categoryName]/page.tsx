import { getProductsByCategoryName } from "@/app/db/utils";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Page({ params }: { params: { categoryName: string } }) {
  const products = await getProductsByCategoryName(params.categoryName);
  return (
    <div className="mx-auto my-10">
      <h2 className="container mx-auto">{params.categoryName}</h2>
      <ProductList products={products} />
    </div>
  )
}