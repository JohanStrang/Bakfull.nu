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
console.log(order.customertName);
const response = await axios.post("http://localhost:3000/api/v1/orders", {
  OrderDate: order.OrderDate,
  OrderTime: order.OrderTime,
  customerName: order.customerName,
  customerAddress: order.customerAddress,
  customerPostalCode: order.customerPostalCode,
  customerCity: order.customerCity,
  customerPhone: order.customerPhone,
  cleanerOrderId: order.cleanerOrderId,
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

//Bara för test
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
}

//OLD RESTAURANT *****************

 /* public async addBooking(booking: any): Promise<any> {
    console.log(booking.guestEmail);
    const response = await axios.post("http://localhost:3000/api/v1/bookings", {
      guestName: booking.guestName,
      guestEmail: booking.guestEmail,
      guestPhoneNum: booking.guestPhoneNum,
      reservationDate: booking.reservationDate,
      reservationTime: booking.reservationTime,
      statusForTable: booking.statusForTable,
      partySize: booking.partySize,
      tableNumber: booking.tableNumber,
    });
    return response.data;
  }

  public async deleteBooking(id: string): Promise<any> {
    console.log(id);
    const response = await axios.delete(
      "http://localhost:3000/api/v1/bookings/" + id
    );
    return response.data;
  }

  public async deleteGuest(id: string): Promise<any> {
    console.log(id);
    const response = await axios.delete(
      "http://localhost:3000/api/v1/guests/" + id
    );
    return response.data;
  }

  public async getGuestById(id: string): Promise<any> {
    console.log(id);
    const response = await axios.get(
      "http://localhost:3000/api/v1/guests/" + id
    );
    return response.data.guestName;
  }

  public async getAllGuests(): Promise<IAllGuests[]> {
    const response = await axios.get("http://localhost:3000/api/v1/guests/");
    return response.data;
  }

  //Bara för test
  public async updateBooking(booking: IUpdateBooking): Promise<any> {
    const response = await axios.put(
      "http://localhost:3000/api/v1/bookings/" + booking._id,
      {
        reservationDate: booking.reservationDate,
        reservationTime: booking.reservationTime,
        partySize: booking.partySize,
        tableNumber: booking.tableNumber,
      }
    );
    return response.data;
  }
}
*/
