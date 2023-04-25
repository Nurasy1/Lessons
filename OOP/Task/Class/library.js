class Library {
    constructor(fio, title, year, quantity) {
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

    sortBook(sortBy) {
        this.contacts.sort((a, b) => {
            if (sortBy === 'fio') {
                return a.fio.localeCompare(b.fio);
            } else if (sortBy === 'year') {
                return a.quantity.localeCompare(b.year);
            }
        });
    }

    removeBook(title, quantity) {
        const index = this.contacts.findIndex(
            (contact) => contact.title === title
        );

        if (index === -1) {
            console.log('Book not found.');
            return;
        }

        const book = this.contacts[index];

        if (book.quantity < quantity) {
            console.log(`Not enough copies of ${title}.`);
            return;
        }

        book.quantity -= quantity;

        if (book.quantity <= 0) {
            this.contacts.splice(index, 1);
            console.log(`Book ${title} removed from the library.`);
        } else {
            console.log(`Removed ${quantity} copies of ${title} from the library.`);
        }
    }
}


const book = new AddressBook();
book.addContact(new Library('Bakir N.M', '100 bal', '2023', '3'));
book.addContact(new Library('Abdulov N.E', 'stypendia kerek', '2022', '2'));
book.addContact(new Library('Abai K', 'Omir', '1945', '1'));
console.log('Список всего книг:')
console.log(book.contacts);
console.log('----------------------------------------------------------------------------------------------------------')

book.sortBook('year');
console.log('Отсортированные книги по годам');
console.log(book.contacts);
book.sortBook('fio');
console.log('Отсортированные книги по фамилиям');
console.log(book.contacts);
console.log('----------------------------------------------------------------------------------------------------------')


book.removeBook('100 bal', 2);
console.log('Удалены две копии книги "100 bal":');
console.log(book.contacts);

book.removeBook('Omir', 1);
console.log('Удалена одна копия книги "Omir":');
console.log(book.contacts);

book.removeBook('Omir', 1);
console.log('Удалена последняя копия книги "Omir":');
console.log(book.contacts);

book.removeBook('Omir', 1);
console.log('Попытка удалить несуществующую книгу:');
console.log(book.contacts);

