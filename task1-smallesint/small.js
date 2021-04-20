// using bult-in functions
let args1 = [16, 12, 56, 23, 9];
function findSmallesInt(args1) {
    return Math.min(...args1);
}

console.log(Math.min(...args1));

// without using built-in functions
let args = [16, 14, 78, 5, 15];
    let currentMin = args[0];
        for(i=1; i < args.length; i++) {
            if(args[i] < currentMin) {
                currentMin = args[i];
            }
        }
console.log(currentMin);