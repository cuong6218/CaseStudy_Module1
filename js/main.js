const BOOK = 'book';
let store1 = new BookStore('Rodneys Store');
store1.data = loadData();
store1.init();
console.log(store1.data);
display(store1.getHtml());
console.log(store1.books);
let currentBook = 0;

function display(table) {
    document.getElementById('list-book').innerHTML = table;
    saveData();
}
function addBook() {
    let name = document.getElementById('add-name').value;
    let kind = document.getElementById('add-kind').value;
    let author = document.getElementById('add-author').value;
    let publish = document.getElementById('add-publish').value;
    let price = document.getElementById('add-price').value;
    let desc = document.getElementById('add-desc').value;
    let img = document.getElementById('add-img').value;
    if (name == "" || kind == "" || author == "" || publish == "" || price == "" || desc == "" || img == "") {
        alert('Mời bạn nhập đầy đủ thông tin');
    } else {
        let book = new Book(name, kind, author, publish, price, desc);
        book.img = img;
        store1.addBook(book);
        display(store1.getHtml());
        document.getElementById('add-form').reset();
    }
}
function delBook(index) {
    store1.del(index);
    display(store1.getHtml());
}

// Gán giá trị dữ liệu của thông tin sách cần sửa vào form sửa thông tin sách
let name = document.getElementById('edit-name');
let kind = document.getElementById('edit-kind');
let author = document.getElementById('edit-author');
let publish = document.getElementById('edit-publish');
let price = document.getElementById('edit-price');
let desc = document.getElementById('edit-desc');
let img = document.getElementById('edit-img');
function editBook(index) {
    document.getElementById('edit-form').style.display = 'inline-block';
    let book1 = store1.getBookbyIndex(index);
    name.value = book1.name;
    kind.value = book1.kind;
    author.value = book1.author;
    publish.value = book1.publish;
    price.value = book1.price;
    desc.value = book1.desc;
    img.value = book1.img;
    currentBook = index;
}

function saveBook() {
    if (name.value == "" || kind.value == "" || author.value == "" || publish.value == "" || price.value == "" || desc.value == "" || img.value == "") {
        alert('Mời bạn nhập đầy đủ thông tin');
    } else {
    store1.books[currentBook].edit(name.value, kind.value, author.value, publish.value, price.value, desc.value, img.value);
    display(store1.getHtml());
    }
    document.getElementById('edit-form').reset();
    document.getElementById('edit-form').style.display = "none";
}

function saveData() {
    localStorage.setItem(BOOK, JSON.stringify(store1.books));
}

function loadData() {
    return localStorage.hasOwnProperty(BOOK) ? JSON.parse(localStorage.getItem(BOOK)) : [];
}
