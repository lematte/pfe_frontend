import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/candidat/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-txt'
  },
  {
    title: 'Subscriptions',
    path: '/candidat/abonnements',
    icon: <FaIcons.FaHandshake/>,
    cName: 'nav-txt'
  },
  {
    title: 'Courses',
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-txt'
  },
  {
    title: 'training centers',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-txt'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-txt'
  },
  {
    title: 'About',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-txt'
  },
  {
    title: 'settings',
    path: '/support',
    icon: <FaIcons.FaCog />,
    cName: 'nav-txt'
  }
];
