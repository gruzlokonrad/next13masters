import { notFound } from "next/navigation";
import React, { type ComponentType } from "react";


const page = async ({ params }: { params: { filename: string } }) => {
  const Content = await import(`./${params.filename}.mdx`).then(
    (m: { default: ComponentType }) => m.default,
    () => notFound(),
  );
  return (
    <article className="prose">
      <Content />
    </article>
  )
}

export default page