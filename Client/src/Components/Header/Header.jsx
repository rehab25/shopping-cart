import React from 'react'
import StaticWords from '../../StaticWords'

export default function Header() {
  return (
    <div>
        <header className='text-center py-3 mainColor mailnFontFamily text-white fs-3'>
            {StaticWords.headerTitle}
        </header>
    </div>
  )
}
