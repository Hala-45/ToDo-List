// JavaScript source code
var addBtn = document.getElementById("btn")
var dataIn = document.getElementById("inputdata")
var todolist = document.getElementById("todolist")



fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(function (todos) {
        todos.slice(0, 10).forEach(todod => {
            const todo = createElement("li", { class: 'li', id: todod.id }, todod.title)
            renderToDo(todolist, todo)
        })
    })
addBtn.addEventListener("click",function() {
    const todo = createElement("li", { class: 'li' }, dataIn.value)
    renderToDo(todolist, todo)
})

function renderToDo(todolist, todo) {
    todolist.appendChild(todo)
    const removebtn = createElement("button", { class: 'remove_btn' }, "X")
    todo.appendChild(removebtn)
    removebtn.addEventListener("click", function () {
        todolist.removeChild(todo)
    })
}


function createElement(tag, attributes, content) {
    const ele = document.createElement(tag);

    const keys = Object.keys(attributes)
    keys.forEach(key => {
        ele.setAttribute(key, attributes[key])
    })

    if (content) {
        ele.textContent = content
    }

    return ele
}
