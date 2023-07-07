export type Flight = {
  transport: Transport;
  origin: string;
  destination: string;
  price: number;
};

export type Transport = {
  flightCarrier: string;
  flightNumber: string;
};

export type FlightApiResponse = {
  departureStation: string;
  arrivalStation: string;
  flightCarrier: string;
  flightNumber: string;
  price: number;
};
