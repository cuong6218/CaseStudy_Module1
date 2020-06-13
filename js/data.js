const BOOK = 'book';
let books = loadData();
function saveData(){
    localStorage.setItem(BOOK, JSON.stringify(store1.books));
}

function loadData(){
    localStorage.hasOwnProperty(BOOK)?JSON.parse(localStorage.getItem(BOOK)):[];
}