console.log('JS OK');

/* 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età. */

const studentDescrp = {
    name: 'Gianluca',
    surname: 'Ingrao',
    age: '24'
};
for (let key in studentDescrp) {
    console.log(studentDescrp[key]);
};

const studentList = [
    { name: 'Mattia', surname: 'Stievano', age: '25' },
    { name: 'Filippo', surname: 'Di Bella', age: '24' },
    { name: 'Andrea', surname: 'Antonelli', age: '45' },
]
for (let i = 0; i < studentList.length; i++) {
    const currentStudent = studentList[i];
    console.log(currentStudent)

    for (let j = 0; j < currentStudent.length; j++) {
        const students = currentStudent.studentList[j];
        for (let key in students) {
            console.log(`${students[key]} `)
        }
    }
}
