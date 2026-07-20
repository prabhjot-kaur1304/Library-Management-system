import atomicHabits from "../assets/books/atomic-habits.jpg";
import cleanCode from "../assets/books/clean-code.jpg";
import deepWork from "../assets/books/deep-work.jpg";
import pragmaticProgrammer from "../assets/books/pragmatic-programmer.jpg";

const books=[
    {
        id:1,
        title:"Atomic Habits",
        author:"James Clear",
        category: "Self Improvement",
        status: "Available",
        progress: 72,
        image: atomicHabits,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    status: "Issued",
    progress: 48,
    image:cleanCode,
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    status: "Available",
    progress: 90,
    image:deepWork,
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Programming",
    status: "Available",
    progress: 63,
    image:pragmaticProgrammer,
  },
];

export default books;

