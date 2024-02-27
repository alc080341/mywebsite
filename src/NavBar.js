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

  // Add nav button to own compenent
  // see instructions on how to handle props VITE create-react-app
  render() {
    let visibilityClass = "header pulldown";
    let pulldown = (this.state.visible) ? visibilityClass : "header";
    //<NavLink to="/contact" text="CONTACT"/>
    //<NavLink to="/blog" text="BLOG"/>
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
      </div>
    </nav>)
  }
}

export default NavBar

// Learn react hooks/Difference between class and function in react?
// Customise and tidy all this code
// Learn flexbox/grid add my styles
// Add content projects etc
// commit to git
// upload to godaddy
// write blog use node/express server???
function NavLink({to, text, click})
{
  const path = useResolvedPath(to);
  const isActive = useMatch({path: path.pathname, end: true});

  let className = null;
  className = isActive ? "navlink active": "navlink";
  
  return (
  <div className={className} onClick={click}>
    <Link to={to}>
      {text}
    </Link>
  </div>
  )  
}
