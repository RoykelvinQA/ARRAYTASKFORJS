// return the number of vowels in a string

function countVowels(str) {
   
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }
  
  console.log(countVowels("irvingia gabonensis"));    
  
  