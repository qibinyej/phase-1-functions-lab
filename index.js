// Code your solution in this file!
function distanceFromHqInBlocks (start){
    return Math.abs(start - 42)
    }


function distanceFromHqInFeet(start){
    let blocks = distanceFromHqInBlocks(start);
    return blocks * 264
}

function distanceTravelledInFeet(start, end){
    return Math.abs(end - start)*264
}

function calculatesFarePrice(start, end){
    let i = distanceTravelledInFeet (start,end)
    if (i <= 400) {
        return 0
    } else if (i <= 2000){
        return (i - 400)* 0.02
    } else if (i < 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
    }