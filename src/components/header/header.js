import React, { Component } from 'react'
// import Link from "gatsby-link";
import Bio from "./../bio/Bio";

const Header = (props) =>{
  return(
    <header style={{
              position: 'fixed',
              left: '.25rem',
              top: '.5rem',
              zIndex: 1,
              display: `flex`
            }}>
             
                <Bio />
      
              <h1 style={{
                color: `#fff`, 
                textShadow: `rgb(46, 142, 222) 2px 2px`, 
                fontSize: `4vw`,
                fontDisplay: `swap`
                }}>
                {props.text}
              </h1>
            </header>
  )
}
export default Header
