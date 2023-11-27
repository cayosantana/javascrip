class Person {
    constructor(fristName, lastName, age) {
        this.fristName = fristName
        this.lastName = lastName
        this.age = age
    }
    getFullName() {
        console.log(`${this.fristName} ${this.lastName}`)
    }
    static speak() {
        console.log("Olá, Meu nome completo é:")
    }
}
const person = new Person ('Cayo', 'Souza', 33)
Person.speak()
person.getFullName()
