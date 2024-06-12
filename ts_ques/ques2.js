"use strict";
function findViaPoints(trips, shipment) {
    const viaPoints = new Set();
    for (const trip of trips) {
        for (const pickup of trip.pickup) {
            if (!shipment.pickups.includes(pickup) && !shipment.dropoffs.includes(pickup)) {
                viaPoints.add(pickup);
            }
        }
        for (const dropoff of trip.dropoff) {
            if (!shipment.pickups.includes(dropoff) && !shipment.dropoffs.includes(dropoff)) {
                viaPoints.add(dropoff);
            }
        }
    }
    return Array.from(viaPoints);
}
function isValidTrips(trips, shipment) {
    const viaPoints = findViaPoints(trips, shipment);
    if (viaPoints.length !== 1) {
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
        if (!allPickups.includes(trip.pickup[0]) || !allDropoffs.includes(trip.dropoff[0])) {
            return false; // trip must start with a pickup or via point and end with a dropoff or via point
        }
    }
    return true;
}
// Example usage
const shipment = {
    pickups: ['A', 'B'],
    dropoffs: ['C', 'D']
};
const validTrips = [
    { pickup: ['A'], dropoff: ['W'] },
    { pickup: ['B'], dropoff: ['W'] },
    { pickup: ['W'], dropoff: ['C'] },
    { pickup: ['W'], dropoff: ['D'] }
];
const invalidTrips = [
    { pickup: ['A'], dropoff: ['W1'] },
    { pickup: ['B'], dropoff: ['W2'] },
    { pickup: ['W3'], dropoff: ['C'] },
    { pickup: ['W4'], dropoff: ['D'] }
];
console.log(isValidTrips(validTrips, shipment)); // true
console.log(isValidTrips(invalidTrips, shipment)); // false
