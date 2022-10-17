export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function subtract(numbers){
  let sum = 0;

  for (const number of numbers) {
    sum -= +number;
  }
  return sum;
}

export function testThrown (){
  throw new Error('Something went wrong')
}
