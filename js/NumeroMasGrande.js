function largestOfFour(arr) {

    let largestArr = [];
    const sortNum = (a, b) => b - a;
    for (let i = 0; i < arr.length; i++) {
            largestArr.push(arr[i].sort(sortNum)[0]);
        }
    return largestArr;
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


    var array = [267, 306, 108];
    var largest = Math.max.apply(Math, array); 