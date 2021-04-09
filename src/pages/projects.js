import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects projects={projects} title="all projects" />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        description
        featured
        github
        id
        slug
        stack {
          id
          title
        }
        title
        url
      }
    }
  }
`

export default ProjectsPage
