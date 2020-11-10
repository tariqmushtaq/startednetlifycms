import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Logo = () => {
    const data2 = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (<Img fluid={data2.placeholderImage.childImageSharp.fluid} />)
}

export default Logo