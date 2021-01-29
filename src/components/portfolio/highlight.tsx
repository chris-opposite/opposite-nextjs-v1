import React from 'react'

import Link from 'next/link'

import Image from '../image'

const PortfolioHighlight = ({ cards }) => {
  return (
    <div className='grid grid-cols-2 gap-x-highlight gap-y-32'>
      {cards.map(card => (
        <Link
          key={`highlight_card__${card.id}`}
          href={`/portfolio/${card.project.slug}`}
        >
          <a
            className={`font-sans text-h2 ${
              card.size === 'Large' ? 'col-span-2' : 'col-span-1'
            }`}
          >
            <div className='pb-6'>
              <Image
                image={card.image}
                alt={card.project.title}
                width={card.image.width / 3}
                height={card.image.height / 3}
              />
            </div>
            <span className='block pb-2'>{card.project.title}</span>
            <span className='block text-grey'>{card.project.subtitle}</span>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default PortfolioHighlight
