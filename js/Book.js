class Book {
    constructor(name, kind, author, publish, price, desc) {
        this._name = name;
        this._kind = kind;
        this._author = author;
        this._publish = publish;
        this._price = price;
        this._desc = desc;
        this._img = "";
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get kind() {
        return this._kind;
    }
    set kind(value) {
        this._kind = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    get publish() {
        return this._publish;
    }
    set publish(value) {
        this._publish = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get desc() {
        return this._desc;
    }
    set desc(value) {
        this._desc = value;
    }
    get img() {
        return this._img;
    }
    set img(value) {
        this._img = value;
    }
    edit(name, kind, author, publish, price, desc, img) {
        this.name = name;
        this.kind = kind;
        this.author = author;
        this.publish = publish;
        this.price = price;
        this.desc = desc;
        this._img = img;
    }
    getHtml() {
        let table = `<td>${this._name}</td>
                    <td>${this._kind}</td>
                    <td>${this._author}</td>
                    <td>${this._publish}</td>
                    <td>${this._price}</td>
                    <td>${this._desc}</td>
                    <td><img src="${this._img}"></td>`;
        return table;
    }
    getInterface1() {
        let block = `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${this.img}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.price} Đ</p>
                        </div>
                    </div>`;
        return block;
    }
}