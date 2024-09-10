// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const bookTitles = books.map(book => book.title);
  console.log("Book Titles:", bookTitles);
//Book Titles: ['Book One', 'Book Two', 'Book Three', 'Book Four', 'Book Five', 'Book Six', 'Book Seven', 'Book Eight', 'Book Nine']

  const nonFictionBooks = books.filter(book => book.genre === 'Non-Fiction');
  console.log("Non-Fiction Books:", nonFictionBooks);
  // Non-Fiction Books: [
  //   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  //   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  //   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
  // ]


   const totalYearsBetweenPublishAndEdition = books.reduce((acc, book) => {
    return acc + (book.edition - book.publish);
  }, 0);
  
  console.log("Total Years Between Publish and Edition:", totalYearsBetweenPublishAndEdition);
//Total Years Between Publish and Edition: 88

const scienceBooksCount = books
  .filter(book => book.genre === 'Science') // Filter "Science" books
  .map(book => book.title) // Map to their titles
  .reduce((count, current) => count + 1, 0); // Count the number of books

console.log("Number of Science Books:", scienceBooksCount);
//Number of Science Books: 2