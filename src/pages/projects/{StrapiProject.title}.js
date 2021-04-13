import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      <Seo
        title={data.strapiProject.title.toUpperCase()}
        description={data.strapiProject.description}
        image={data.strapiProject.image.publicURL}
      />
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        publicURL
      }
    }
  }
`

export default ProjectTemplate
