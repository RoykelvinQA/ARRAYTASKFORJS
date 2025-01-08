// sort an array of strings in alphabetical order

function sortStringsAlphabeticallyCaseInsensitive(arr) {
    return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  }
  
 
  const mixedCaseArray = ["Banana", "apple", "Cherry", "date", "Fig", "grape"];
  const sortedMixedCaseArray = sortStringsAlphabeticallyCaseInsensitive(mixedCaseArray);
  
  console.log("Original Array:", mixedCaseArray);
  console.log("Case-Insensitive Sorted Array:", sortedMixedCaseArray);
  