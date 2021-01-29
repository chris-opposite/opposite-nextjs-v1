import React from 'react'

import Header from './header'
import Footer from './footer'

const Container = ({ bg, page, children }) => {
  return (
    <div className={`w-full text-black ${bg}`}>
      <Header />
      <main>{children}</main>
      <Footer page={page} />
    </div>
  )
}

export default Container
