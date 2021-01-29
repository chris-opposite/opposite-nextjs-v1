import { gql } from '@apollo/client'

export const HOME_QUERY = gql`
  query {
    home {
      headline
      carousel {
        id
        title
        project {
          slug
          title
          subtitle
          hero {
            url
          }
        }
      }
      sections {
        ... on ComponentHomeCards {
          id
          size
          project {
            slug
            title
            subtitle
          }
          image {
            url
            width
            height
          }
        }
      }
      video {
        url
      }
      about
      about_link
      about_link_text
      footer
      footer_link
      footer_link_text
      metadata {
        meta_title
        meta_desc
        meta_image {
          url
        }
      }
    }
  }
`

export const PORTFOLIO_QUERY = gql`
  query {
    portfolio: portfolioPage {
      headline
      order {
        id
        project {
          slug
          title
          subtitle
          thumbnail {
            url
          }
        }
      }
      footer
      footer_link
      footer_link_text
      metadata {
        meta_title
        meta_desc
        meta_image {
          url
        }
      }
    }
    categories: categories {
      title
      slug
    }
  }
`

export const ALL_PROJECTS_QUERY = gql`
  query {
    projects {
      slug
    }
  }
`
export const PROJECT_QUERY = gql`
  query($slug: String!) {
    projects: projects(where: { slug: $slug }) {
      title
      subtitle
      hero {
        url
      }
      content
      sections {
        ... on ComponentSectionMedia {
          __typename
          size
          media {
            name
            url
            width
            height
          }
        }
        ... on ComponentSectionSideBySide {
          __typename
          id
          left {
            name
            url
            width
            height
          }
          right {
            name
            url
            width
            height
          }
        }
        ... on ComponentSectionEmbed {
          __typename
          id
          link
          settings {
            loop
            autoplay
            padding
          }
        }
        ... on ComponentSectionText {
          __typename
          id
          content
        }
        ... on ComponentSectionSpacer {
          __typename
          id
          space
        }
      }
      settings {
        ... on ComponentSettingsPageColor {
          color
          theme
        }
        ... on ComponentSettingsWebsiteCta {
          text
          link
          nofollow
        }
      }
      metadata {
        meta_title
        meta_desc
        meta_image {
          url
        }
      }
    }
    portfolio: portfolioPage {
      footer
      footer_link
      footer_link_text
    }
  }
`
