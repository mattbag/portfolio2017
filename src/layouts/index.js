import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"
import "./master.scss"

import Bio from "../components/bio/Bio"
import Header from "../components/header/header"

const propTypes = {
  children: PropTypes.func.isRequired,
}

class DefaultLayout extends React.Component {
  render() {
    const { location } = this.props
    let headerText
    if (location.pathname === '/' || location.pathname === '/portfolio2017' || location.pathname === '/portfolio2017/') {
      headerText = "I'm Matt, a Progressive Front-end Dev"
    }

    return (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `90%`,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
          paddingTop: rhythm(3 / 4)
        }}
      >
        <Header text={headerText} />

        {this.props.children()}

      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
