// Snack 2
const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96,
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50,
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84,
    }
]

const studentNames = students.map((student) => student.name.toUpperCase())
console.log('nomi studenti', studentNames)


const studentGrades = students.filter((student) => student.grades > 70)
console.log("studenti che hanno un totale di voti superiore a 70", studentGrades);


const studentId = students.filter((student) => student.grades > 70 && student.id > 120)
console.log("studenti che hanno un totale di voti superiore a 70 e id superiore a 120", studentId);

