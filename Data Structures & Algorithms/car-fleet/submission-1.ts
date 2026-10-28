class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let cars: [number, number][] = [];
        for (let i = 0; i < position.length; i++) {
            cars[i] = [position[i], speed[i]];
        }
        const sortedCars = cars.sort(([posA,], [posB,]) => posB - posA);
        const times = sortedCars.map(([pos, speed]) => (target - pos) / speed);
        let maxTime = 0;
        let fleetSize = 0;
        for (let time of times) {
            if (time > maxTime) {
                maxTime = time;
                fleetSize++;
            }
        }
        return fleetSize;
    }
}
