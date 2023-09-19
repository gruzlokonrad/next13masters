import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Conditions Layout",
  description: "Generated by create next app",
};

const ConditionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='prose flex-grow text-2xl font-semibold'>
      <div>{children}</div>
    </main>
  )
}

export default ConditionsLayout