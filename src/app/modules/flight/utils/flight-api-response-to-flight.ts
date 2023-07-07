import { Flight, FlightApiResponse } from '../types/flight';

export const flightApiResponseToFlight = (
  flightApiResponse: FlightApiResponse
): Flight => ({
  origin: flightApiResponse.departureStation,
  destination: flightApiResponse.arrivalStation,
  price: flightApiResponse.price,
  transport: {
    flightCarrier: flightApiResponse.flightCarrier,
    flightNumber: flightApiResponse.flightNumber,
  },
});
