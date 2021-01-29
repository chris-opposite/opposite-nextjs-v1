import React from 'react'

import Link from 'next/link'

import Image from '../image'

const PortfolioCard = ({ project }) => {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <a className='flex flex-col font-sans text-h3'>
        <div className='pb-6'>
          <Image
            image={project.thumbnail}
            alt={project.title}
            width={320}
            height={240}
          />
        </div>
        <span className='block pb-2'>{project.title}</span>
        <span className='block text-grey'>{project.subtitle}</span>
      </a>
    </Link>
  )
}

export default PortfolioCard
