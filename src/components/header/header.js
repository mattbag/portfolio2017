import React, { Component } from 'react'
// import Link from "gatsby-link";
import Bio from "./../bio/Bio";

// class Header extends Component {

//   render() {

//     return (
//       <header style={{
//         position: 'fixed',
//         left: '.25rem',
//         top: '.5rem',
//         zIndex: 1,
//         display: `flex`
//       }}>
       
//           <Bio />

//         <h1 style={{color: `#333`, textShadow: `2px 2px #fff`}}>
//           {this.props.text}
//         </h1>
//       </header>
//     )
//   }
// }
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
      
              <h1 style={{color: `#333`, textShadow: `2px 2px #fff`}}>
                {props.text}
              </h1>
            </header>
  )
}
export default Header
