
import {BookListItem} from "../Components/BookListItem.js"
'use strict'
export const BookList = (listOfBooks) =>{

    const bookList = document.createElement('ul');
    bookList.setAttribute('class', 'book-list rounded-md border-2 border-blue-400 bg-with w-full mx-auto');

    for (let index = 0; index < listOfBooks.length; index++) {
        bookList.appendChild(BookListItem(listOfBooks[index]));
    }

    return bookList;

}


