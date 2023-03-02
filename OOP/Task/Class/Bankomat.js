
class Bankomat {
    constructor(bill1000, bill500, bill200, remainder) {
        this.bill1000 = bill1000;
        this.bill500 = bill500;
        this.bill200 = bill200;
        this.remainder = remainder;
    }

    withdraw(amount) {
        if (amount % 200 !== 0) {
            return "Сумма должна быть кратна 200";
        }

        let bill1000Count = Math.floor(amount / 1000);
        let bill500Count = Math.floor((amount % 1000) / 500);
        let bill200Count = Math.floor((amount % 500) / 200);
        let remainder = amount % 200;

        if (bill1000Count > this.bill1000 || bill500Count > this.bill500 || bill200Count > this.bill200 || remainder > this.remainder) {
            return "Недостаточно денег в банкомате";
        }

        this.bill1000 -= bill1000Count;
        this.bill500 -= bill500Count;
        this.bill200 -= bill200Count;
        this.remainder -= remainder;

        let result = "";

        if (bill1000Count > 0) {
            result += `${bill1000Count} шт. по 1000 рублей, `;
        }
        if (bill500Count > 0) {
            result += `${bill500Count} шт. по 500 рублей, `;
        }
        if (bill200Count > 0) {
            result += `${bill200Count} шт. по 200 рублей, `;
        }
        if (remainder > 0) {
            result += `${remainder} рублей остаток`;
        }

        return result;
    }
}

// Пример использования класса
const bankomat = new Bankomat(10, 5, 20, 2000);
console.log(bankomat.withdraw(4800));
console.log(bankomat.withdraw(6000));
console.log(bankomat.withdraw(4800));
