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

    $(".library").last().click(function() {
      $("#show-library").show();
      $("#show-library h2").text(newLibrary.libraryName);
      $(".library-address").text(newLibrary.address());
      });
    });
  });
