// print a table containing mutiplication tables


function createMultiplicationTable(max) {
    let table = '';
  
       table += '   ';
    for (let i = 1; i <= max; i++) {
      table += String(i).padStart(4);
    }
    table += '\n';
  
        for (let i = 1; i <= max; i++) {
      table += String(i).padStart(3); // 
      for (let j = 1; j <= max; j++) {
        table += String(i * j).padStart(4); 
      }
      table += '\n';
    }
      return table;
  }      const maxNumber = 12;
  
  console.log(createMultiplicationTable(maxNumber));
  