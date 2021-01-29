import React from 'react'

import Link from 'next/link'

const PortfolioFilters = ({ categories }) => {
  return (
    <div className='flex flex-row space-x-4'>
      {categories.map(({ title, slug }) => (
        <Link key={`portfolio_filter__${slug}`} href={`/#${slug}`}>
          <a className='py-1 px-3 bg-chalk rounded-md'>{title}</a>
        </Link>
      ))}
    </div>
  )
}

export default PortfolioFilters
