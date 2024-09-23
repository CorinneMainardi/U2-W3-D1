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

//esercizio2

class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const petInfo = document.getElementById("form");
const list = document.getElementById("list");

const petsList = [];

function addPetToList(pet) {
  const li = document.createElement("li");
  li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Owner: ${pet.ownerName}`;
  list.appendChild(li); // Qui usa correttamente "list" per aggiungere alla lista
}

petInfo.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const pet = new Pets(petName, ownerName, species, breed);
  petsList.push(pet);
  const sameOwnerPets = petsList.filter((existingPet) => existingPet.sameOwner(pet));

  if (sameOwnerPets.length > 0) {
    console.log(`Found pets with the same owner: ${sameOwnerPets.map((p) => p.petName).join(", ")}`);
  } else {
    console.log("No pets found with the same owner.");
  }

  addPetToList(pet);

  petInfo.reset();
});

// const jamie = new Pets("jamie", "Jonathan", "cane", "dogo");
// const leo = new Pets("leonida", "Jonathan", "cane", "dogo");
// const sarabi = new Pets("sarabi", "corinne", "cane", "america bully")
