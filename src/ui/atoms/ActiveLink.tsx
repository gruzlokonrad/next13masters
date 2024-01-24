'use client'
import { type Route } from 'next'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

type ActiveLink = {
  href: Route,
  className?: string,
  activeClassName?: string,
  children: React.ReactNode
}

export const ActiveLink = ({ href, children, className, activeClassName }: ActiveLink) => {
  const pathname = usePathname()
  const isActive = href === pathname
  return (
    <Link href={{ pathname: href }}
      className={clsx(`
        button 
        ${className} 
        ${isActive && 'shadow-md shadow-slate-600'} 
        ${isActive && activeClassName}
      `)}>
      {children}
    </Link>
  )
}
