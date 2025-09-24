export const endpointsData = [
  {
    id: "1",
    image: "/cards/chuck.jpg",
    baseUrl: "https://api.chucknorris.io",
    endpoint: "/jokes/random",
    description: "You get a toke inspired in Chuck Norris:",
    exampleData: `"dylan hallmark beat Chuck Norris up"`,
    requiresApiKey: false,
    hasParams: false,
    key:"Chuck"
  },
  {
    id: "2",
    image: "/cards/kanye.jpg",
    baseUrl: " https://api.kanye.rest/",
    endpoint: "",
    description: "You get a random quote from rap singer Kanye West : ",
    exampleData: `"Artists are founders"`,
    requiresApiKey: false,
    hasParams: false,
    key:"Kanye"
  },

   {
  id: "15",
  image: "/cards/advice.jpg", 
  baseUrl: "https://api.adviceslip.com",
  endpoint: "/advice",
  description: "Get an english random general purpose advice. Good vives and funny : ",
  exampleData: `"If you don't want something to be public, don't post it on the Internet."`,
  requiresApiKey: false,
  hasParams: false,
  key: "Advice"
},

 {
  id: "16",
  image: "/cards/cat.jpg", 
  baseUrl:  "https://catfact.ninja/fact",
  endpoint: "",
  description: "Get a random and curios fact about cats : ",
  exampleData: `"A cat has more bones than a human; humans have 206, and the cat - 230."`,
  requiresApiKey: false,
  hasParams: false,
  key: "Cats"
},


  {
    id: "3",
    image: "/cards/numbers.jpg",
    baseUrl: " http://numbersapi.com/random/trivia",
    endpoint: "",
    description: "You get a random curios fact about numbers!:",
    exampleData: `"360000 is the number of words definitions in the New Oxford Dictionary of English."`,
    requiresApiKey: false,
    hasParams: false,
     key:"Numbers"
  },
 
];
