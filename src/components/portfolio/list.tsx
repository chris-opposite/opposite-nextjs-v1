import React from 'react'

import PortfolioCard from './card'

const PortfolioList = ({ portfolio }) => {
  return (
    <div className='grid grid-cols-3 gap-grid'>
      {portfolio.map(({ project }) => (
        <PortfolioCard
          key={`portfolio_list__${project.slug}`}
          project={project}
        />
      ))}
    </div>
  )
}

export default PortfolioList
