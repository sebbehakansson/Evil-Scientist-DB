const updateEvilScientistCards = function

const evilScientists = {
  scientist: [
    {
      name: "Jesper Flood",
      age: 26,
      amountOfHenchman: 22,
      description: "Maskin som är maskin helt enkelt",
    },
    {
      name: "Test",
      age: 1,
      amountOfHenchman: 1,
      description: "Test person",
    },
  ],

  addScientist: function ({ name, age, amountOfHenchman, description }) {
    return this.scientist.push({
      name: name,
      age: age,
      amountOfHenchman: amountOfHenchman,
      description: description,
    });
  },
};
