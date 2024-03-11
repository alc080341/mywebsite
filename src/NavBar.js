import React, { Component } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "./images/logo.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  // ### STATE USED FOR OPEN/SHOW STATE OF HAMBURGER DROPDOWN
  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
  
    this.toggleMenu = this.toggleMenu.bind(this);
  }

    toggleMenuOff = () => {
    this.setState({
      visible: false
    });
  
    this.toggleMenuOff = this.toggleMenuOff.bind(this);
  }

  render() {
    // ### PULLDOWN CLASS INCREASES THE VIEWPORT HEIGHT OF THE HEADER AND 'STACKS' MENU ELEMENTS FOR SMALLER DEVICES WHEN HAMBURGER IS CLICKED 
    let visibilityClass = "header pulldown";
    let pulldown = (this.state.visible) ? visibilityClass : "header";
    return (
    <nav className={pulldown}>
      <div className='flex-parent'>
        <div id='headerMenuIconContainer'><div id='headerMenuIcon' onClick={this.toggleMenu}><span></span><span></span><span></span></div></div>
        <div className='header-img'><img src={Logo} className='header-title' alt='Logo image'/></div> 
      </div>
      <div id='headerMenuNavContainer' className='flex-parent'>
        <NavLink to="/" text="HOME" click={this.toggleMenuOff} />
        <NavLink to="/about" text="ABOUT" click={this.toggleMenuOff}/>
        <NavLink to="/projects" text="PROJECTS" click={this.toggleMenuOff}/>
        <NavLink to="/contact" text="CONTACT" click={this.toggleMenuOff}/>
        <NavLink to="/codechambers" text="CODE CHAMBERS" click={this.toggleMenuOff}/>
      </div>
    </nav>)
  }
}

export default NavBar

// ### GENERATES A LINK / ANCHOR TAG FOR THE FOOTER
function NavLink({to, text, click})
{
  const path = useResolvedPath(to);

  // ### CHECK IF CURRENT LINK IS ACTIVE BY CHECKING CURRENT PATH IN URL
  const isActive = useMatch({path: path.pathname, end: true});

  let className = null;
  // ### IF CURRENT LINK === CURRENT PATH, SET ACTIVE - THIS IS THE CURRENT PAGE
  className = isActive ? "navlink active": "navlink";
  
  return (
  <div className={className} onClick={click}>
    <Link to={to}>
      {text}
    </Link>
  </div>
  )  
}
