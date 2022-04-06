import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoIosInformationCircleOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Manage Your Posts',
    path: '/manage',
    icon: <IoIcons.IoIosBuild />,
    cName: 'nav-text'
  },
  {
    title: 'Browse Postings',
    path: '/jobs',
    icon: <IoIcons.IoIosSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
