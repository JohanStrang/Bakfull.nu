const mongoose = require('mongoose');

exports.cleaner = [

  {
      cleanerName: 'Kalle Städ',
      cleanerAddress: 'Frostvägen 99 ',
      cleanerPostalCode: '168 99',
      cleanerCity: 'Bromma',
      cleanerPhone: '079-9999999',
      cleanerURL: 'www.kallestad.se',
      cleanerContact: 'Kalle Karlsson',
      cleanerDescription: 'Full röjning',
      cleanerPrize: 300,
  },

  {
    cleanerName: 'Lisa Städ',
    cleanerAddress: 'STädvägen 102 ',
    cleanerPostalCode: '169 99',
    cleanerCity: 'Stockholm',
    cleanerPhone: '072-2222222',
    cleanerURL: 'www.lisastad.se',
    cleanerContact: 'Lisa Larsson',
    cleanerDescription: 'Full röjning och putsning',
    cleanerPrize: 400,
},

];
