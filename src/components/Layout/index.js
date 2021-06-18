import React from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';

import { Navbar , Nav ,Container , Jumbotron , Row , Col  } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Layout(props) {
  
  const user = JSON.parse(window.localStorage.getItem('user'));
  const renderLlinksByRole = () => {
/*
      if (user.role == "admin"){
              return(  
                      <Col md={2} className="sidebar">
                                  <ul>
                                      <li> <NavLink exact to={`/`}><FontAwesomeIcon icon={faListAlt} /> Accueil </NavLink> </li>
                                      <li> <NavLink to={`/centre_formation`}><FontAwesomeIcon icon={faComments} /> centre_formation </NavLink> </li>
                                      <li> <NavLink to={`/centre_formation/posts`}><FontAwesomeIcon icon={faFilePowerpoint} /> Add_centre_formation </NavLink> </li>
                                      <li> <NavLink to={`/evaluations`}><FontAwesomeIcon icon={faGavel} /> Evaluations </NavLink> </li>
                                      <li> <NavLink to={`/formation`}><FontAwesomeIcon icon={faBook} /> formation </NavLink> </li>
                                      <li> <NavLink to={`/liste_centre`}><FontAwesomeIcon icon={faUserFriends} /> liste_centre </NavLink> </li>
                                      <li> <NavLink to={`/espace_centre/dashboard`}><FontAwesomeIcon icon={faUserCircle} />espace_centre Profile </NavLink> </li>
                                      <li> <NavLink to={`/candidat/dashboard`}><FontAwesomeIcon icon={faUserCircle} /> Profile </NavLink> </li>
                                      <li> <NavLink to={`/formateur/dashboard`}><FontAwesomeIcon icon={faUserCircle} /> Profile </NavLink> </li>

                                  </ul>
                      </Col>)
      }else if(user.role == "centre_formation"){
          return(  
              <Col md={2} className="sidebar">
                          <ul>
                              <li> <NavLink exact to={`/`}><FontAwesomeIcon icon={faListAlt} /> Accueil </NavLink> </li>
                              <li> <NavLink to={`/centre_formation/posts`}><FontAwesomeIcon icon={faLightbulb} /> Idees </NavLink> </li>
                              <li> <NavLink to={`/centre_formation`}><FontAwesomeIcon icon={faListAlt} /> Projets </NavLink> </li>
                              <li> <NavLink to={`/formation`}><FontAwesomeIcon icon={faUserCircle} /> Profile </NavLink> </li>
                          </ul>
              </Col>)
      }else{
          return(  
              <Col md={2} className="sidebar">
                          <ul>
                          <li> <NavLink exact to={`/`}><FontAwesomeIcon icon={faListAlt} /> Accueil </NavLink> </li>
                              <li> <NavLink to={`/user/idees`}><FontAwesomeIcon icon={faLightbulb} /> Idees </NavLink> </li>
                              <li> <NavLink to={`/user/projets`}><FontAwesomeIcon icon={faListAlt} /> Projets </NavLink> </li>
                              <li> <NavLink to={`/user/me/idees`}><FontAwesomeIcon icon={faLightbulb} /> Mes Idees </NavLink> </li>
                              <li> <NavLink to={`/user/me/projets`}><FontAwesomeIcon icon={faListAlt} /> Mes Projets </NavLink> </li>
                              <li> <NavLink to={`/profile`}><FontAwesomeIcon icon={faUserCircle} /> Profile </NavLink> </li>
                          </ul>
              </Col>)
            
      }  */
  }
  return (
<div>
      <>
        <Header />
        {props.sidebar ? (
          <Container>
            <Row>
              {renderLlinksByRole()}
              <Col>
                {props.children}
              </Col>
            </Row>!
          </Container>
        ) : (
          props.children
        )}
        <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

       <Footer />
      </>
      
      </div>
  )
}
export default Layout;
