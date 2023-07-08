import { Injectable } from '@angular/core';
import { FlightStoreModule } from '../flight-store.module';
import { Flight } from '../../types/flight';
import { Journey } from '../../types/journey';

@Injectable({
  providedIn: FlightStoreModule,
})
export class DijkstraService {
  calculateJourney(
    graph: Flight[],
    origin: string,
    destination: string
  ): Journey | null {
    const distances: { [vertex: string]: number } = {};
    const previous: { [vertex: string]: Flight | null } = {};
    const queue: string[] = [];

    distances[origin] = 0;

    for (const edge of graph) {
      if (edge.origin === origin) {
        distances[edge.destination] = edge.price;
        previous[edge.destination] = edge;
        queue.push(edge.destination);
      } else if (distances[edge.destination] === undefined) {
        distances[edge.destination] = Infinity;
        previous[edge.destination] = null;
      }
    }

    while (queue.length > 0) {
      queue.sort((a, b) => distances[a] - distances[b]);

      // Since while condition is always true at this point,
      // we can assume that shift() methos will return a string
      const current = queue.shift() + '';

      if (current === destination) {
        const path: Flight[] = [];
        let edge = previous[current];
        while (edge) {
          path.unshift(edge);
          edge = previous[edge.origin];
        }
        return {
          price: distances[current],
          flights: path,
          origin,
          destination,
        };
      }

      if (distances[current] === Infinity) {
        break;
      }

      for (const edge of graph) {
        if (edge.origin === current) {
          const distance = distances[current] + edge.price;
          if (distance < distances[edge.destination]) {
            distances[edge.destination] = distance;
            previous[edge.destination] = edge;
            queue.push(edge.destination);
          }
        }
      }
    }

    return null;
  }
}
