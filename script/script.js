'use strict';
/* Vad ska vi göra här? */

/*const searchInput = document.children[0].children[1].children[1].children[1];*/
const searchField = document.getElementById("searchField");
searchField.addEventListener("keyup", handelKeyPress);

const bookList = [
    {
        id: 1,
        author: 'Charles Dickens',
        title: 'Oliver Twist'
    },
    {
        id: 2,
        author: 'William Shakespear',
        title: 'Hamlet'
    }
];

function handelKeyPress(ev){
    /* 
        Ska taemot och läsa av värdet i i nputfältet.
        Skicka värdet till searchBokks
        SearchBooks returnerar en filtrerad lista.
        Den filtrerade listan skickas till renderBookList
    */
    renderBookList(searchBokks(ev.target.value));
}

function searchBokks(searchTerm){
/*
    Loppa igenom bookList
    Gämför titel med söktermen
    Om söktermen finns någonstans i titlen lägg till elementet i en ny lista (filterdList)
    Returnerar filterdList eller anropar renderBoookList
*/
    let filterdList = [];

    if(searchTerm){

        for (let index = 0; index < bookList.length; index++) {
            const title = bookList[index].title.toLowerCase();
            if (title.indexOf(searchTerm.toLowerCase()) >= 0) 
            {            
                filterdList.push(bookList[index]);
            }
        }
    }

    return filterdList;
}

function makeLiElement(book){
    const li = document.createElement('li');
    li.setAttribute('class','book-list__item mx-2 mb-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer');
    li.innerHTML = `${book.author} - ${book.title}`;
    return li;
} 

function makeUlElement(){
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'book-list rounded-md border-2 border-blue-400 bg-with w-full mx-auto');

    return ul;
}

function popullaetUlElement(ul,listElements)
{
    for (let index = 0; index < listElements.length; index++) {
        ul.appendChild(listElements[index]);
    }

    return ul;
}

function renderBookList(bookList){

    let existingElement = document.querySelector(".book-list");

    if (bookList.length >0) {

        const liElements = [];
        
        for (let index = 0; index < bookList.length; index++) {
            liElements.push(makeLiElement(bookList[index]));            
        }

        
        if (existingElement) {
            existingElement.replaceChildren();
            existingElement = popullaetUlElement(existingElement,liElements);
        }
        else
        {
            const root = document.getElementById("root");
            let ul = makeUlElement();
            ul = popullaetUlElement(ul, liElements);
            root.insertAdjacentElement('beforeend', ul);            
        }
    }
    else{
        existingElement.remove();
    }
}




