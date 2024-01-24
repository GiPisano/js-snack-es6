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

let posto = 1; 
let objArray = [];
for(let vip of vips){
   
    const guest = {
        tavolo: 'tavolo vip',
        ospite: `${vip}`,
        posto: `${posto++}`,
    }

    objArray.push(guest);
}

console.log(objArray);


// Snack 2



