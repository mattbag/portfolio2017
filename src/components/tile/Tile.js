import React from 'react'
import Link from "gatsby-link"
import Img from 'gatsby-image'
import "./tile.scss"
import wf from './../../img/wf.png'
import oo from './../../img/oo.png'
import { _rand } from '../../utils/_utils'

class Tile extends React.Component {
  constructor() {
    super()
    this.state = {
      lift: '',
      lv1: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv2: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv3: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    }
  }

  _mouseEnter() {
    this.setState({
      lift: 'lift',
      lv1: `matrix3d(0.999848, ${_rand(-10, 10) / 100}, 0, 0, 0.0${_rand(10, 20)}, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 150, 1)`,
      lv2: `matrix3d(0.999391, 0.0${_rand(25, 40)}, 0, 0, 0.0${_rand(25, 40)}, 0.999391, 0, 0, 0, 0, 1, 0, 0, 0, 100, 1)`,
      lv3: `matrix3d(0.999848, 0.0${_rand(17, 40)}, 0, 0, 0.0${_rand(17, 40)}, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 30, 1)`
    })
  }
  _mouseLeave() {
    this.setState({
      lv2: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv1: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv3: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    })
  }

  render() {
    // console.log(this.props.project.node);
    const _post = this.props.project || false
    const _p = _post.node
    // console.log(_p)
    let tileInner;
    if (!_post) {
      tileInner = (
        <span style={{ position: `absolute`, top: 0, left: 0, right: 0 }}>
          <img src={wf} alt={`Coming Soon`}
            style={{ transform: this.state.lv1 }} />
          <img src={wf} alt={`Coming Soon`}
            style={{ transform: this.state.lv2, opacity: `.9` }} />
          <img src={oo} alt={`Coming Soon`}
            style={{ transform: this.state.lv3, opacity: `.7` }} />
          <div className="tile__title">{`Coming Soon`}</div>
        </span>
      )
    } else {
      tileInner = (
        <span>
          <img src={_p.heroImage.resize.src} alt={_p.projectName}
            style={{ transform: this.state.lv1 }} />
          <img src={wf} alt={_p.projectName}
            style={{ transform: this.state.lv2 }} />
          <img src={wf} alt={_p.projectName}
            style={{ transform: this.state.lv3, opacity: .7 }} />
              <div className="tile__title">{_p.projectName}</div>
          {_p.category &&
            <ul className="tile__icons" style={{
              display: `flex`,
              listStyleType: `none`,
              justifyContent:`center`,
              margin: 0
            }}>
            {_p.category.map(_ => <li key={_.title.title}><img width="10" src={_.icon.file.url} alt={_.title.title} style={{width: 20}} /></li>)}
            </ul>
            // || <div style={{paddingTop: 15}}></div>
          }
        </span>
      )
    }

    let link
    if (_p && _p.projectLink) {
      link = (
        <a href={_p.projectLink} target="_blank">
          {tileInner}
        </a>
      )
    } else if (_p) {
      const slug = _p.projectName.toString().replace(' ', '').toLowerCase()
      link = (
        <Link to={`/projects/${slug}`} style={{
          boxShadow: 'none'
        }}>
          {tileInner}
        </Link>
      )
    } else {
      link = tileInner
    }
    return (

      <div className="tile"
        onMouseOver={this._mouseEnter.bind(this)}
        onMouseOut={this._mouseLeave.bind(this)}
      >
        {link}
      </div>

    )
  }
}

export default Tile
