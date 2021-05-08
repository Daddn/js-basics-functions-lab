const address = 42;
let price = 0;
function distanceFromHqInBlocks(block){
    let distance = block - address;
    if (distance < 0 ) {
        distance = distance * -1;
    }
    return distance;
}

function distanceFromHqInFeet(block){
    let distance = (block - address)*264;
    if (distance < 0 ) {
        distance = distance * -1;
    }
    return distance;
}

function distanceTravelledInFeet(block1, block2){
    let distance = (block1 - block2)*264;
    if (distance < 0 ) {
        distance = distance * -1;
    }
    return distance;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0;
    }else if (distance > 400 && distance <= 2000){
        return (distance - 400) * .02;
    }else if (distance > 2000 && distance < 2500){
        return 25;
    }else 
    return 'cannot travel that far'
}