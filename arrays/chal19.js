//A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// boomerang examples:[3, 7, 3], [1, -1, 1], [5, 6, 5]
//Create a function that returns the total number of boomerangs in an array.

function boomerang(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                continue;
            }
            if(arr[i] === arr[j] + 1 || arr[i] === arr[j] - 1){
                count++;
            }
        }
    }
    return count;
}