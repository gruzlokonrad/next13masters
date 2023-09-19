import { notFound } from 'next/navigation'
import React, { type ComponentType } from 'react'

export const generateStaticParams = () => {
  return [{ filename: 'terms' }, { filename: 'policy' }]
}

const Page = async ({ params }: { params: { filename: string } }) => {
  const Page = await import(`./${params.filename}.mdx`)
    .then(
      (module: { default: ComponentType }) => module.default,
      () => notFound()
    )

  return (
    <Page />
  )
}

export default Page