import React from 'react'
import './social.scss'
class Social extends React.Component {
    render() {
        const links = [
            { name: 'github', link: 'https://mattbag.github.io/' },
            { name: 'linkedin', link: 'https://www.linkedin.com/in/matteobagni88/' },
            { name: 'twitter', link: 'https://mobile.twitter.com/mattbag00' },
            { name: 'codepen', link: 'https://codepen.io/mattbag/' },]

        const aStyle = {
            fontFamily: 'Lobster',
            color: '#fff',
            textShadow: `1px 1px #1988cc`,
            padding: `.5vmin`,
            textDecoration: `none`
        }

        return (
            <ul className="social" style={{ margin: 0 }}>
                {links.map(link => {
                    return <li key={link.name}><a href={link.link} target="_blank" style={aStyle}>{link.name}</a></li>
                })}
            </ul>
        )
    }
}

export default Social
