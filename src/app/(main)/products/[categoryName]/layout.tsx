import { getAllCategories } from "@/app/db/utils";
import type { CategoryType } from "@types";

export async function generateStaticParams() {
  const categories: CategoryType[] = await getAllCategories();
  return categories
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>{children}</div>
  )
}