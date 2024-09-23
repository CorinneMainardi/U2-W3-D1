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




class
