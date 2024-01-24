import React from 'react'
import { type Route } from 'next'
import { ActiveLink } from '@ui/atoms/ActiveLink'

export const Navbar = () => {
  return (
    <nav className="flex gap-8 p-2 justify-end">
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href={`/products/all/1` as Route}>All</ActiveLink>
    </nav>
  )
}
