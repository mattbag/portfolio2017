import React from 'react'
import Link from "gatsby-link"
import Img from 'gatsby-image'
import "./tile.scss"
import wf from './../../img/wf.png'

// import { rhythm } from '../utils/typography'

class Tile extends React.Component {
  constructor() {
    super()
    this.state = {
      lift: '',
      // lvl1: {points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}]}
      lv1: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv2: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv3: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    }
  }
  // componentWillMount(){
  //   // console.log('mount');
  //   this.setState ({
  //     lvl1: 'transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
  //     lvl2: 'transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
  //     lvl3: 'transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
  //   })
  //   console.log(this.state)
  // }
  _rand(min, max) {
    return Math.floor(Math.random() * max) + min
  }
  _mouseEnter() {
    this.setState({
      lift: 'lift',
      lv1: `matrix3d(0.999848, ${this._rand(-10, 10) / 100}, 0, 0, 0.0${this._rand(10, 20)}, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 150, 1)`,
      lv2: `matrix3d(0.999391, 0.0${this._rand(25, 40)}, 0, 0, 0.0${this._rand(25, 40)}, 0.999391, 0, 0, 0, 0, 1, 0, 0, 0, 100, 1)`,
      lv3: `matrix3d(0.999848, 0.0${this._rand(17, 40)}, 0, 0, 0.0${this._rand(17, 40)}, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 30, 1)`
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
    const _p = this.props.project.node
    console.log('tile render alert')
    const tileInner = (
      <span>
        <img src={_p.heroImage.resize.src} alt={_p.projectName}
          style={{ transform: this.state.lv1 }} />
        <img src={wf} alt={_p.projectName}
          style={{ transform: this.state.lv2 }} />
        <img src={wf} alt={_p.projectName}
          style={{ transform: this.state.lv3, opacity: .7 }} />
        <div className="tile__title">{_p.projectName}</div>
      </span>
    )

    let link
    if (_p.projectLink) {
      link = (
        <a href={_p.projectLink} target="_blank">
          {tileInner}
        </a>
      )
    } else {
      const slug = _p.projectName.toString().replace(' ', '').toLowerCase()
      link = (
        <Link to={`/projects/${slug}`} style={{
          boxShadow: 'none'
        }}>
          {tileInner}
        </Link>

      )
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
