// create a function that filters out negative numbers

function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
  }
  
  console.log(filterNegativeNumbers([10, -50, 4, -8, 20, 15, -77, 20]));  
  