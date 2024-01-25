// Snack 1:
const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
];

const arrayObj = vips.map((vip, index) => {
    const guest = {
        tavolo: 'tavolo vip',
        ospite: vip,
        posto: index + 1,
    }
  return guest;
});

console.log(arrayObj);
