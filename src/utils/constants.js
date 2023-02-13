import React from 'react';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

export const pageLinks = [
  {
    id: 1,
    text: 'Buy',
    url: '/buy',
  },
  {
    id: 2,
    text: 'Rent',
    url: '/rent',
  },
  {
    id: 3,
    text: 'Compare',
    url: '/compare',
  },
];

export const profileLinks = [
  {
    id: 1,
    text: 'Login',
    url: '/login',
    icon: <FiLogIn />,
  },
  {
    id: 2,
    text: 'Register',
    url: '/register',
    icon: <FiUserPlus />,
  },
];
