import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { initializeApollo } from '../../apollo/client'
import { PROJECT_QUERY, ALL_PROJECTS_QUERY } from '../../apollo/queries'

import Container from '../../components/container'
import Layout from '../../components/layout'
import Image from '../../components/image'
import PortfolioDescription from '../../components/portfolio/description'

const ProjectPage = ({ projects, portfolio }) => {
  const project = projects[0]

  return (
    <Container bg='bg-background' page={portfolio}>
      <Layout>
        <section className='py-6 text-center'>
          <h1 className='text-h1 pb-2'>{project.title}</h1>
          <h2 className='text-h2 text-slate'>{project.subtitle}</h2>
        </section>
        <section className='flex mt-16 mb-herom'>
          <Image
            image={project.hero}
            alt={project.title}
            width={1170}
            height={660}
          />
        </section>
      </Layout>
      <section className='w-full bg-red'>
        <PortfolioDescription content={project.content} />
      </section>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const response = await apolloClient.query({
    query: ALL_PROJECTS_QUERY,
  })

  const paths = response.data.projects.map(({ slug }) => ({
    params: { slug: slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async context => {
  const apolloClient = initializeApollo()
  const { slug: slug } = context.params

  const {
    loading,
    error = null,
    data: { projects = null, portfolio = null },
  } = await apolloClient.query({
    query: PROJECT_QUERY,
    variables: { slug: slug },
  })

  return {
    props: {
      projects,
      portfolio,
      loading,
      error,
    },
    revalidate: 20,
  }
}

export default ProjectPage
