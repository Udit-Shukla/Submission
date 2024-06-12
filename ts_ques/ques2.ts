// Task 2 : A multi pick up and drop shipment is to be divided into multiple trips, mention the logic to figure out of the given list of trips are legit and fulfils the shipment with typescript. (Please note:  A shipment can have multiple pick up points and drop points, and a trip can also have multiple pick up points , drop points and an additional option of a warehouse a via point.)
// Example:  
// For a shipment with Pick ups : (A, B), Drop points (C,D),
// a) Valid set of trips are :  Trip 1: (A,W), Trip 2: (B, W), Trip 3: (W,C), Trip 4: (W, D).
// b) Invalid set of trips are : Trip 1: (A,W1), Trip 2: (B, W2), Trip 3: (W3,C), Trip 4: (W4, D).


interface Trip {
  pickup: string[];
  dropoff: string[];
}

interface Shipment {
  pickups: string[];
  dropoffs: string[];
}

function findViaPoints(trips: Trip[], shipment: Shipment): string[] {
  const viaPoints: Set<string> = new Set();

  for (const trip of trips) {
    for (const pickup of trip.pickup) {
      if (!shipment.pickups.includes(pickup) &&!shipment.dropoffs.includes(pickup)) {
        viaPoints.add(pickup);
      }
    }
    for (const dropoff of trip.dropoff) {
      if (!shipment.pickups.includes(dropoff) &&!shipment.dropoffs.includes(dropoff)) {
        viaPoints.add(dropoff);
      }
    }
  }

  return Array.from(viaPoints);
}

function isValidTrips(trips: Trip[], shipment: Shipment): boolean {
  const viaPoints = findViaPoints(trips, shipment);

  if (viaPoints.length!== 1) {
    return false; // via points must be unique
  }

  const viaPoint = viaPoints[0];

  for (const trip of trips) {
    if (trip.pickup.includes(viaPoint) && trip.dropoff.includes(viaPoint)) {
      return false; // via point cannot be both pickup and dropoff
    }
  }

  const allPickups = shipment.pickups.concat(viaPoints);
  const allDropoffs = shipment.dropoffs.concat(viaPoints);

  for (const trip of trips) {
    if (!allPickups.includes(trip.pickup[0]) ||!allDropoffs.includes(trip.dropoff[0])) {
      return false; // trip must start with a pickup or via point and end with a dropoff or via point
    }
  }

  return true;
}

// Example usage
const shipment: Shipment = {
  pickups: ['A', 'B'],
  dropoffs: ['C', 'D']
};

const validTrips: Trip[] = [
  { pickup: ['A'], dropoff: ['W'] },
  { pickup: ['B'], dropoff: ['W'] },
  { pickup: ['W'], dropoff: ['C'] },
  { pickup: ['W'], dropoff: ['D'] }
];

const invalidTrips: Trip[] = [
  { pickup: ['A'], dropoff: ['W1'] },
  { pickup: ['B'], dropoff: ['W2'] },
  { pickup: ['W3'], dropoff: ['C'] },
  { pickup: ['W4'], dropoff: ['D'] }
];

console.log(isValidTrips(validTrips, shipment)); 
console.log(isValidTrips(invalidTrips, shipment)); 
