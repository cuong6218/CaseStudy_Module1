let store1 = new BookStore ('Rodneys Store');
store1.init();
display(store1.getHtml());
let currentStore = 0;
function display(table){
    document.getElementById('list-book').innerHTML = table;
}

function addBook(){
    let name = document.getElementById('add-name').value;
    let kind = document.getElementById('add-kind').value;
    let author = document.getElementById('add-author').value;
    let publish = document.getElementById('add-publish').value;
    let price = document.getElementById('add-price').value;
    let desc = document.getElementById('add-desc').value;
    let img = document.getElementById('add-img').value;
    let book = new Book(name, kind, author, publish, price, desc);
    book.img = img;
    store1.addBook(book);
    display(store1.getHtml());
    document.getElementById('add-form').reset();
}
function delBook(index){
    store1.del(index);
    display(store1.getHtml());
}

// Gán giá trị dữ liệu của thông tin sách cần sửa vào form sửa thông tin sách
function editBook(index){
    document.getElementById('edit-form').style.display = 'inline-block';
    let book1 = new store1.getBookbyIndex(index);
    document.getElementById('edit-name').value = book1.name;
    document.getElementById('edit-kind').value = book1.kind;
    document.getElementById('edit-author').value = book1.author;
    document.getElementById('edit-publish').value = book1.publish;
    document.getElementById('edit-price').value = book1.price;
    document.getElementById('edit-desc').value = book1.desc;
    document.getElementById('edit-img').value = book1.img;
    currentStore = index;
}