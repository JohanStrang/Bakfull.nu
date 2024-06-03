import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Admin from './pages/Admin/Admin';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Booking } from './pages/Booking/Booking';
import { Contact } from './pages/Contact/Contact';
import { BookingForm } from './components/BookingForm/BookingForm';
import { BookingView } from './components/BookingView/BookingView';
import { DeleteBooking } from './components/DeleteBooking/DeleteBooking';
//import { AddBooking } from "./components/AddBooking/AddBooking";
//import { UpdateBooking } from './components/UpdateBooking/UpdateBooking';
import { BN_Main } from './pages/Bakfull.nu Main/BN_Main';
import BN_AdminCleaner from './pages/BN_Admin/BN_AdminCleaner';
import BN_AdminMenues from './pages/BN_Admin/BN_AdminMenues';
import BN_AdminOrder from './pages/BN_Admin/BN_AdminOrder';
import BN_Cleaner from './pages/BN_Admin/BN_Cleaner';

import BN_Main_Mobile from './pages/Bakfull.nu Main/BN_Main_Mobile';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/booking',
    element: <Booking></Booking>,
  },
  {
    path: '/deleteBooking',
    element: <DeleteBooking></DeleteBooking>,
  },
  {
    path: '/contact',
    element: <Contact></Contact>,
  },
  // {
  //   path: "/addbooking",
  //   element: <AddBooking></AddBooking>,
  // },
  {
    path: '/admin',
    element: <Admin></Admin>,
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
    path: '/BN_Cleaner',
    element: <BN_Cleaner></BN_Cleaner>,
  },

]);
