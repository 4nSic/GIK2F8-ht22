import {BookList} from "../Components/BookList.js";
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

function renderBookList(bookList){

    let existingElement = document.querySelector(".book-list");

    if (bookList.length >0) {
        
        if (existingElement) {
            existingElement.replaceChildren();
            existingElement = BookList(bookList);
        }
        else
        {
            const root = document.getElementById("root");
            root.insertAdjacentElement('beforeend', BookList(bookList));            
        }
    }
    else{
        if (existingElement) {
            
            existingElement.remove();
        }
        
    }
}




