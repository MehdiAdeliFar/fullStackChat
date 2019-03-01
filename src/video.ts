import {Customer} from './customer';

export class Video {
  reservedCustomer: Customer;
  _id: string;
  title: string;
  runningTime: number;
  genre: string;
  rating: number;
  director: string;
  status: boolean;
  imageUrl: string;
}
