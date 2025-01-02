// const myObject = {
//     name : "house",
//     color : "white",
//     price : "1000000",
//     landmark :"2500ft"
// }
// // console.log(myObject["price"])
// console.log(myObject.name)

// const books = {
//     title: "The Book of Wealth",
//     description: "How to make 100millions in 10days.",
//     numberOfPages: 250,
//     author: "Michael Forsa",
//     reading: true
//   };
  
//   console.log(books);



// const books = {
//     title: "The Book of Wealth",
//     description: "How to make 100millions in 10days.",
//     numberOfPages: 250,
//     author: "Michael Forsa",
//     reading: true,
  
    
//     toggleReadingStatus: function() {
//       this.reading = !this.reading; 
//       console.log(`Reading status: ${this.reading}`); 
//     }
//   };


const books = [
    {
      title: "The Book of Wealth",
      description: "How to make 100millions in 10days.",
      numberOfPages: 250,
      author: "Michael Forsa",
      reading: true
    },
    {
      title: "Ogbori Elemonso",
      description: "Story of a great warrior that fought a demon",
      numberOfPages: 300,
      author: "Lere Paimon",
      reading: false
    },
    {
      title: "Nine Eleven",
      description: "How Osama Bin Laden Terrorised America",
      numberOfPages: 500,
      author: "Chris Lambert",
      reading: true
    }
  ];
  
  
for (let i = 0; i < books.length; i++) {
    if (books[i].reading) {
      console.log(books[i]); 
    }
  }