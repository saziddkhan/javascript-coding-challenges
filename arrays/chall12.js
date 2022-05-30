//Write a function that takes a number and returns the perimeter of either a circle or a square.

function perimeter(num) {
  return num * 4;
}


//or

function perimeter(l,num){
	return (4*(l=='s')+6.28*(l=='c'))*num
}