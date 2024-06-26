require('dotenv').config();

const mongoose = require('mongoose');


// *********************************************************************************
// NOTE!!!! DO NOT USE THIS TEST DATA SINCE THE CLEANER AND MENU ID ARE NOT CORRECT
//          ONLY TO BE USED FOR INITIAL TESTING OF LISTING ETC. USE ADMIN PART
//          OF THE SYSTEM TO CREATE NEW ORDERS
// *********************************************************************************


const Order = require('../src/models/BN_Order.js');
const { order } = require('./mockdata/BN_order.js');

const populateDbWithMockData = async () => {
  try {
    mongoose.set('strictQuery', false);

    const conn = await mongoose.connect("mongodb+srv://Johan:Maki2345@cluster0.hurjiru.mongodb.net/");

    console.log(`MongoDB connected: ${conn.connection.host}`);

    //BN
    //const orderRes = await Order.create(cleaner);
    const orderRes = await Order.create(order);

    console.log('Database successfully populated with mock-menu order');

    return orderRes;
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateDbWithMockData();
