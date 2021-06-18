import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

//material-ui
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HomeStart from '../components/HomeStart';
const UserHome = () => {
  const {
    account: {role},
    authenticated,
  } = useSelector((state) => state.auth);

  return (
    <>
      {authenticated && role === 'candidat' ? (
        <Redirect to="/candidat/dashboard" />
      ) : authenticated && role === 'admin' ? (
        <Redirect to="/admin/dashboard" />
      ) : (
        <>
          <HomeStart />
        </>
      )}
      ;
    </>
  );
};

export default UserHome;


 /*  <Navbar expand="lg" fixed="top" bg="light">
      <div className="container-xl">
        <Navbar.Brand href="#home">
          a
          <img style={{height: '20px'}} src={'imagetest'} alt="Third slide" />
          Logo
        </Navbar.Brand>
        <div style={{marginLeft: '10px'}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav
              className=" mr-sm-2"
              style={{maxHeight: '100px'}}
              marginLeft="10px"
              // className={state.toggle ? "nav-links show-nav" : "nav-links"}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>

              <Nav.Link
                href="#pricing"
                className="get-started-btn"
                style={{
                  transition: '0.3s',
                  marginLeft: '22px',
                  background: '#5fcf80',
                  color: '#fff',
                  borderRadius: '50px',
                  padding: '8px 25px',
                  whiteSpace: 'nowrap',
                  fontSize: '14px',
                  display: 'inline-block',
                }}
              >
                {' '}
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>*/
      /*<div>

<button class="navbar-toggle"  data-toggle="collapse" data-target=".navbar-collapse">
                       <span class="icon-bar"></span>
                       <span class="icon-bar"></span>
                       <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand"><i>GLSOftware</i></a>
           </div>*/
      /*  </div>
    </Navbar>*/

      /*  <div className="navbar navbar-fixed-top navbar-inverse"  role="navigation">
   <div className="container">
       <div className="navbar-header">

                <button className="navbar-toggle"  data-toggle="collapse" data-target=".navbar-collapse">
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand"><i>GLSOftware</i></a>
       </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#">HOME</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#About">ABOUT US</a></li>
            <li><a href="#team">TEAM</a></li>
            <li><a href="#contacts">CONTACT</a></li>
            <li><a href="#">LOGIN</a></li>
            <li><a href="#">REGISTER</a></li>

        </ul>
     </div>

    </div> 
  

</div>*/

      /*  <header id="header" className="fixed-top" expanded="onToggle">
      <div className="container d-flex align-items-center">
        <h1 class="logo me-auto">
          <a href="/">Lematte</a>
        </h1>
        <nav
          id="navbar"
          className="navbar order-last order-lg-0"
          expanded="onToggle"
        >
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a class="active" href="about.html">
                About
              </a>
            </li>
            <li>
              <a href="/formation">Courses</a>
            </li>
            <li>
              <a href="trainers.html">Trainers</a>
            </li>
            <li>
              <a href="events.html">Events</a>
            </li>

            <li class="dropdown">
              <a href="#">
                <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{' '}
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="/login" className="get-started-btn">
          Login
        </a>
      </div>
    </header>*/
