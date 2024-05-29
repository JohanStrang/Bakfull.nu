import { boolean } from "yup";

export interface IOrders {
  _id: string,
  OrderDate: string;
  OrderTime: string;
  customerName: string;
  customerAddress: string;
  customerPostalCode: string;
  customerCity: string;
  customerPhone: string;
  cleanerOrderId: string;
  cleanerPrize: number;
  menuId: string;
  menuPrizeTotal: number;
  orderPrizeTotal: number;
  cleaningDone: boolean;
  cleaningReview: string;
  cleaningReviewComment: string;
  menuDelivered: boolean;
  menuReview: string;
  menuReviewComment: string;
}


export interface INewOrders {
  OrderDate: string;
  OrderTime: string;
  customerName: string;
  customerAddress: string;
  customerPostalCode: string;
  customerCity: string;
  customerPhone: string;
  cleanerOrderId: string;
  cleanerPrize: number;
  menuId: string;
  menuPrizeTotal: number;
  orderPrizeTotal: number;
  cleaningDone: boolean;
  cleaningReview: string;
  cleaningReviewComment: string;
  menuDelivered: boolean;
  menuReview: string;
  menuReviewComment: string;
}

export interface IOrdersResponse {
  _id: string;
  OrderDate: string;
  OrderTime: string;
  customerName: string;
  customerAddress: string;
  customerPostalCode: string;
  customerCity: string;
  customerPhone: string;
  cleaner: {
    cleanerName: string;
    cleanerAddress: string;
    cleanerPostalCode: string;
    cleanerCity: string;
    cleanerPhone: string;
    cleanerURL: string;
    cleanerContact: string;
    cleanerDescription: string;
    cleanerUserName: string;
    cleanerPassword: string;
  cleanerPrize: number;
  };
  cleanerPrize: string;
  menu: {
    restaurantName: string;
    restaurantAddress: string;
    restaurantPostalCode: string;
    restaurantCity: string;
    restaurantPhone: string;
    restaurantURL: string;
    restaurantContact: string;
    menuDescription: string;
    restaurantUserName: string;
    restaurantPassword: string;
    menuPrize: number;
  };
  menuPrizeTotal: number;
  orderPrizeTotal: number;
  cleaningDone: boolean;
  cleaningReview: string;
  cleaningReviewComment: string;
  menuDelivered: boolean;
  menuReview: string;
  menuReviewComment: string;
}