class Student {  // class declaration
    constructor(name) { // constructor mandatory
        this.name = name
    }
    //getter
    get getName() {
        return this.name + " is student";
    }
    // setters
    set setName(newname) {
        this.name = newname;
    }
    // fuction
    writecode() {
        return this.name + " coding...";
    }
};
const cs = new Student("ram", "cse", 2);
/* console.log(cs)
console.log(cs.getName) // getting it
cs.setName = "chomu";  //setting it
console.log(cs.getName) */

// //coping class
// const AnotherStudent = class Student {  // class declaration
//     constructor(name, branch, roll) { // constructor mandatory
//         this.name = name,
//             this.branch = branch,
//             this.roll = roll
//     }
//     //getter
//     get getName() {
//         return this.name;
//     }
//     // setters
//     set setName(newname) {
//         this.name = newname;
//     }
// };

// *** best way to EXTEND CLASS **
class Teacher extends Student {// by extending we can access all the fuctions of parent
    constructor(name) {
        super(name); // super is used to link with parent constructor
    }
    //getter
    get getName() {
        return this.name + " is teacher";
    }
}
const one = new Student("ram");
const two = new Teacher("shyam");
console.log(one.getName);
console.log(two.getName);
console.log(one.writecode())
console.log(two.writecode()) // this function is adopted due to parnet



