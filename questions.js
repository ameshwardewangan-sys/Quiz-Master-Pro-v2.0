/* ==========================================================
   Quiz Master Pro v2.0
   questions.js
   Part 1
========================================================== */

const QUESTIONS = [

/* ==========================
   GENERAL
========================== */

{
    category:"general",
    question:"What is the capital of India?",
    options:[
        "Mumbai",
        "New Delhi",
        "Kolkata",
        "Chennai"
    ],
    answer:1
},

{
    category:"general",
    question:"How many days are there in a leap year?",
    options:[
        "364",
        "365",
        "366",
        "367"
    ],
    answer:2
},

{
    category:"general",
    question:"Which planet is known as the Red Planet?",
    options:[
        "Earth",
        "Mars",
        "Venus",
        "Saturn"
    ],
    answer:1
},

{
    category:"general",
    question:"Who wrote 'Romeo and Juliet'?",
    options:[
        "William Shakespeare",
        "Charles Dickens",
        "Leo Tolstoy",
        "Mark Twain"
    ],
    answer:0
},

{
    category:"general",
    question:"Which is the largest ocean on Earth?",
    options:[
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean"
    ],
    answer:2
},

{
    category:"general",
    question:"How many continents are there?",
    options:[
        "5",
        "6",
        "7",
        "8"
    ],
    answer:2
},

{
    category:"general",
    question:"Which gas do humans breathe in?",
    options:[
        "Carbon Dioxide",
        "Nitrogen",
        "Oxygen",
        "Helium"
    ],
    answer:2
},

{
    category:"general",
    question:"Which animal is called the King of the Jungle?",
    options:[
        "Tiger",
        "Lion",
        "Elephant",
        "Leopard"
    ],
    answer:1
},

{
    category:"general",
    question:"Which festival is known as the Festival of Lights?",
    options:[
        "Holi",
        "Diwali",
        "Christmas",
        "Eid"
    ],
    answer:1
},

{
    category:"general",
    question:"Which is the national bird of India?",
    options:[
        "Peacock",
        "Crow",
        "Sparrow",
        "Parrot"
    ],
    answer:0
},

/* ==========================
   SCIENCE
========================== */

{
    category:"science",
    question:"What is H₂O commonly known as?",
    options:[
        "Salt",
        "Water",
        "Hydrogen",
        "Oxygen"
    ],
    answer:1
},

{
    category:"science",
    question:"Which planet has the most moons?",
    options:[
        "Mars",
        "Saturn",
        "Earth",
        "Venus"
    ],
    answer:1
},

{
    category:"science",
    question:"What is the chemical symbol of Gold?",
    options:[
        "Ag",
        "Au",
        "Go",
        "Gd"
    ],
    answer:1
},

{
    category:"science",
    question:"Which organ pumps blood?",
    options:[
        "Liver",
        "Heart",
        "Brain",
        "Kidney"
    ],
    answer:1
},

{
    category:"science",
    question:"Plants prepare food by?",
    options:[
        "Respiration",
        "Photosynthesis",
        "Digestion",
        "Fermentation"
    ],
    answer:1
},
  /* ==========================
   MATHEMATICS
========================== */

{
    category:"math",
    question:"What is 12 × 8?",
    options:[
        "84",
        "96",
        "108",
        "92"
    ],
    answer:1
},

{
    category:"math",
    question:"Square root of 144?",
    options:[
        "10",
        "11",
        "12",
        "14"
    ],
    answer:2
},

{
    category:"math",
    question:"What is 25 + 75?",
    options:[
        "90",
        "95",
        "100",
        "105"
    ],
    answer:2
},

{
    category:"math",
    question:"50 ÷ 5 = ?",
    options:[
        "8",
        "10",
        "15",
        "12"
    ],
    answer:1
},

{
    category:"math",
    question:"What is the value of π (approximately)?",
    options:[
        "2.14",
        "3.14",
        "4.13",
        "3.41"
    ],
    answer:1
},

/* ==========================
   HISTORY
========================== */

{
    category:"history",
    question:"Who was the first President of India?",
    options:[
        "Jawaharlal Nehru",
        "Dr. Rajendra Prasad",
        "Sardar Patel",
        "A. P. J. Abdul Kalam"
    ],
    answer:1
},

{
    category:"history",
    question:"In which year did India become independent?",
    options:[
        "1945",
        "1946",
        "1947",
        "1950"
    ],
    answer:2
},

{
    category:"history",
    question:"Who built the Taj Mahal?",
    options:[
        "Akbar",
        "Babur",
        "Shah Jahan",
        "Aurangzeb"
    ],
    answer:2
},

{
    category:"history",
    question:"Who discovered America?",
    options:[
        "Marco Polo",
        "Christopher Columbus",
        "James Cook",
        "Magellan"
    ],
    answer:1
},

{
    category:"history",
    question:"Which empire was ruled by Ashoka?",
    options:[
        "Gupta Empire",
        "Maurya Empire",
        "Mughal Empire",
        "Chola Empire"
    ],
    answer:1
},

/* ==========================
   GEOGRAPHY
========================== */

{
    category:"geography",
    question:"Which is the largest continent?",
    options:[
        "Europe",
        "Asia",
        "Africa",
        "Australia"
    ],
    answer:1
},

{
    category:"geography",
    question:"Mount Everest lies in?",
    options:[
        "India",
        "Nepal",
        "China",
        "Bhutan"
    ],
    answer:1
},

{
    category:"geography",
    question:"Which river is the longest in the world?",
    options:[
        "Amazon",
        "Nile",
        "Ganga",
        "Yangtze"
    ],
    answer:1
},

{
    category:"geography",
    question:"Which desert is the largest hot desert?",
    options:[
        "Gobi",
        "Kalahari",
        "Sahara",
        "Thar"
    ],
    answer:2
},

{
    category:"geography",
    question:"Which country has the largest population?",
    options:[
        "India",
        "China",
        "USA",
        "Russia"
    ],
    answer:0
},
  /* ==========================
   TECHNOLOGY
========================== */

{
    category:"technology",
    question:"CPU stands for?",
    options:[
        "Central Processing Unit",
        "Computer Primary Unit",
        "Central Power Unit",
        "Control Processing Utility"
    ],
    answer:0
},

{
    category:"technology",
    question:"Which company developed Android?",
    options:[
        "Apple",
        "Google",
        "Microsoft",
        "Samsung"
    ],
    answer:1
},

{
    category:"technology",
    question:"HTML is used to create?",
    options:[
        "Web Pages",
        "Games Only",
        "Operating System",
        "Database"
    ],
    answer:0
},

{
    category:"technology",
    question:"Which one is a programming language?",
    options:[
        "Python",
        "Photoshop",
        "Chrome",
        "Excel"
    ],
    answer:0
},

{
    category:"technology",
    question:"RAM is a type of?",
    options:[
        "Storage Device",
        "Memory",
        "Processor",
        "Monitor"
    ],
    answer:1
},

/* ==========================
   SPORTS
========================== */

{
    category:"sports",
    question:"How many players are there in a football team on the field?",
    options:[
        "9",
        "10",
        "11",
        "12"
    ],
    answer:2
},

{
    category:"sports",
    question:"Which country hosted the Cricket World Cup 2023?",
    options:[
        "Australia",
        "England",
        "India",
        "South Africa"
    ],
    answer:2
},

{
    category:"sports",
    question:"How many rings are there in the Olympic symbol?",
    options:[
        "4",
        "5",
        "6",
        "7"
    ],
    answer:1
},

{
    category:"sports",
    question:"Which sport uses a shuttlecock?",
    options:[
        "Tennis",
        "Badminton",
        "Table Tennis",
        "Squash"
    ],
    answer:1
},

{
    category:"sports",
    question:"Who is known as the 'God of Cricket'?",
    options:[
        "Virat Kohli",
        "M. S. Dhoni",
        "Sachin Tendulkar",
        "Rohit Sharma"
    ],
    answer:2
}

];
