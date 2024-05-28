require('dotenv').config();

const mongoose = require('mongoose');

//BN
const Cleaner = require('../src/models/BN_Cleaner.js');
const { cleaner } = require('./mockdata/BN_cleaner.js');
//const Menu = require('../src/models/BN_Menu.js');
//const { menu } = require('./mockdata/BN_menu.js');

const populateDbWithMockData = async () => {
  try {
    mongoose.set('strictQuery', false);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);

    //BN
    const cleanerRes = await Cleaner.create(cleaner);
    //const menuRes = await Menu.create(menu);

    console.log('Database successfully populated with mock-cleaners');

    return cleanerRes;
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateDbWithMockData();