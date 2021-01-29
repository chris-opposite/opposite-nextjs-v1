import React from 'react'

import Link from 'next/link'

const Actions = () => {
  return (
    <div className='grid grid-cols-3 gap-x-8'>
      <Link href='/careers'>
        <a className='bg-white text-h1 p-8'>
          <span className='block'>Join the Team</span>
        </a>
      </Link>
      <Link href='/#instagram'>
        <a className='bg-white text-h2 p-8'>
          <div className='block place-self-end'>
            Join us on Instagram @opposite.hq
          </div>
        </a>
      </Link>
      <Link href='/#signup'>
        <a className='bg-white text-h1 p-8'>
          <span className='block'>Quarterly updates from us via email</span>
          <span className='block pt-16'>Sign Up</span>
        </a>
      </Link>
    </div>
  )
}

export default Actions
