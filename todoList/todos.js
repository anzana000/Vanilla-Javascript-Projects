const myTodos = document.querySelector('.addTodo');
const list = document.querySelector('.todos');
const searchMe = document.querySelector('.search input');

const generateTemplate = todo => {
const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
            <i class="fas fa-trash delete"></i>
        </li>`
        list.innerHTML += html;
};

// adding todos
myTodos.addEventListener('submit', e  => {
    e.preventDefault();
    const todo = myTodos.addTodo.value.trim();
    if(todo.length){
        generateTemplate(todo);
        myTodos.reset();
    }
});

// removing todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
Array.from(list.children)
.filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('displayNone'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('displayNone'));
};





// search todos
searchMe.addEventListener('keyup',() => {
const term = searchMe.value.trim().toLowerCase();
filterTodos(term);
});

