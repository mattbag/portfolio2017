import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet";
import logo from './../components/bio/face.png'
import Bio from "./../components/bio/Bio";
import './404.scss'

class Page404 extends React.Component {
    render() {
        const _w = `30vw`
        const four = {
            color: `#fff`,
            textShadow: `rgb(46, 142, 222) 2px 2px`,
            fontSize: _w,
            fontDisplay: `swap`,
            textAlign: `center`,
        }
        return (
            <div style={{ padding: `6vmin`, textAlign: `center` }}>
                <Helmet title={`4😱4 - Matt Bagni`} />

                <Link to="/" style={{ textDecoration: `none` }}>
                    <img src={logo} alt="matt bagni logo" style={{ maxWidth: _w }} />
                    <div className="bang">
                        <div style={{
                            display: `flex`,
                            justifyContent: `center`,
                            marginTop: `-20vmin`,
                            marginBottom: `20vh`
                        }}>
                            <h2 style={four}>4</h2>
                            <div style={{ width: _w }}></div>
                            <h2 style={four}>4</h2>
                        </div>
                    </div>
                </Link>
               
                <Bio bio={false} social={true} />
            </div>
        )
    }
}


export default Page404