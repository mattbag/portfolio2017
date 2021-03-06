import React from "react"

import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import { rhythm } from "../utils/typography"

import Bio from './../components/bio/Bio'
const propTypes = {
  data: PropTypes.object.isRequired,
}

class ProjectTemplate extends React.Component {

  render() {
    const project = this.props.data.contentfulProject
    const {
      projectName,
      projectCopy,
      heroImage,
      category
    } = project

    let _renderCats;
    const shadow = `rgba(2, 25, 39, 0.7) 4px 4px 20px 1px`;


    return (
      <div style={{
        backgroundColor: '#222',
        boxShadow: shadow,
        paddingTop: rhythm(1.5),
        // marginBottom: rhythm(1.5)
      }}>

        <Helmet title={`${projectName} 👨🏼‍💻 Matt Bagni`} />
        <div style={{ transform: `scale(1.05)`, boxShadow: shadow }} >
          <Img sizes={heroImage.sizes} />
        </div>
        <div style={{ padding: rhythm(1), marginTop: `-2rem`, }}>

          <h1 style={{
            position: `relative`,
            fontSize: '7vw',
            color: '#fff',
            textShadow: `rgb(46, 142, 222) 4px 4px`
          }}>{projectName}</h1>

          {category &&
            <ul style={{
              display: `flex`,
              listStyleType: `none`,
              margin: 0
            }}>
              {category.map(_ => <li key={_.title.title}><img width="30" src={_.icon.file.url} alt={_.title.title} /></li>)}
            </ul>
            || <br />}

          {projectCopy &&
            <div dangerouslySetInnerHTML={{
              __html: projectCopy.childMarkdownRemark.html,
            }}
            />
          }
        </div>
        <hr style={{ width: `30%`, margin: `1rem auto`, background: `#fff` }} />
        <Bio bio={false} social={true} />
      </div>
    )
  }
}

ProjectTemplate.propTypes = propTypes

export default ProjectTemplate

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    contentfulProject(id: { eq: $id }) {
      projectName
      projectLink
      projectCopy {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        sizes {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
      category {
        icon {
          file{
            url
          }
        }
        title {
          title
        }
      }
    }
  }
`
