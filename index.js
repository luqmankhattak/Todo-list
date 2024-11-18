"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// Array
// operator
// function
let todos = ["Luqman", "Irfan"];
async function CreateTodos(todos) {
    do {
        let ans = await inquirer_1.default.prompt({
            type: 'list',
            name: 'select',
            message: 'Enter a new todo',
            choices: ["Add", "update", "View", "Delete"]
        });
        if (ans.select == "Add") {
            let Addtodo = await inquirer_1.default.prompt({
                type: 'input',
                name: 'todo',
                message: 'Enter a new todo'
            });
            todos.push(Addtodo.todo);
            console.log(todos);
        }
        if (ans.select == "update") {
            let Updatetodo = await inquirer_1.default.prompt({
                type: 'list',
                name: "todo",
                message: 'select item for update',
                choices: todos.map(item => item)
            });
            let AddTodo = await inquirer_1.default.prompt({
                type: 'input',
                message: 'add item...',
                name: 'todo',
            });
            let newtodos = todos.filter(val => val !== Updatetodo.todo); //datetodo.t //
            todos = [...newtodos, AddTodo.todo];
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log(todos);
        }
        if (ans.select == "Delete") {
            let Deletetodo = await inquirer_1.default.prompt({
                type: 'list',
                name: "todo",
                message: 'select item for delete',
                choices: todos.map(item => item)
            });
            todos = todos.filter(val => val !== Deletetodo.todo);
            console.log(todos);
        }
    } while (todos);
}
CreateTodos(todos);
///Alhamudillah i have completed my todo project.
