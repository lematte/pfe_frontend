import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';
import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../../actions';

function Navbar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navba">
        <IconContext.Provider value={{color: '#8a8d8f'}}>
          <Link to="#" className="menu-bars1">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="navbar__right">
            <FaIcons.FaUser className="i" />
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
                <Link to={item.path} className="ho">
                  {item.icon}
                  <span className="span1">{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-Logout" >
            <Link to="/login" className="ho" onClick={logout}>
              <FaIcons.FaPowerOff className="out" />
              <span className="span1"> Logout </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
