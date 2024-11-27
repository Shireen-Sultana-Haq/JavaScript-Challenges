function moonOrbits(numOfEarthDays) {
    let orbits = numOfEarthDays / 27; 
    orbits = orbits.toFixed(3);
    return (orbits);
}
console.log(moonOrbits(365));
console.log(moonOrbits(54));


function moonOrbits(days) {
    if (days % 27 === 0) {
        return days / 27;
    } else {
        let orbits = days / 27.322;
        return orbits.toFixed(3);
    }
}

console.log(moonorbits)



        //Basketball points
function basketball(twoPointers, threePointers) {
    return 2 * twoPointers + 3 * threePointers;
}
