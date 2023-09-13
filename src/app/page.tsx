import { ProductList } from "@organisms/ProductList";

export default function Home() {

  return (
    <main className="min-h-screen h-full bg-stone-200">
      <section className="bg-stone-200">
        <ProductList />
      </section>
    </main>
  );
}
