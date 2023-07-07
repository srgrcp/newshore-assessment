import { Flight, FlightApiResponse } from '../../types/flight';

export const testFlights: Flight[] = [
  {
    origin: 'MZL',
    destination: 'MDE',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '8001',
    },
  },
  {
    origin: 'MZL',
    destination: 'CTG',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '8002',
    },
  },
  {
    origin: 'PEI',
    destination: 'BOG',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '8003',
    },
  },
  {
    origin: 'MDE',
    destination: 'BCN',
    price: 500,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '8004',
    },
  },
  {
    origin: 'CTG',
    destination: 'CAN',
    price: 300,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '8005',
    },
  },
  {
    origin: 'BOG',
    destination: 'MAD',
    price: 500,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '8006',
    },
  },
  {
    origin: 'BOG',
    destination: 'MEX',
    price: 300,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '8007',
    },
  },
  {
    origin: 'MZL',
    destination: 'PEI',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '8008',
    },
  },
  {
    origin: 'MDE',
    destination: 'CTG',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '8009',
    },
  },
  {
    origin: 'BOG',
    destination: 'CTG',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '8010',
    },
  },
  {
    origin: 'MDE',
    destination: 'MZL',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '9001',
    },
  },
  {
    origin: 'CTG',
    destination: 'MZL',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '9002',
    },
  },
  {
    origin: 'BOG',
    destination: 'PEI',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '9003',
    },
  },
  {
    origin: 'BCN',
    destination: 'MDE',
    price: 500,
    transport: {
      flightCarrier: 'ES',
      flightNumber: '9004',
    },
  },
  {
    origin: 'CAN',
    destination: 'CTG',
    price: 300,
    transport: {
      flightCarrier: 'MX',
      flightNumber: '9005',
    },
  },
  {
    origin: 'MAD',
    destination: 'BOG',
    price: 500,
    transport: {
      flightCarrier: 'ES',
      flightNumber: '9006',
    },
  },
  {
    origin: 'MEX',
    destination: 'BOG',
    price: 300,
    transport: {
      flightCarrier: 'MX',
      flightNumber: '9007',
    },
  },
  {
    origin: 'PEI',
    destination: 'MZL',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '9008',
    },
  },
  {
    origin: 'CTG',
    destination: 'MDE',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '9009',
    },
  },
  {
    origin: 'CTG',
    destination: 'BOG',
    price: 200,
    transport: {
      flightCarrier: 'CO',
      flightNumber: '9010',
    },
  },
];

export const testFlightsApi: FlightApiResponse[] = [
  {
    departureStation: 'MZL',
    arrivalStation: 'MDE',
    flightCarrier: 'CO',
    flightNumber: '8001',
    price: 200,
  },
  {
    departureStation: 'MZL',
    arrivalStation: 'CTG',
    flightCarrier: 'CO',
    flightNumber: '8002',
    price: 200,
  },
  {
    departureStation: 'PEI',
    arrivalStation: 'BOG',
    flightCarrier: 'CO',
    flightNumber: '8003',
    price: 200,
  },
  {
    departureStation: 'MDE',
    arrivalStation: 'BCN',
    flightCarrier: 'CO',
    flightNumber: '8004',
    price: 500,
  },
  {
    departureStation: 'CTG',
    arrivalStation: 'CAN',
    flightCarrier: 'CO',
    flightNumber: '8005',
    price: 300,
  },
  {
    departureStation: 'BOG',
    arrivalStation: 'MAD',
    flightCarrier: 'CO',
    flightNumber: '8006',
    price: 500,
  },
  {
    departureStation: 'BOG',
    arrivalStation: 'MEX',
    flightCarrier: 'CO',
    flightNumber: '8007',
    price: 300,
  },
  {
    departureStation: 'MZL',
    arrivalStation: 'PEI',
    flightCarrier: 'CO',
    flightNumber: '8008',
    price: 200,
  },
  {
    departureStation: 'MDE',
    arrivalStation: 'CTG',
    flightCarrier: 'CO',
    flightNumber: '8009',
    price: 200,
  },
  {
    departureStation: 'BOG',
    arrivalStation: 'CTG',
    flightCarrier: 'CO',
    flightNumber: '8010',
    price: 200,
  },
  {
    departureStation: 'MDE',
    arrivalStation: 'MZL',
    flightCarrier: 'CO',
    flightNumber: '9001',
    price: 200,
  },
  {
    departureStation: 'CTG',
    arrivalStation: 'MZL',
    flightCarrier: 'CO',
    flightNumber: '9002',
    price: 200,
  },
  {
    departureStation: 'BOG',
    arrivalStation: 'PEI',
    flightCarrier: 'CO',
    flightNumber: '9003',
    price: 200,
  },
  {
    departureStation: 'BCN',
    arrivalStation: 'MDE',
    flightCarrier: 'ES',
    flightNumber: '9004',
    price: 500,
  },
  {
    departureStation: 'CAN',
    arrivalStation: 'CTG',
    flightCarrier: 'MX',
    flightNumber: '9005',
    price: 300,
  },
  {
    departureStation: 'MAD',
    arrivalStation: 'BOG',
    flightCarrier: 'ES',
    flightNumber: '9006',
    price: 500,
  },
  {
    departureStation: 'MEX',
    arrivalStation: 'BOG',
    flightCarrier: 'MX',
    flightNumber: '9007',
    price: 300,
  },
  {
    departureStation: 'PEI',
    arrivalStation: 'MZL',
    flightCarrier: 'CO',
    flightNumber: '9008',
    price: 200,
  },
  {
    departureStation: 'CTG',
    arrivalStation: 'MDE',
    flightCarrier: 'CO',
    flightNumber: '9009',
    price: 200,
  },
  {
    departureStation: 'CTG',
    arrivalStation: 'BOG',
    flightCarrier: 'CO',
    flightNumber: '9010',
    price: 200,
  },
];
