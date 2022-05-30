//Tower of Hanoi
//Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.


function towerOfHanoi(discs){
    var steps = 0;
    if(discs === 1){
        return steps;
    }
    else{
        steps += 2 * towerOfHanoi(discs - 1);
        steps += 1;
        return steps;
    }
}


console.log(towerOfHanoi(3));
