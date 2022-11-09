'use strict'
export const BookListItem = (book) =>{

    const li = document.createElement('li');
    li.setAttribute('class','book-list__item mx-2 mb-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer');
    li.innerHTML = `${book.author} - ${book.title}`;
    return li;

}