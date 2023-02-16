class Fetch {
    request(url) {
        // return fetch(url).then(response => response.json())
        return Promise.resolve('Data from fetch.')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'Data from LocalStorage.'
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request()
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet() {
        return this.localStorage.get()
    }
}

class Database {
    constructor(client) {
        this.client = client
    }

    getData() {
        return this.client.clientGet()
    }
}

const db = new Database(new FetchClient())

console.log(db.getData())  // Promise {<fulfilled>: "Data from fetch."}

const localStorage = new Database(new LocalStorageClient())

console.log(localStorage.getData())  // Data from LocalStorage.