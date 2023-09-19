import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between flex-wrap p-6">
      <Link href="/policy" className="button">Policy</Link>
      <Link href="/terms" className="button">Terms</Link>
    </footer>
  )
}
