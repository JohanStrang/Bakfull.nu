const mongoose = require('mongoose');

// *********************************************************************************
// NOTE!!!! DO NOT USE THIS TEST DATA SINCE THE CLEANER AND MENU ID ARE NOT CORRECT
//          ONLY TO BE USED FOR INITIAL TESTING OF LISTING ETC. USE ADMIN PART
//          OF THE SYSTEM TO CREATE NEW ORDERS
// *********************************************************************************

exports.order = [



  {
      OrderDate: "2024-05-29",
      OrderTime: "23:00",
      customerName: "N Sten Stensson",
      customerAddress: "Vägen 2",
      customerPostalCode: "111 12",
      customerCity: "Stockholm",
      customerPhone: "070 123456",
      cleanerId: "123",
      cleanerPrize: 300,
      menuId: "1234",
      menuPrizeTotal: 300,
      orderPrizeTotal: 600,
      cleaningDone: true,
      cleaningReview: "5",
      cleaningReviewComment: "Bra",
      menuDelivered: false,
      menuReview: "",
      menuReviewComment: "",
},


{
  OrderDate: "2024-05-30",
  OrderTime: "22:00",
  customerName: "N Kalle",
  customerAddress: "Vägen 2",
  customerPostalCode: "111 12",
  customerCity: "Stockholm",
  customerPhone: "070 123456",
  cleanerOrderId: "123",
  cleanerPrize: 300,
  menuId: "1234",
  menuPrizeTotal: 300,
  orderPrizeTotal: 600,
  cleaningDone: true,
  cleaningReview: "5",
  cleaningReviewComment: "Bra",
  menuDelivered: true,
  menuReview: "3",
  menuReviewComment: "Kallt",
},

{
  OrderDate: "2024-05-26",
  OrderTime: "22:00",
  customerName: "N Olle",
  customerAddress: "Vägen 2",
  customerPostalCode: "111 12",
  customerCity: "Stockholm",
  customerPhone: "070 123456",
  cleanerId: "123",
  cleanerPrize: 200,
  menuId: "1234",
  menuPrizeTotal: 200,
  orderPrizeTotal: 400,
  cleaningDone: true,
  cleaningReview: "5",
  cleaningReviewComment: "Bra",
  menuDelivered: true,
  menuReview: "3",
  menuReviewComment: "Kallt",
},

{
OrderDate: "2024-05-15",
OrderTime: "11:00",
cleanerId: "1",
cleanerPrize: "0",
cleaningDone: false,
cleaningReview: "1",
cleaningReviewComment: "1",
customerAddress: "1",
customerCity: "1",
customerName: "1",
customerPhone: "1",
customerPostalCode: "1",
menuDelivered: false,
menuId: "1",
menuPrizeTotal: "1",
menuReview: "1",
menuReviewComment:"1",
orderPrizeTotal: "1",
},
];
