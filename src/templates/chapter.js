import React from "react"
import { graphql } from "gatsby"

export default function Template ({
    data
}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="chapter-container">
            <div className="chapter-header">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.description}</h2>
            </div>
            <div className="chapter-content" dangerouslySetInnerHTML={{__html: html}}>

            </div>
        </div>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`