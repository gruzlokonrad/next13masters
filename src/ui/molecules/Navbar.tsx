import React from 'react'
import { ActiveLink } from '@ui/atoms/ActiveLink'

export const Navbar = () => {
  return (
    <nav className="flex gap-8 p-2 justify-end">
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/products/all">Shop</ActiveLink>
      <ActiveLink href="/lp/wordpress">Newsletter Wordpress</ActiveLink>
      <ActiveLink href="/lp/seo">Newsletter SEO</ActiveLink>
    </nav>
  )
}
