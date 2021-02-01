import React from 'react'
import NextImage from 'next/image'

const Image = ({ image, alt, width, height }) => {
  return (
    <div className='flex'>
      <NextImage
        src={`https://opposite.imgix.net/${image.hash}${image.ext}`}
        alt={alt}
        objectFit='cover'
        objectPosition='center center'
        width={width}
        height={height}
      />
    </div>
  )
}

export default Image
