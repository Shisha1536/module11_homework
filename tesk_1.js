function getNumberEvenOddNumbers(arr){
  let even = 0;
  let odd = 0;
  let zero = 0;
  arr.forEach((element) => {
      if (element === 0){
          zero++;
      } else if (typeof element === 'number' && !isNaN(element)){
         element % 2 === 0 ? even++: odd++
      }
  })
  console.log(even);
  console.log(odd);
  if (zero > 0){
      console.log(zero);
  }
};
const array = [1, 2, 3, 4, 5, null];
getNumberEvenOddNumbers(array);