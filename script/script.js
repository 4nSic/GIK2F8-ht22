'use strict';
/* Vad ska vi göra här? */

/*const searchInput = document.children[0].children[1].children[1].children[1];*/
const searchField = document.getElementById("searchField");
searchField.addEventListener("keyup", handelKeyPress(e));

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

function handelKeyPress(e){
    /* 
        Ska taemot och läsa av värdet i i nputfältet.
        Skicka värdet till searchBokks
        SearchBooks returnerar en filtrerad lista.
        Den filtrerade listan skickas till renderBookList
    */
    searchBokks(e)
}

function searchBokks(searchTerm){
/*
    Loppa igenom bookList
    Gämför titel med söktermen
    Om söktermen finns någonstans i titlen lägg till elementet i en ny lista (filterdList)
    Returnerar filterdList eller anropar renderBoookList
*/
    let filterdList = [];
    
    for (let index = 0; index < bookList.length; index++) {
        const title = bookList[index].title.toLowerCase();
        
        if (title.indexOf(searchTerm.toLowerCase()) >= 0) 
        {            
            filterdList.push(bookList[index]);
        }
    }

    return filterdList;
}

function renderBookList(bookList){
    if (bookList.length >0) {

        let html = `<ul class="book-list rounded-md border-2 border-blue-400 bg-with w-full mx-auto">`;
        for (let index = 0; index < bookList.length; index++) {
            html += `<li class="book-list__item mx-2 mb-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                    ${bookList[index].author} - ${bookList[index].title}       
                    </li>`
    
            
        }
        html += `</ul>`;
        
        const existingElement = document.querySelector(".book-list");
        const root = document.getElementById("root");
        if (existingElement) {
            existingElement.replaceChildren();
        }
        
        const htmlElement = document.createElement("ul");
    
        root.insertAdjacentHTML("beforeend",html);
    }




}




