
function Library(name, street, city, state, zip, inventory) {
  this.libraryName = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.inventory = inventory;
}

var sherman = new Library("Sherman", "2024 SE Sherman St", "Portland", "OR", "97214", ["Catch 22", "Gulliver's Travels", "Breakfast of Champions"]);

var main = new Library("Main", "1307 SE Main", "Portland", "OR", "97214", ["Catcher in the Rye", "Grapes of Wrath", "Cooking for One"]);

var market = new Library("Market", "1738 SE 33rd Ave", "Portland", "OR", "97214", ["Fabio Erotica", "50 Shades of Gray", "What kind of library is this?"]);

var ladd = new Library("Ladd", "1928 SE Ladd", "Portland", "OR", "97214", ["Pet Care 101", "Dog Breeds", "Cats? And Other Questions"]);
