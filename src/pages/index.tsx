import React from 'react'
import { GetStaticProps } from 'next'
import { initializeApollo } from '../apollo/client'
import { HOME_QUERY } from '../apollo/queries'

import Link from 'next/link'

import Container from '../components/container'
import Layout from '../components/layout'
import Image from '../components/image'
import Video from '../components/video'
import PortfolioHighlight from '../components/portfolio/highlight'
import Actions from '../components/actions'

const HomePage = ({ home }) => {
  return (
    <Container bg='bg-background' page={home}>
      <Layout>
        <section className='py-12'>
          <h1 className='text-h1 max-w-headline'>{home.headline}</h1>
        </section>
        <section className='py-24'>
          <Image
            image={home.carousel[0].project.hero}
            alt={home.carousel[0].project.title}
            width={1170}
            height={660}
          />
        </section>
        <section className='py-24'>
          <PortfolioHighlight cards={home.sections} />
          <div className='py-24 text-center'>
            <Link href='/portfolio'>
              <a className='text-h1'>See all projects</a>
            </Link>
          </div>
        </section>
        <section className='py-24'>
          <Video url={home.video.url} />
          <h3 className='text-h1 max-w-headline pt-12'>
            <span>{home.about}</span>
            <Link href={home.about_link}>
              <a className='pl-2'>{home.about_link_text}</a>
            </Link>
          </h3>
        </section>
        <section className='py-24'>
          <Actions />
        </section>
      </Layout>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const {
    loading,
    error = null,
    data: { home = null },
  } = await apolloClient.query({
    query: HOME_QUERY,
  })

  return {
    props: {
      home,
      loading,
      error,
    },
    revalidate: 20,
  }
}

export default HomePage
