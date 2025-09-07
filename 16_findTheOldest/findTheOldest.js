// const findTheOldest = function(people) {
//     const peopleAges = people.map(person => {
//         if (!person.yearOfDeath) {
//             person.yearOfDeath = new Date().getFullYear()
//         }
//         person['age'] = person.yearOfDeath - person.yearOfBirth
//         return person
//     })

//     peopleAges.sort((p1, p2) => p2.age - p1.age)

//     return peopleAges[0]
// };

//optimized solution
function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth
}

const findTheOldest = function(people) {
    return people.reduce((oldPerson, currentPerson) => {
        const oldPersonAge = getAge(oldPerson.yearOfBirth, oldPerson.yearOfDeath)
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)

        return currentPersonAge > oldPersonAge ? currentPerson : oldPerson
    })
}

// Do not edit below this line
module.exports = findTheOldest;
