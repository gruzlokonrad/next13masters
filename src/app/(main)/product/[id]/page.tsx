import { Suspense } from "react";
import type { Metadata } from "next";
import { getProductById, getProducts } from "@/app/db/utils";
import { ProductItem } from "@/ui/molecules/ProductItem";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.slice(0, 4);
}

export const generateMetadata = async ({params}: {params: {id: string}}): Promise<Metadata> => {
  const product = (await getProductById(params.id))[0];
  return {
    title: `${product.product.name} - Sklep internetowy`,
    // description: product.product.description,
    openGraph: {
      title: `${product.product.name} - Sklep internetowy`,
      // description: product.product.description,
      images: [product.image.src],
    }
  }
};

export default async function Page({ params }: { params: { id: string } }) {
  const { product, image } = (await getProductById(params.id))[0];
  const products = (await getProducts()).slice(-3);

  return (
    <>
      <div className="max-w-md mx-auto my-10">
        <h2>{product.name}</h2>
        <ProductItem
          product={product}
          image={image}
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SuggestedProductsList products={products} />
      </Suspense>
    </>
  )
}