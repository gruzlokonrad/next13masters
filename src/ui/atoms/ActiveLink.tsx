'use client'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export const ActiveLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname()
  const isActive = href === pathname
  return (
    <Link href={{pathname: href}} className={clsx('button', isActive && 'shadow-md shadow-slate-600')}>
      {children}
    </Link>
  )
}
