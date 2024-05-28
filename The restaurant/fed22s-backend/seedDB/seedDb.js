require('dotenv').config();

const mongoose = require('mongoose');

const Booking = require('../src/models/ResBooking.js');
const { booking } = require('./mockdata/booking');

//BN
const Cleaner = require('../src/models/BN_Cleaner.js');
const { cleaner } = require('./mockdata/BN_cleaner.js');
const Menu = require('../src/models/BN_Menu.js');
const { menu } = require('./mockdata/BN_menu.js');

const populateDbWithMockData = async () => {
  try {
    mongoose.set('strictQuery', false);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);

    const bookingRes = await Booking.create(booking);

    //BN
    const cleanerRes = await Cleaner.create(cleaner);
    const menuRes = await Menu.create(menu);

    console.log('Database successfully populated with funny items');

    return bookingRes;
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateDbWithMockData();
