class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} mede some noise!`)
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    speak() {
        console.log(`${this.name} latiu!`)
    }
}
const animal = new Animal ('Simba')
const dog = new Dog('Lok')
animal.speak()
dog.speak()