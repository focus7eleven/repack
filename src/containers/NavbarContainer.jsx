import React from 'react'
import styles from './NavbarContainer.scss'
import logo from '../../resource/logo.jpeg'

const NavbarComponent = React.createClass({
  render(){
    return (
      <div className={styles.container}>
        <img src={logo} />
      </div>
    )
  }
})

export default NavbarComponent;
