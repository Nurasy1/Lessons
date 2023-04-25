class Ticket {
    constructor(prices) {
        this.prices = prices;
    }
}

class MovieTicket {
    constructor(imaxAdultQty, imaxChildQty, threeDMaxAdultQty, threeDMaxChildQty, commonAdultQty, commonChildQty, prices) {
        this.ticketPrices = prices;
        this.imaxAdultQty = imaxAdultQty;
        this.imaxChildQty = imaxChildQty;
        this.threeDMaxAdultQty = threeDMaxAdultQty;
        this.threeDMaxChildQty = threeDMaxChildQty;
        this.commonAdultQty = commonAdultQty;
        this.commonChildQty = commonChildQty;
    }

    getTotalPrice() {
        const imaxAdultPrice = this.ticketPrices[0] * this.imaxAdultQty;
        const imaxChildPrice = this.ticketPrices[1] * this.imaxChildQty;
        const threeDMaxAdultPrice = this.ticketPrices[2] * this.threeDMaxAdultQty;
        const threeDMaxChildPrice = this.ticketPrices[3] * this.threeDMaxChildQty;
        const commonAdultPrice = this.ticketPrices[4] * this.commonAdultQty;
        const commonChildPrice = this.ticketPrices[5] * this.commonChildQty;
        return imaxAdultPrice + imaxChildPrice + threeDMaxAdultPrice + threeDMaxChildPrice + commonAdultPrice + commonChildPrice;
    }

    setTicketPrice(index, price) {
        this.ticketPrices[index] = price;
    }
}

// Пример использования:
const ticketPrices = [200, 100, 150, 120, 100, 80];
const ticketOrder = new MovieTicket(1, 1, 2, 1, 1, 0, ticketPrices);
console.log(ticketOrder.getTotalPrice());

ticketOrder.setTicketPrice(0, 250); // увеличиваем цену на взрослый IMAX билет
console.log(ticketOrder.getTotalPrice());


