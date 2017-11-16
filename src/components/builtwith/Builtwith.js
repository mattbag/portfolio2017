import React,{Component} from 'react'
import Icon from './../icons/icon'
class Builtwith extends Component {
  render() {
    return (
      <span>
      <div style={{
        position: 'fixed',
        bottom:5,
        right:5,
        zIndex: 2
      }}>
     

     <Icon icon="gatsby" link="https://www.gatsbyjs.org/"/>
     <span style={{
      padding: 2
      }}></span>      
      <Icon icon="react" link="https://facebook.github.io/react/"/>
     </div>
     <div style={{
        position: 'fixed',
        bottom:0,
        right:0,
        height: 160,
        width: 160,
        background: '#fff',
        borderRadius: '50%',
        transform: `translate(40%, 55%)`,
        zIndex: 1
      }}></div>
    
      </span>
    )
  }
}

export default Builtwith
