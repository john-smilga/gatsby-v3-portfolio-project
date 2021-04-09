import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
const ProjectTemplate = ({ pageContext, data }) => {
  return (
    <>
      <Seo
        title={data.strapiProjects.title.toUpperCase()}
        image={data.strapiProjects.image.publicURL}
      />
      <main className="project-template-page">
        <h2>{pageContext.title}</h2>
        <p>{data.strapiProjects.description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProjects(title: { eq: $title }) {
      description
      title
      image {
        publicURL
      }
    }
  }
`

export default ProjectTemplate
