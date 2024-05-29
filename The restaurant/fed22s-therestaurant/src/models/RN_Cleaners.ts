
export interface ICleaners {
  _id: string,
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
  
}


export interface INewCleaners {
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
}