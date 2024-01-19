import { getAllCategories } from "@/app/db/utils";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>{children}</div>
  )
}