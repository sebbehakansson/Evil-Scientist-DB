// const updateEvilScientistCards = function

type Scientist = {
  name: string;
  age: number;
  amountOfHenchman: number;
  description: string;
};

const evilScientists: Scientist[] = [
  {
    name: "Jesper",
    age: 26,
    amountOfHenchman: 22,
    description: "Maskin som är maskin helt enkelt",
  },
];

function addScientist(
  name: string,
  age: number,
  amountOfHenchman: number,
  description: string
): Scientist {
  const Scientist: Scientist = {
    name: name,
    age: age,
    amountOfHenchman: amountOfHenchman,
    description: description,
  };
  return Scientist;
}

evilScientists.push(
  addScientist("Jesper", 26, 22, "Maskin som är maskin helt enkelt")
);

console.log(evilScientists);

console.log("Hej");

// const evilScientists = {
//   scientists: [
//     {
//       name: "Jesper Flood",
//       age: 26,
//       amountOfHenchman: 22,
//       description: "Maskin som är maskin helt enkelt",
//     },
//     {
//       name: "Test",
//       age: 1,
//       amountOfHenchman: 1,
//       description: "Test person",
//     },
//   ],

//   addScientist: function ({ name, age, amountOfHenchman, description }) {
//     return this.scientists.push({
//       name: name,
//       age: age,
//       amountOfHenchman: amountOfHenchman,
//       description: description,
//     });
//   },
// };
