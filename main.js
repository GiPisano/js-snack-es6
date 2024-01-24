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

for(let vip of vips){

    const guest = {
        tavolo: 'tavolo vip',
        ospite: vip,
        posto: index + 1,
    }

  return guest;
}
})
console.log(arrayObj);


// Snack 2

// const students = [
//     {
//         id: 213,
//         name: 'Marco della Rovere',
//         grades: 78,
//     },
//     {
//         id: 110,
//         name: 'Paola Cortellessa',
//         grades: 96,
//     },
//     {
//         id: 250,
//         name: 'Andrea Mantegna',
//         grades: 48,
//     },
//     {
//         id: 145,
//         name: 'Gaia Borromini',
//         grades: 74,
//     },
//     {
//         id: 196,
//         name: 'Luigi Grimaldello',
//         grades: 68,
//     },
//     {
//         id: 102,
//         name: 'Piero della Francesca',
//         grades: 50,
//     },
//     {
//         id: 120,
//         name: 'Francesca da Polenta',
//         grades: 84,
//     }
// ]


// let nameStudents = [];

// for(let student of students){
//     console.log(student.name)
// }


