const characters = [
    { name: 'John', gender: "Male", mass: 123 },
    { name: 'Johnathon', gender: "Male", mass: 134 },
    { name: 'Ken', gender: "Male", mass: 67 },
    { name: 'Jenny', gender: "Female", mass: 56 }
]

// show all the names
// characters.forEach(x => console.log(x.name))

// show all the names in array
var sol = characters.map(x => x.name);
// console.log(sol)

// show only name and gender in object form
sol = characters.map((x) => {
    return {
        name: x.name,
        mass: x.mass
    }
});
// console.log(sol);

//QUESTION : get the sum of all the mass
sol = 0;
characters.forEach(x => sol += x.mass)
// console.log(sol)
// using map --------<
sol = 0;
// console.log(characters.map(x => sol += x.mass))
// console.log(sol)

// QUESTION : CHECK WETHER EVERY ONE IS MALE?
console.log(characters.every(x => x.gender == 'male' || x.mass > 50))

// QUESTION : SORT EVERY ONE BY MASS
console.log(characters.sort((a, b) => {
    if (a.mass < b.mass) {
        return -1;
    } else if (a.mass > b.mass) {
        return 1;
    } else {
        return 0;
    }
}))
// using cp techiques XD
//console.log(characters.sort((a, b) => (a.mass > b.mass) ? -1 : a.mass < b.mass ? 1 : 0))

