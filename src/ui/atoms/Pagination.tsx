import React from 'react'
import { type Route } from 'next'
import { ActiveLink } from './ActiveLink'

export const Pagination = ({ links }: { links: Route[] }) => {
  return <ul className="flex justify-center">
    {links.map((link, index) =>
      <ActiveLink href={link} key={link}>{index + 1}</ActiveLink>
    )}
  </ul>
}