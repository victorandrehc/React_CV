import React from 'react';
import { FaXing, FaLinkedin, FaTwitter, FaGithub, FaMailBulk } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/React_CV/dashboard',
    text: 'Dashboard',
  },
  {
    id: 2,
    url: '/React_CV',
    text: 'Home',
  },
  // {
  //   id: 3,
  //   url: '/contact',
  //   text: 'Contact',
  // },
  // {
  //   id: 4,
  //   url: '/contact',
  //   text: 'contact',
  // },
  // {
  //   id: 5,
  //   url: '/profile',
  //   text: 'profile',
  // },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/victorandrehc',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/victor-houri-costa/',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.xing.com/profile/Victor_Costa7/cv',
    icon: <FaXing />,
  },
  {
    id: 4,
    url: 'https://twitter.com/HouriVictor',
    icon: <FaTwitter />,
  },
  {
    id: 5,
    url: 'mailto:victorandrehc@gmail.com',
    icon: <FaMailBulk />,
  },
];
