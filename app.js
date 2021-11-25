//selectors

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const searchList = document.querySelector('.search-list');

//Event list
searchButton.addEventListener('click', addSearch);


//Functions

function addSearch(event){
    //prevent form for submitting
    event.preventDefault();
    //search-div
    const searchDiv = document.createElement('div');
    searchDiv.classList.add('search');
    //Create LI
    const newSearch = document.createElement('li');
    newSearch.innerText = 'Hey';
    newSearch.classList.add('search-item');
    searchDiv.appendChild(newSearch);
    //done mark btn
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    searchDiv.appendChild(completedButton);
    //delete mark btn
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    searchDiv.appendChild(trashButton);
    //Append to list
    searchList.appendChild(searchDiv);
}