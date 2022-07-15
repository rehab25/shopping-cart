import React from 'react'
import StaticWords from '../../StaticWords'

export default function Footer() {
  return (
    // position-fixed bottom-0 w-100 
    <div className='text-center py-3 mainColor mailnFontFamily text-white fs-3'>
        {StaticWords.footerTitle}
    </div>
  )
}
