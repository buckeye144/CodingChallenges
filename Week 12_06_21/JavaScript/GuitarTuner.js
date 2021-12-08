function tune(initArr) {
    let finArr = [329.63, 246.94, 196, 146.83, 110, 82.41];
    for (let i = 0; i < initArr.length; i++) {
        let percentOff = Math.round (100 - ((initArr[i]/finArr[i])*100));
        console.log(percentOff);
        
        if (initArr[i] == 0) {
            finArr[i] = '-';
        }
        
        else if ((percentOff < 1) && (percentOff > -1)) {
            finArr[i] = "OK";
        }

        else if ((percentOff >= 1) && (percentOff < 3)) {
            finArr[i] = ">•";
        }

        else if (percentOff >= 3) {
            finArr[i] = ">>•";
        }

        else if ((percentOff <= -1) && (percentOff > -3)) {
            finArr[i] = "•<";
        }

        else if (percentOff <= -3) {
            finArr[i] = "•<<";
        }
    }

    return finArr;
}

console.log(tune([0, 246.94, 0, 0, 0, 80]));
console.log(tune([329, 246, 195, 146, 111, 82]));
console.log(tune([329.63, 246.94, 196, 146.83, 110, 82.41]));