const allUsers = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];


const getUsersWithFriend = (users, friendName) => 
    users
.filter(user => user.friends.includes(friendName))
.map(user => user.name);



console.log(getUsersWithFriend(allUsers, "Briana Decker")); //[
    //   {
    //     name: "Sharlene Bush",
    //     friends: ["Briana Decker", "Sharron Pace"]
    //   },
    //   {
    //     name: "Sheree Anthony",
    //     friends: ["Goldie Gentry", "Briana Decker"]
    //   }
    // ]
console.log(getUsersWithFriend(allUsers, "Goldie Gentry")); // 
console.log(getUsersWithFriend(allUsers, "Adrian Cross"));



/* const colorPickerOptions = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
    { label: "pink", color: "#E91E63" },
    { label: "indigo", color: "#3F51B5" },
];

  console.log(colorPickerOptions.find((option) => option.label === "blue")); // { label: "blue", color: "#2196F3" }
  console.log(colorPickerOptions.find((option) => option.label === "pink")); // { label: "pink", color: "#E91E63" }
  console.log(colorPickerOptions.find((option) => option.label === "white")); // undefined */


/* 
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  ];
  const BOOK_TITLE = "The Dream of a Ridiculous Man";
  const AUTHOR = "Robert Sheckley";
  
  const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
  const bookByAuthor = books.find((book) => book.author === AUTHOR); */
  