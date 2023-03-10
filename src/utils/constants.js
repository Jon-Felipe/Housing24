import React from 'react';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { MdHome, MdVilla, MdApartment } from 'react-icons/md';

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

export const propertyCategories = [
  {
    id: 1,
    text: 'All Categories',
  },
  {
    id: 2,
    text: 'Home',
    icon: <MdHome />,
  },
  {
    id: 3,
    text: 'Villa',
    icon: <MdVilla />,
  },
  {
    id: 4,
    text: 'Apartment',
    icon: <MdApartment />,
  },
];

export const properties = [
  {
    id: 1,
    text: 'Elegant White Premium',
    category: 'Apartment',
    address: '326 Sarangan Street, Malang, ID',
    price: 721000,
    beds: 3,
    baths: 3,
    size: '10x10',
  },
  {
    id: 2,
    text: 'Elegant White Premium',
    category: 'Home',
    address: '326 Sarangan Street, Malang, ID',
    price: 721000,
    beds: 3,
    baths: 3,
    size: '10x10',
  },
  {
    id: 3,
    text: 'Elegant White Premium',
    category: 'Villa',
    address: '326 Sarangan Street, Malang, ID',
    price: 721000,
    beds: 3,
    baths: 3,
    size: '10x10',
  },
  {
    id: 4,
    text: 'Elegant White Premium',
    category: 'Home',
    address: '326 Sarangan Street, Malang, ID',
    price: 721000,
    beds: 3,
    baths: 3,
    size: '10x10',
  },
  {
    id: 5,
    text: 'Elegant White Premium',
    category: 'Apartment',
    address: '326 Sarangan Street, Malang, ID',
    price: 721000,
    beds: 3,
    baths: 3,
    size: '10x10',
  },
  {
    id: 6,
    text: 'Elegant White Premium',
    category: 'Villa',
    address: '326 Sarangan Street, Malang, ID',
    price: 721000,
    beds: 3,
    baths: 3,
    size: '10x10',
  },
  {
    id: 7,
    text: 'Elegant White Premium',
    category: 'Apartment',
    address: '326 Sarangan Street, Malang, ID',
    price: 721000,
  },
  {
    id: 8,
    text: 'Elegant White Premium',
    category: 'Home',
    address: '326 Sarangan Street, Malang, ID',
    price: 721000,
  },
];
