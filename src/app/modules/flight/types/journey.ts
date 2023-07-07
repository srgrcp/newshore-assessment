import { Flight } from './flight';

export type Journey = {
  flights: Flight[];
  origin: string;
  destination: string;
  price: number;
};
