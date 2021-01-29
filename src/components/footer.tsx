import React from 'react'

import Link from 'next/link'

import Layout from './layout'

import OppositeLogo from '../../public/svg/opposite.svg'

const Footer = ({ page }) => {
  return (
    <footer className='pt-24'>
      <Layout>
        <h3 className='text-h1 text-center py-12'>
          <span className='block pb-6'>{page.footer}</span>
          <Link href={page.footer_link}>
            <a className='block'>{page.footer_link_text}</a>
          </Link>
        </h3>
        <div className='relative w-full'>
          <OppositeLogo
            className='w-full'
            height='120'
            viewBox='0 0 1280 120'
          />
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
