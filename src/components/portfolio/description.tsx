import React from 'react'
import parse from 'html-react-parser'

const PortfolioDescription = ({ content }) => {
  return (
    <div className='container mx-auto'>
      <span className='block pb-herop' />
      <div className='flex justify-center pt-24 pb-12'>
        <span className='block font-serif max-w-prose text-p'>
          {parse(content)}
        </span>
      </div>
    </div>
  )
}

export default PortfolioDescription
