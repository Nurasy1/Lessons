class Library {
    constructor(fio , title , year , quantity) {
        this.fio = fio;
        this.title = title;
        this.year = year;
        this.quantity = quantity;
    }
}
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    sortBook(sortBy){
        this.contacts.sort((a,b)=>{
            if (sortBy === 'fio'){
                return a.fio.localeCompare(b.fio);
            } else if (sortBy === 'year') {
                return a.quantity.localeCompare(b.year)
            }


        });

    }
}

const book = new AddressBook();
book.addContact(new Library('Bakir N.M', '100 bal','2023','3'));
book.addContact(new Library('Abdulov N.E', 'stypendia kerek','2022','2'));
book.addContact(new Library('Abai K', 'Omir','1945','1'));
console.log('Список всего книг:')
console.log(book.contacts);


book.sortBook('year');
console.log('Отсортированные книги по годам');
console.log(book.contacts);
book.sortBook('fio');
console.log('Отсортированные книги по фамилиям');
console.log(book.contacts);


