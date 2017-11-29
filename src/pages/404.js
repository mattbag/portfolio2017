import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet";
import logo from './../components/bio/face.png'
import Bio from "./../components/bio/Bio";

class Page404 extends React.Component {
    render() {
        return (
            <div style={{ padding: `1rem`, textAlign: `center` }}>
                <Helmet title={ `4😱4 - Matt Bagni` } />

                <Link to="/" style={{ textDecoration: `none` }}>
                    <img src={logo} alt="matt bagni logo" style={{ maxWidth: `40vw` }} />
                    <h1 style={{
                        color: `#fff`,
                        textShadow: `rgb(46, 142, 222) 2px 2px`,
                        fontSize: `30vw`,
                        fontDisplay: `swap`,
                        textAlign: `center`,
                    }}>
                        404
              </h1>
                </Link>
                <br /> <br /> <br /> <br />
                <Bio bio={false} social={true} />
            </div>
        )
    }
}


export default Page404