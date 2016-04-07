function Library(name, street, city, state, zip) {
  this.libraryName = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.inventory = [];
}

function Books(title, author) {
  this.bookTitle = title;
  this.author = author;
}

// Library.prototype.fullInventory = function() {
//   return this.libaryName + ", " + this.street + ", " this.zip + ", " + this.inventory;
// }
//
// Book.prototype.fullName = function() {
//   return this.title + ", " + this.author;
// }

// <script src="http://maps.googleapis.com/maps/api/js?address&key=AIzaSyDdmUrcEcDKnPgsfRXhB3dRLvYknXSSNzo"></script>

$(document).ready(function() {
  $("form#new-library").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#new-name").val();
    var streetInput = $("input#new-street").val();
    var cityInput = $("input#new-city").val();
    var stateInput = $("input#new-state").val();
    var zipInput = $("input#new-zip").val();
    var newlibrary = new Library(streetInput, cityInput, stateInput, zipInput);
    $("#add-books").show();
  });

  $(".add-book").each(function() {
    var titleInput = $(this).find("input#new-title").val();
    var authorInput = $(this).find("input#new-author").val();
    var newBook = new Book(titleInput, authorInput);
    newLibrary.inventory.push(newBook)
  });
    $("ul#libraryinventory").append("<li><span class='book'>" + newBook.fullName() + "</span></li>");
  });

  $("#more-books").click(function() {
  $("#add-books").append('<div class="new-book">' +
                                '<div class="form-group">' +
                                  '<label for="new-title">Title</label>' +
                                  '<input type="text" class="form-control new-type">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-author">Author</label>' +
                                  '<input type="text" class="form-control new-type">' +
                                '</div>' +
                                '</div>');
  });
