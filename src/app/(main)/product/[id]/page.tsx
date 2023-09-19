import { getProductById, getProducts } from "@/app/db/utils";
import { ProductItem } from "@/ui/molecules/ProductItem";

export async function generateStaticParams() {
  const products  = await getProducts();
  return products.slice(0, 3);
}

export default async function Page({ params }: { params: { id: string } }) {
  const {product, image} = (await getProductById(params.id))[0];

  return (
    <div className="max-w-md mx-auto my-10">
      <h2>{product.name}</h2>
      <ProductItem
        product={product}
        image={image}
      />
    </div>
  )
}