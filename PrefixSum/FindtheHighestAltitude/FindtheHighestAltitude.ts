function largestAltitude(gain: number[]): number {
    let altitude = 0,
        max = 0;
    for (let i = 0; i < gain.length; i++) {
        altitude += gain[i];
        max = Math.max(altitude, max);
    }

    return max;
}
