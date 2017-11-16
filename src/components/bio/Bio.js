import React, { Component } from 'react'
import Link from "gatsby-link"
import Social from './../social/social'
import profilePic from './face.png'

class Bio extends Component {
  render() {
    let bio
    let social
    let text
    let align

    if (this.props.bio) {
      bio = (
        <span>
          Just a cool thing by Matt Bagni
          <a href="https://twitter.com/mattbag00">
                If you fancy Twitter
          </a>
        </span>
      )
    }

    if (this.props.social) {
      social = <Social />
      align = { textAlign: 'center' }
    }
    return (
      <div className="bio" style={align}>
       <Link to={'/'}
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}>
        <img
          src={profilePic}
          alt={`Matt Bagni logo`}
          width="50px"
          style={{ marginBottom: 0 }}
        />
        </Link>

        {bio}
        {social}

      </div>
    )
  }
}

export default Bio
