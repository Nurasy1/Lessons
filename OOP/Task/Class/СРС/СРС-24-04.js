
 const tableBody = document.querySelector('#contact-table tbody');

 //Функция, которая заполняет тело таблицы данными
function renderTableBody(tableBody, contacts) {

    tableBody.innerHTML = '';

    // Для каждого контакта создаем новую строку таблицы и заполняем ее данными
    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.birthDate}</td>
      <td>${contact.phoneNumber}</td>
    `;
        tableBody.appendChild(row);
    });
}

class Contact {
    constructor(firstName, lastName, birthDate, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.phoneNumber = phoneNumber;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    deleteContact(index) {
        this.contacts.splice(index, 1);
    }

    findContacts(searchTerm) {
        return this.contacts.filter((contact) => {
            const fullName = contact.firstName + ' ' + contact.lastName;
            return fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contact.birthDate.includes(searchTerm) ||
                contact.phoneNumber.includes(searchTerm);
        });
    }

    sortContacts(sortBy) {
        this.contacts.sort((a, b) => {
            if (sortBy === 'lastName') {
                return a.lastName.localeCompare(b.lastName);
            } else if (sortBy === 'birthDate') {
                return new Date(a.birthDate) - new Date(b.birthDate);
            } else if (sortBy === 'phoneNumber') {
                return a.phoneNumber.localeCompare(b.phoneNumber);
            } else {
                return a.firstName.localeCompare(b.firstName);
            }
        });
    }
}


// Пример использования

const book = new AddressBook();


book.addContact(new Contact('Ислам', 'Мажит', '01.01.2004', '87777777771'));
book.addContact(new Contact('Бостан', 'Марат', '06.01.2004', '87777777772'));
book.addContact(new Contact('Ерболат', 'Усер', '05.01.2004', '87777777773'));

console.log('Исходный список контактов:');
console.log(book.contacts);


console.log('Список контактов, содержащих "Ерболат":');
console.log(book.findContacts('Ерболат'));

console.log('Список контактов, отсортированный по фамилии:');
book.sortContacts('lastName');
console.log(book.contacts);

console.log('Список контактов, отсортированный по дате рождения:');
book.sortContacts('birthDate');
console.log(book.contacts);

console.log('Список контактов, отсортированный по номеру телефона:');
book.sortContacts('phoneNumber');
console.log(book.contacts);

console.log('Список контактов, отсортированный по имени:');
book.sortContacts('firstName');
console.log(book.contacts);

// Отображаем список контактов в таблице
renderTableBody(tableBody, book.contacts);

