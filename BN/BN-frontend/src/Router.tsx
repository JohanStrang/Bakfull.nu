import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { BN_Main } from './pages/Bakfull.nu Main/BN_Main';
import BN_AdminCleaner from './pages/BN_Admin/BN_AdminCleaner';
import BN_AdminMenues from './pages/BN_Admin/BN_AdminMenues';
import BN_AdminOrder from './pages/BN_Admin/BN_AdminOrder';
import BN_Cleaner from './pages/BN_Admin/BN_Cleaner';
import BN_Menu from './pages/BN_Admin/BN_Menu';
import BN_SpecialAdminOrder from './pages/BN_Admin/BN_SpecialAdminOrder';

import BN_Main_Mobile from './pages/Bakfull.nu Main/BN_Main_Mobile';
import BN_MainOrder from './pages/Bakfull.nu Main/BN_Main_Order';
import { BN_Payment } from './pages/Bakfull.nu Main/BN_Payment';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },

  {
    path: '/BN_Main',
    element: <BN_Main></BN_Main>,
  },

  {
    path: '/BN_Main_Mobile',
    element: <BN_Main_Mobile></BN_Main_Mobile>,
  },

  {
    path: '/BN_AdminCleaner',
    element: <BN_AdminCleaner></BN_AdminCleaner>,
  },

  {
    path: '/BN_AdminMenu',
    element: <BN_AdminMenues></BN_AdminMenues>,
  },

  {
    path: '/BN_AdminOrder',
    element: <BN_AdminOrder></BN_AdminOrder>,
  },

  {
    path: '/BN_SpecialAdminOrder',
    element: <BN_SpecialAdminOrder></BN_SpecialAdminOrder>,
  },

  {
    path: '/BN_Cleaner',
    element: <BN_Cleaner></BN_Cleaner>,
  },

  {
    path: '/BN_Menu',
    element: <BN_Menu></BN_Menu>,
  },

  {
    path: '/BN_Main_Order',
    element: <BN_MainOrder></BN_MainOrder>,
  },

  {
    path: '/BN_Payment',
    element: <BN_Payment></BN_Payment>,
  },

]);
