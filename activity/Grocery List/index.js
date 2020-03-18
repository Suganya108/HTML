const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');

const list = document.querySelector('.grocery-list');
const clear = document.querySelector('.displayItems-clear');

submit.addEventListener('click', addItem);
document.addEventListener('DOMContentLoaded', displayStorage);
clear.addEventListener('click', removeItems);
list.addEventListener('click', removeSingleItem);


function addItem(event) {
    event.preventDefault();
    let value = input.value;
    if (value === '') {} else {
        createItem(value);
        updateStorage(value);
    }
}

function showAction(element, text, value) {
    if (value === true) {
        element.classList.add('success');
        element.innerText = text;
        input.value = '';
        setTimeout(function() {
            element.classList.remove('success');
        }, 3000)
    } else {
        element.classList.add('alert');
        element.innerText = text;
        input.value = '';
        setTimeout(function() {
            element.classList.remove('alert');
        }, 3000)
    }
}

function createItem(value) {
    let parent = document.createElement('div');
    parent.classList.add('grocery-item');

    parent.innerHTML = `<h4 class="grocery-item__title">${value}</h4>
    <a href="#" class="grocery-item__link">
        <i class="far fa-trash-alt"></i>
    </a>`

    list.appendChild(parent);
}

function updateStorage(value) {
    let groceryList;

    groceryList = localStorage.getItem('groceryList') ? JSON.parse(localStorage.getItem('groceryList')) : [];

    groceryList.push(value);
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
}

function displayStorage() {
    let exists = localStorage.getItem('groceryList');

    if (exists) {
        let storageItems = JSON.parse(localStorage.getItem('groceryList'));
        storageItems.forEach(function(element) {
            createItem(element);
        })
    }
}

function removeItems() {
    localStorage.removeItem('groceryList');
    let items = document.querySelectorAll('.grocery-item');

    if (items.length > 0) {
        //remove each item from the list
        items.forEach(function(element) {
            list.removeChild(element);
        })
    }
}


function removeSingleItem(event) {
    event.preventDefault();

    let link = event.target.parentElement;
    if (link.classList.contains('grocery-item__link')) {
        let text = link.previousElementSibling.innerHTML;
        let groceryItem = event.target.parentElement.parentElement;

        list.removeChild(groceryItem);

        editStorage(text);

    }
}

function editStorage(item) {
    let groceryItems = JSON.parse(localStorage.getItem('groceryList'));
    let index = groceryItems.indexOf(item);

    groceryItems.splice(index, 1);
    localStorage.removeItem('groceryList');
    localStorage.setItem('groceryList', JSON.stringify(groceryItems));

}