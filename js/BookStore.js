class BookStore {
    constructor(name) {
        this.name = name;
        this.books = [];
        this.data = [];
    }
    init() {
        for (let i = 0; i < this.data.length; i++) {
            let book = new Book(this.data[i]._name, this.data[i]._kind, this.data[i]._author, this.data[i]._publish, this.data[i]._price, this.data[i]._desc);
            book.img = this.data[i]._img;
            this.addBook(book);
        }
    }
    addBook(book) {
        this.books.push(book);
    }
    getHtml() {
        let table = `<table><tr>
                        <th>Tên sách</th>
                        <th>Thể loại</th>
                        <th>Tác giả</th>
                        <th>Nhà xuất bản</th>
                        <th>Giá tiền</th>
                        <th>Mô tả</th>
                        <th>Hình ảnh</th>
                    </tr>`;
        for (let i = 0; i < this.books.length; i++) {
            table += `<tr><td>${this.books[i].getHtml()}</td></tr>`;
        }
        table += '</table>';
        return table;
    }
}