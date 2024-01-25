const teams = [
    {
      name: 'Team Turtle',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Frog',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Penguin',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Hippopotamus',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Seal',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Crocodile',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Dolphin',
      score: 0,
      foul: 0,
    },
];

function randomNumber(min, max){
    let myNums = Math.floor(Math.random() * (max - min + 1) ) + min;
    return myNums
};

teams.forEach(team => {
    team.score = randomNumber(1, 5);
    team.foul = randomNumber(1, 3);
})

console.log(teams)


const teamsFoul = teams.map(({name, foul}) => ({name, foul}));

console.log(teamsFoul);