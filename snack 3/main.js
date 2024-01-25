const bikes = [
    {
        nome: 'Trek',
        peso: 9,
    },
    {
        nome: 'Giant',
        peso: 8,
    },
    {
        nome: 'Cannondale',
        peso: 7,
    },
    {
        nome: 'Merida',
        peso: 9,
    },
    {
        nome: 'Cube',
        peso: 6,
    },
];

let bikeLessWeight = bikes[0];

bikes.forEach((bike) => {
    if(bike.peso < bikeLessWeight.peso){
        bikeLessWeight = bike;
    }
});

const {nome, peso} = bikeLessWeight;

console.log(`la bici con minor peso è la ${nome} che pesa ${peso} kg`)