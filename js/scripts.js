function Contact(first, last, email, comment) {
  this.firstName = first;
  this.lastName = last;
  this.emailAddress = email;
  this.commentText = comment;
}

function Library(name, street, city, state, zip) {
  this.libraryName = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.inventory = [];
}


Library.prototype.address = function() {
  return this.street + ", " + this.city + ", " + this.state + ", " + this.zip;
}

Library.prototype.marker = function() {
var mapLocation = this.street + "+" + this.city + "+" + this.state;
var newMarker= mapLocation.replace(/ /g,"+");
console.log(newMarker);
return newMarker;
}

// Register a Library

$(document).ready(function() {
  $("form#new-library").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#new-name").val();
    var streetInput = $("input#new-street").val();
    var cityInput = $("input#new-city").val();
    var stateInput = $("input#new-state").val();
    var zipInput = $("input#new-zip").val();
    var newLibrary = new Library(nameInput, streetInput, cityInput, stateInput, zipInput);

    $("ul#libraries").append("<li><span class='library'>" + newLibrary.libraryName + "</span></li>");

// Shows library's address and map
    $(".library").last().click(function() {
      $("#show-library").show();
      $("#show-library h2").text(newLibrary.libraryName);
      $(".library-address").text(newLibrary.address());
      $(".markerMap").show();
      // $(".mark").text("src='https://maps.googleapis.com/maps/api/staticmap?center=City+Hall,Portland,OR&zoom=12&size=400x400&markers=color:blue| + newLibrary.marker() + &key=AIzaSyAUxPwnXOABnJyqhafsTjDQPe3KzJThYG0'");
      });
    });

  $("form#contact").submit(function(event) {
    event.preventDefault();
    var firstnameInput = $("input#first-name").val();
    var lastnameInput = $("input#last-name").val();
    var emailInput = $("input#email").val();
    var commentInput = $("input#comment").val();
    var newContact = new Contact(firstnameInput, lastnameInput, emailInput, commentInput);
    console.log(firstnameInput);
    $("#thanks").show();
  });
});
