class Worker {
    constructor(fio, iin, position, dateOfBirth, phone, salary) {
        this.fio = fio;
        this.iin = iin;
        this.position = position;
        this.dateOfBirth = dateOfBirth;
        this.phone = phone;
        this.salary = salary;
    }

    getAge() {
        const today = new Date();
        const birthDate = new Date(this.dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    static getAverageAge(workers) {
        const totalAge = workers.reduce((acc, worker) => acc + worker.getAge(), 0);
        const averageAge = totalAge / workers.length;
        if (averageAge === 50) {
            return "good";
        } else {
            return "not good";
        }
    }
}

const workers = [
    new Worker("Bakir Nurassyl", "123456789", "Frontend dev", "1973-01-01", "87771750663", 50000),
    new Worker("Abdymazhyt Islam", "987654321", "Backend Dev", "1973-01-05", "87764562254", 70000),
    new Worker("Marat Bostan", "456789123", "Manager", "1973-01-10", "87074568892", 80000),
    new Worker("User Erbolat", "321654987", "Game dev", "1973-01-15", "87071114524", 60000),
    new Worker("Smatov Nurzhigit", "789456123", "Java Dev", "1973-01-25", "87001233211", 45000),
    new Worker("Esenova Nuriya", "040728600778", "Director", "1977-05-26", "87554566555", 60000),
    new Worker("Zhakyp Aida", "041108600076", "Artist", "1973-01-25", "87001233211", 45000),
    new Worker("Orysbay Uliqpan", "040625551111", "Mobileographer", "1973-01-01", "87476523747", 50000),
    new Worker("Zhumadil Aididar", "987623421", "SMM", "1973-01-05", "87764534566", 70000),
    new Worker("Hidarov Rahat", "456088123", "Worker", "1973-01-10", "87074568232", 80000),
];

const averageAge = Worker.getAverageAge(workers);
console.log(`The average age of workers is ${averageAge}.`);
