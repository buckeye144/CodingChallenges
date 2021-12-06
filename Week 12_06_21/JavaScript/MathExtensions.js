function avg(arr, p = 0) {
    let avgVal = 0;
    for (let i = 0; i < arr.length; i++) {
        avgVal += arr[i];
    }
    
    return ((avgVal/arr.length).toFixed(p)); 
}

function qAvg(arr, p = 0) {
    let avgVal = 0;
    for (let i = 0; i < arr.length; i++) {
        avgVal += (arr[i] * arr[i]);
    }

    return (Math.sqrt(avgVal/arr.length).toFixed(p));
}

function hAvg(arr, p = 0) {
    let avgVal = 0;
    for (let i = 0; i < arr.length; i++) {
        avgVal += (1/arr[i]);
    }

    return ((1/(avgVal/arr.length)).toFixed(p));
}

function gAvg(arr, p = 0) {
    let avgVal = 1;
    for (let i = 0; i < arr.length; i++) {
        avgVal *= arr[i];
    }

    return (Math.pow(avgVal, 1/arr.length).toFixed(p));
}

console.log(avg([3,5,7]));
console.log(qAvg([3,5,7], 1));
console.log(hAvg([3,5,7], 1));
console.log(gAvg([3,5,7], 1));