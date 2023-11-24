const todos = [
    {
        id: 1,
        description: 'Estudar',
        isComppleted: false,
    },
    {
        id: 2,
        description: 'Ler',
        isComppleted: true,  
    },
    {
        id: 3,
        description: 'Malhar',
        isComppleted: true,  
    },
]

const todosJSON = JSON.stringify(todos)
const todosList = JSON.parse(todosJSON)
console.log(todosList)