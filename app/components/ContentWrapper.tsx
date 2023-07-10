'use client'
import useSushiCart from '@hooks/useSushiCart'
import React from 'react'

export default function ContentWrapper({children}:{children: React.ReactNode}) {
  const {modal} = useSushiCart()
  return (
    <div className={`w-full transition origin-top-left  ${modal? ' scale-66 h-screen':''}`}>{children}</div>
  )
}
