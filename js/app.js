import {Todo} from './todo'

export class App {
  constructor() {
    this.heading = 'Add shit that needs to be done'
    this.firstName = "Peter"
    this.lastName = "Kona"
    this.todos = []
    this.todoDescription = ''
    this.neweArr = []
    this.arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    this.arrCopy = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200]

  }

  addTodo() {
    if(this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription))
      this.todoDescription = ''
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo)
    if (index !== -1) {
      this.todos.splice(index,1)
    }
  }

  addTwo(a,b){
    return a + b
  }

  newFunct(arr){
    console.log('this is pop ',arr.pop());
    console.log('this is shift ',arr.shift());
    console.log('this is my array',arr);
  }

  newArr(arr,arrCopy){
    arr.concat(arrCopy)
    console.log('arr copy',arr, arrCopy);
  }

  get fullName() {
    return `$(this.lastName) ${this.firstName}`
  }

  sayHello() {
    alert(`Hello ${this.fullName}`)
  }
}
