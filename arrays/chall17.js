//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appea



arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
function sevenBoom(arr) {

    var new_arr= arr.join('')
	if(new_arr.includes(7)){
		return "Boom!";
	}else{
		return "there is no 7 in the array";
        
	}

    
}
console.log(sevenBoom(arr));



