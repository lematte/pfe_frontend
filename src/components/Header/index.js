import React, {Component} from 'react';
//import {Form, Button} from 'react-bootstrap';
//import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import Alert from 'react-bootstrap/Alert';
import {FaReact, FaBars, FaTimes} from 'react-icons/fa';
import {Button} from './Button/Button';
import {Link } from 'react-router-dom'

//import '../../assets/css/styles.css';
//import {Button} from './MenuItems';
import './index.css';
class Header extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div class="cont">
      <nav className="NavbarItems fixed-top" bg="light">
        <h4 className="navbar-logo">
          React           <img style={{height: '20px'}} src={'imagetest'} alt="....." />

        </h4>
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} style={{ marginTop: '20px'}}>
          <li>
            <a className="nav-links" href="/"> Home </a>
          </li>
          <li>
            <a className="nav-links" href="/formation"> Courses </a>
          </li>
          <li>
            <a className="nav-links" href="/formateur"> Trainers </a>
          </li>
          <li>
            <a className="nav-links" href="/centre_formation">training centers</a>
          </li>
         
          <li>
            <a className="nav-links" href="/About"> About </a>
          </li>
         
          <li>
            <a className="nav-links" href="/contact"> Contact </a>
          </li>
          <li >
            <a className="nav-links-mobile"  href="/login"> Sign In </a>
          </li>
        </ul>

                 <a href="/login">  <Button > Sign In </Button> </a>
 
      </nav>
      
      </div>
    );
  }
}
export default Header;
