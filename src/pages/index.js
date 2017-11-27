import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import Helmet from "react-helmet";
import './grid.scss'
import Tile from "./../components/tile/Tile";
// import TileEmpty from "./../components/tile/TileEmpty";
import Builtwith from "./../components/builtwith/Builtwith";
import logo from './../components/bio/face.png'

const startY = 20;

const propTypes = {
  data: PropTypes.object.isRequired,
}


class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      transformY: `-${startY}%`,
      gridHeight: '',
      isMob: false,
      gridIn: false
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.getHeight = this.getHeight.bind(this);
  }
  getHeight() {
    const _h = document.getElementsByClassName('grid')[0].offsetHeight;
    this.setState({ gridHeight: _h })
    // console.log(this.state.gridHeight)
  }

  componentDidMount() {
    let _isMobOnMount = window.innerWidth >= 1200

    if (_isMobOnMount) {
      // this.setState({ isMob: _isMobOnMount })
      document.addEventListener('scroll', this.handleScroll);
      this.loadInterval = setTimeout(() => { this.getHeight() }, 200);

      window.addEventListener('resize', () => {
        this.getHeight()
      });
    }
    this.setState({ isMob: !_isMobOnMount })
    setTimeout(() => { this.setState({ gridIn: true }) }, 500);
    // console.log(this.state)
  }

  componentWillUnmount() {
    if (!this.state.isMob) {
      document.removeEventListener('scroll', this.handleScroll);
      clearTimeout(this.loadInterval);
    }
  }

  handleScroll() {

    let itemTranslate = window.pageYOffset / 30;

    document.querySelector('.grid').style.transform = `translateY(${-itemTranslate}%)`
    // console.log(document.querySelector('.grid'))
  }
  createScroller() {
    return (<div ref={el => { this.gridScroller = el }} className="grid__scroll" style={{ height: this.state.gridHeight }}></div>)
  }
  renderDummy(len) {
    // console.log(this.state.isMob)
    if (this.state.isMob) { return }
    let dums = []
    for (var index = 0; index < len; index++) {
      dums.push(<Tile key={index} />)
    }
    return dums
  }

  render() {
    // console.log('------------------------------------');
    // console.log(this.props.data);
    // console.log('------------------------------------');
    const projects = this.props.data.allContentfulProject.edges
    let dummy = 9

    return (
      <div>

        {!this.state.isMob ? this.createScroller() : ''}

        <div className={`grid__wrap ${this.state.gridIn ? 'grid__wrap--in' : ''} ${!this.state.isMob ? '' : ''}`}>
          <Helmet title={`${this.props.data.site.siteMetadata.title} 🤓 a Progressive Front-end Dev`}>
            <link rel="icon"
              type="image/png"
              href={logo} />
          </Helmet>
          <div className="grid">
            {projects.map(project =>
              <Tile project={project} key={project.node.id} />
            )}
            {this.renderDummy(dummy)}
          </div>
        </div>
        <Builtwith />
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata{
        title
        description
      }
    }
    allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          projectName
          projectLink
          heroImage {
            resize(width: 400, height: 300, quality: 100) {
              src
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
    }
  }
`
