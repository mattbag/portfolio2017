import React from "react"
import Link from "gatsby-link"
// import Img from "gatsby-image"
import logo from './../components/bio/face.png'
import Bio from "./../components/bio/Bio";

class Page404 extends React.Component {
    render() {
        return (
            <div style={{ padding: `1rem`,textAlign: `center` }}>
                
                <Link to="/" style={{textDecoration:`none`}}>
                <img src={logo} alt="matt bagni logo" style={{maxWidth: `40vw`}}/>
                </Link>
                <h1 style={{
                    color: `#fff`,
                    textShadow: `rgb(46, 142, 222) 2px 2px`,
                    fontSize: `30vw`,
                    fontDisplay: `swap`,
                    textAlign: `center`,
                }}>
                    404
              </h1>
              <br /> <br /> <br /> <br />
                <Bio bio={false} social={true} />
            </div>
        )
    }
}


export default Page404