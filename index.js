const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function funct(accumulator, element) {
    return (element + accumulator)
}


const totalBatteries = batteryBatches.reduce(funct, 0);

console.log(totalBatteries)