const url = 'https://gik2f8-labs.herokuapp.com/books';

/*function getAll(){
    const bookListPromise = fetch(url).then((result) => result.json()).then((jsonData) => jsonData);

    bookListPromise.then((bookList) => bookList);

}*/

export async function getAll(){
    const result = await fetch(url).then((result) => result.json());
    /*const jsonData = await result.json();*/

    return result;
}