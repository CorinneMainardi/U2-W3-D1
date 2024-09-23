class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  older(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " è più grande di " + otherUser.firstName;
    } else {
      return this.firstName + " è più giovane di " + otherUser.firstName;
    }
  }
}

const user1 = new User("Celine", "Mainardi", 27, "Terni");

const user2 = new User("Jonathan", "Mainardi", 29, "Terni");

console.log(user1.older(user2));

class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const jamie = new Pets("jamie", "Jonathan", "cane", "dogo");
const leo = new Pets("leonida", "Jonathan", "cane", "dogo");
const sarabi = new Pets("sarabi", "corinne", "cane", "america bully");
