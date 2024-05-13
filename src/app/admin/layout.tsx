import React from 'react'

export default function AdmiLayout({children}: {
    children: React.ReactNode
  }) {
  return (
    <div>
      <h1>Hey I am The NavBar</h1>
      {children}
      <h1>Hey I  am the FOoter</h1>
    </div>
  )
}
