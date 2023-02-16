class Person {}

class Member extends Person {
    access() {
        console.log('You have an access.')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('You haven\'t access!')
    }
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())  // You have an access.
openSecretDoor(new Backend())  // You have an access.
openSecretDoor(new PersonFromDifferentCompany())  // Uncaught Error: You haven't access!
