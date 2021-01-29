import React from 'react'

import Link from 'next/link'

import Layout from './layout'

import OppositeLogo from '../../public/svg/opposite.svg'

const Header = () => {
  return (
    <header className='pb-10'>
      <Layout>
        <div className='relative w-full'>
          <OppositeLogo className='absolute w-full transform-gpu -translate-y-1/2' />
        </div>
        <nav className='flex justify-between py-10 text-h2'>
          <Link href='/'>
            <a className='z-10'>Home</a>
          </Link>
          <Link href='/portfolio'>
            <a className='z-10'>Our Work</a>
          </Link>
          <Link href='/about'>
            <a className='z-10'>About</a>
          </Link>
          <Link href='/careers'>
            <a className='z-10'>Careers</a>
          </Link>
          <Link href='/blog'>
            <a className='z-10'>Blog</a>
          </Link>
          <Link href='/contact'>
            <a className='z-10'>Contact</a>
          </Link>
        </nav>
      </Layout>
    </header>
  )
}

export default Header
