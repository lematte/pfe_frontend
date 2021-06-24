import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import './Navbar.css'

export const SidebarData = [
  
  {
    title: 'Dashboard',
    path: '/candidat/dashboard',
    icon: <AiIcons.AiFillHome  className="i" />,
    cName: 'nav-txt'
  },
  {
    title: 'Profile',
    path: '/candidat/profile',
    icon: <FaIcons.FaUserAlt  className="i"/>,
    cName: 'nav-txt'
  },
  {
    title: 'Subscriptions',
    path: '/candidat/abonnements',
    icon: <FaIcons.FaHandshake  className="i"/>,
    cName: 'nav-txt'
  },
  {
    title: 'Courses',
    path: '#',
    icon: <IoIcons.IoIosPaper  className="i" />,
    cName: 'nav-txt'
  },
  {
    title: 'training centers',
    path: '/team',
    icon: <FaIcons.FaUsers className="i"/>,
    cName: 'nav-txt'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText  className="i"/>,
    cName: 'nav-txt'
  },
  {
    title: 'About',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle className="i"/>,
    cName: 'nav-txt'
  },
  {
    title: 'settings',
    path: '/support',
    icon: <FaIcons.FaCog className="i"/>,
    cName: 'nav-txt'
  }
];
