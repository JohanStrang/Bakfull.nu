import axios from "axios";
import { IBookingResponse } from "../models/BookingResponseJS";
import { INewBooking } from "../models/NewBooking";
import { IGuestById, IAllGuests } from "../models/GuestById";
import { IUpdateBooking } from "../models/UpdateBooking";

//RN
import { ICleaners, INewCleaners } from "../models/RN_Cleaners";
import { IMenues } from "../models/RN_Menues";
import { IOrders, IOrdersResponse} from "../models/RN_Orders";
import { Alert } from "reactstrap";

export const getAllBookings = async () => {
  try {
    const response = await axios.get<IBookingResponse[]>(
      "http://localhost:3000/api/v1/bookings/"
    );

    return response.data;
  } catch {
    throw new Error("Could not get data from api");
  }
};


export class BN_AdminService {

//RN
  public async getAllCleaners(): Promise<ICleaners[]> {
    const response = await axios.get("http://localhost:3000/api/v1/cleaners/");
    return response.data;
  }

  //RN
public async getCleanerById(id: string): Promise<any> {  
  console.log(id);
  const response = await axios.get(
    "http://localhost:3000/api/v1/cleaners/" + id
  );
  return response.data;
}


//RN
public async deleteCleaner(id: string): Promise<any> {  
  console.log(id);
  const response = await axios.delete(
    "http://localhost:3000/api/v1/cleaners/" + id
  );
  return response.data;
}

//RN
public async addCleaner (cleaner: any): Promise<any> {
  console.log(cleaner.cleanerName);
  const response = await axios.post("http://localhost:3000/api/v1/cleaners", {
    cleanerName: cleaner.cleanerName,
    cleanerAddress: cleaner.cleanerAddress,
    cleanerPostalCode: cleaner.cleanerPostalCode,
    cleanerCity: cleaner.cleanerCity,
    cleanerPhone: cleaner.cleanerPhone,
    cleanerURL: cleaner.cleanerURL,
    cleanerContact: cleaner.cleanerContact,
    cleanerDescription: cleaner.cleanerDescription,
    cleanerPrize: cleaner.cleanerPrize,
    cleanerUserName: cleaner.cleanerUserName,
    cleanerPassword: cleaner.cleanerPassword,
  });
  return response.data;
}

//RN
public async getAllMenues(): Promise<IMenues[]> {
  const response = await axios.get("http://localhost:3000/api/v1/menues/");
  return response.data;
}

//RN
public async deleteMenues(id: string): Promise<any> {  
console.log(id);
const response = await axios.delete(
  "http://localhost:3000/api/v1/menues/" + id
);
return response.data;
}

//RN
public async getMenuById(id: string): Promise<any> {  
  console.log(id);
  const response = await axios.get(
    "http://localhost:3000/api/v1/menues/" + id
  );
  return response.data;
  }

//RN
public async addMenues (menu: any): Promise<any> {
console.log(menu.restaurantName);
const response = await axios.post("http://localhost:3000/api/v1/menues", {
  restaurantName: menu.restaurantName,
  restaurantAddress: menu.restaurantAddress,
  restaurantPostalCode: menu.restaurantPostalCode,
  restaurantCity: menu.restaurantCity,
  restaurantPhone: menu.restaurantPhone,
  restaurantURL: menu.restaurantURL,
  restaurantContact: menu.restaurantContact,
  menuDescription: menu.menuDescription,
  menuPrize: menu.menuPrize,
  restaurantUserName: menu.restaurantUserName,
  restaurantPassword: menu.restaurantPassword,
});
return response.data;
}

//RN
public async getAllOrders(): Promise<IOrders[]> {
  const response = await axios.get("http://localhost:3000/api/v1/orders/");
  return response.data;
}

//RN Search Order on Customer Phone
public async getOrdersByCustomerPhone(customerPhone: string): Promise<IOrders[]> {
  console.log(customerPhone)
  const response = await axios.get<IOrders[]>("http://localhost:3000/api/v1/orders/phone/" + customerPhone);
  console.log(response)
  return response.data;
}

//RN Search order on Cleaner Id
public async getOrdersByCleanerId(cleanerId: string): Promise<IOrders[]> {
  console.log(cleanerId)
  const response = await axios.get<IOrders[]>("http://localhost:3000/api/v1/orders/cleaner/" + cleanerId);
  console.log(response)
  return response.data;
}

//RN Search order on Menu Id (Restaurant)
public async getOrdersByMenuId(menuId: string): Promise<IOrders[]> {
  console.log(menuId)
  const response = await axios.get<IOrders[]>("http://localhost:3000/api/v1/orders/restaurant/" + menuId);
  console.log(response)
  return response.data;
}


//RN
public async deleteOrders(id: string): Promise<any> {  
console.log(id);
const response = await axios.delete(
  "http://localhost:3000/api/v1/orders/" + id
);
return response.data;
}

//RN
public async addOrders (order: any): Promise<any> {
console.log(order.cleanerId);
console.log(order.menuId);
const response = await axios.post("http://localhost:3000/api/v1/orders", {
  OrderDate: order.OrderDate,
  OrderTime: order.OrderTime,
  customerName: order.customerName,
  customerAddress: order.customerAddress,
  customerPostalCode: order.customerPostalCode,
  customerCity: order.customerCity,
  customerPhone: order.customerPhone,
  cleanerId: order.cleanerId,
  cleanerPrize: order.cleanerPrize,
  menuId: order.menuId,
  menuPrizeTotal: order.menuPrizeTotal,
  orderPrizeTotal: order.orderPrizeTotal,
  cleaningDone: order.cleaningDone,
  cleaningReview: order.cleaningReview,
  cleaningReviewComment: order.cleaningReviewComment,
  menuDelivered: order.menuDelivered,
  menuReview: order.menuReview,
  menuReviewComment: order.menuReviewComment,
});
return response.data;
}

//RN
public async updateOrders (order: any): Promise<any> {
  const response = await axios.put("http://localhost:3000/api/v1/orders/" + order._id, {
    OrderDate: order.OrderDate,
    OrderTime: order.OrderTime,
    customerName: order.customerName,
    customerAddress: order.customerAddress,
    customerPostalCode: order.customerPostalCode,
    customerCity: order.customerCity,
    customerPhone: order.customerPhone,
    cleanerId: order.cleanerId,
    cleanerPrize: order.cleanerPrize,
    menuId: order.menuId,
    menuPrizeTotal: order.menuPrizeTotal,
    orderPrizeTotal: order.orderPrizeTotal,
    cleaningDone: order.cleaningDone,
    cleaningReview: order.cleaningReview,
    cleaningReviewComment: order.cleaningReviewComment,
    menuDelivered: order.menuDelivered,
    menuReview: order.menuReview,
    menuReviewComment: order.menuReviewComment,
  });
  return response.data;
  }
  

//Update Cleaners
public async updateCleaners(cleaner: ICleaners): Promise<any> {
  const response = await axios.put(
    "http://localhost:3000/api/v1/cleaners/" + cleaner._id,
    {
      cleanerName: cleaner.cleanerName,
      cleanerAddress: cleaner.cleanerAddress,
      cleanerPostalCode: cleaner.cleanerPostalCode,
      cleanerCity: cleaner.cleanerCity,
      cleanerPhone: cleaner.cleanerPhone,
      cleanerURL: cleaner.cleanerURL,
      cleanerContact: cleaner.cleanerContact,
      cleanerDescription: cleaner.cleanerDescription,
      cleanerPrize: cleaner.cleanerPrize,
      cleanerUserName: cleaner.cleanerUserName,
      cleanerPassword: cleaner.cleanerPassword,
    }
  );
  return response.data;
};

//RN
public async fetchGeoAddress(lat: any, lon: any): Promise<any> {  
  console.log(lat);
  const response = await axios.get(
    "https://api.geoapify.com/v1/geocode/reverse?lat=" + lat + "lon="+ lon + "&apiKey=de98ec1028cf45669eab9bee4772ad5f" 
  );
  return response.data;
  }
  
};
