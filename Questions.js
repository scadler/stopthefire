let data = 
[ { question: "How many types of wildfires are there?",
    answer: "2",
    options: ["2","3","4","1"]
    },

  { question: "What purposely causes fires?",
    answer: "humans",
    options: ["humans","animals","weather","insects"]
  },
   { question: "At what temperature do wilfires burn?",
    answer: "1,472F",
    options: ["1,472F","1,682F","1,936F","2,125F"]
},
   { question: "What's the purpose of a prescribed fire?",
    answer: "restore ecosystem health and recycle nutrients",
    options: ["restore ecosystem health and recycle nutrients","to burn all the trees down","help animals improve their environment","create a better forest"]
},
  { question: "How do wildfires affect the soil?",
    answer: "They can burn the nutrients in the soil",
    options: ["They can burn the nutrients in the soil","the soil will disappear","it can help plants grow faster","it can harm humans"]
  },
  { question: "Will it harm the forest if the largest dead trees are removed?",
    answer: "Yes may impact the wildlife and affect how the forest recovers",
    options: ["Yes may impact the wildlife and affect how the forest recovers","No, they're just taking up space","Yes, it can affect the air","No, they're not as useful anymore since they're dead"]
},
{  question: "How many wildfires occured in Calilforia in 2019?",
    answer: "7,860",
    options: ["7,860", "10,568","4,589","8,129"]
},
{
    question: "What causes wildfires naturally?",
    answer: "lightning",
    options: ["lightning","fog","hail","nothing"]
},
{
 question: "How can you survive an oncoming wildfire?",
    answer: "jump in a lake or river",
    options: ["jump in a lake or river","wait until it clears out","stay and burn","rub your burning body against a wall"]
},
{
    question: "What percentage of forest fires are caused by humans?",
    answer: "85%",
    options: ["85%","87%","90%","78%"],
},  
];
function randomNumbers() {
    return Math.floor(Math.random()*(data.length-1));
}
console.log (randomNumbers())
data[9]
console.log (data[randomNumbers()])