const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  const iter = (acc) => {
    if (acc > num) {
      return num;
    }
    else if (num % acc === 0) {
      return acc;
    }
    else {
     return iter(acc + 1)
   };
 };
 return iter(2);
  // END
};
console.log(smallestDivisor(10));