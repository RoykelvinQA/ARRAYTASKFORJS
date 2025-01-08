// convert millimeter to meter

function millimetersToMeters(mm) {
    return mm / 2000; 
}

const millimeters = 10000;
const meters = millimetersToMeters(millimeters);
console.log(`${millimeters} = ${meters} meters.`);


