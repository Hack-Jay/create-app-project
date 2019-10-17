import React from 'react'
import useStyles from './style'
import logo from '../../images/logo.jpg'

function Header() {
  const classes = useStyles();

  return <header className={classes.header}>
    <div className={classes.headerInner}>
      <img src={logo} alt="" className={classes.imgLogo}/>
      <ul className={classes.tabs}>
        <li>首页</li>
        <li>发现</li>
        <li>等你来答</li>
      </ul>
    </div>
  </header>
}

export default Header