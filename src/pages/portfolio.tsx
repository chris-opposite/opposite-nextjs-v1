import React from 'react'
import { GetStaticProps } from 'next'
import { initializeApollo } from '../apollo/client'
import { PORTFOLIO_QUERY } from '../apollo/queries'

import Container from '../components/container'
import Layout from '../components/layout'
import PortfolioList from '../components/portfolio/list'
import PortfolioFilters from '../components/portfolio/filters'

const PortfolioPage = ({ portfolio, categories }) => {
  return (
    <Container bg='bg-white' page={portfolio}>
      <Layout>
        <section className='py-12'>
          <h1 className='text-h1 max-w-headline'>{portfolio.headline}</h1>
        </section>
        <section className='pb-12'>
          <PortfolioFilters categories={categories} />
        </section>
        <section className='py-24'>
          <PortfolioList portfolio={portfolio.order} />
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
    data: { portfolio = null, categories = null },
  } = await apolloClient.query({
    query: PORTFOLIO_QUERY,
  })

  return {
    props: {
      portfolio,
      categories,
      loading,
      error,
    },
    revalidate: 20,
  }
}

export default PortfolioPage
