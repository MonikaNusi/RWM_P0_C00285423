/*perstistance - the number of steps it takes to reduce it to a single digit by repeatedly multplying its digits*/

export function persistence(n: number): number {
  let count = 0;
  let value = n;
// repeat while number has more then one digit
while (value >= 10){
   value = value
    .toString() //conver number to string
    .split('') //split into digits
    .map(Number) //conver each digit back to number
    .reduce((acc, d)=> acc * d, 1) //multiply all digits togerther
   count ++;

}
return count;
}

//map over a sequence of numbers
export function persistances(nums: number[]): number[]{
    return nums.map(persistence);
}