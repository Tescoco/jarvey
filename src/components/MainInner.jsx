import React from 'react'

export default function MainInner({ className = "", children }) {
  return (
    <div className={`p-4 md:p-5 lg:p-6 ${className}`}>{children}</div>
  )
}
