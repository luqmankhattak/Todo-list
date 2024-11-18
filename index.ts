import inquirer from "inquirer";


// Array
// operator
// function

let todos: string[] = ["Luqman", "Irfan"]

async function CreateTodos( todos: string[] ){
    do{
    let ans = await inquirer.prompt({
        type: 'list',
        name: 'select',
        message: 'Enter a new todo',
        choices: ["Add", "update", "View","Delete"]
    })

if(ans.select == "Add"){
    let Addtodo = await inquirer.prompt({
        type: 'input',
        name: 'todo',
        message: 'Enter a new todo'
    })
    todos.push(Addtodo.todo)
    console.log(todos)
}
if(ans.select == "update"){
    let Updatetodo = await inquirer.prompt({
        type: 'list',
        name: "todo",
        message: 'select item for update',
        choices: todos.map(item => item)
    })
    let AddTodo = await inquirer.prompt({
        type: 'input',
        message: 'add item...',
        name: 'todo',
        
    })
    let newtodos = todos.filter(val => val !== Updatetodo.todo) //datetodo.t //
    todos = [...newtodos, AddTodo.todo]
    console.log(todos)
}
if(ans.select == "View"){
    console.log(todos)
}
if(ans.select == "Delete"){
    let Deletetodo = await inquirer.prompt({
        type: 'list',
        name: "todo",
        message: 'select item for delete',
        choices: todos.map(item => item)
    })
    todos = todos.filter(val => val!== Deletetodo.todo)
    console.log(todos)
}
}
while (todos);
}
CreateTodos(todos)

///Alhamudillah i have completed my todo project.