import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen h-full bg-white">
      <Link href="/products">
        <button
          type="button"
          title="Shop"
          className="button"
        >
          Shop
        </button>
      </Link>
    </main>
  );
}
