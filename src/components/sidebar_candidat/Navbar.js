import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navba">
        <IconContext.Provider value={{color: '#8a8d8f;'}}>
          <Link to="#" className="menu-bars1">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="navbar__right">
         <FaIcons.FaUser />
            <a href="#">Profile</a>
          </div>
        </IconContext.Provider>
      </div>

      <nav className={sidebar ? 'nav-menu1 active' : 'nav-menu1'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle1">
            <Link to="#" className="menu-bars1">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="span1">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
