
//Business Logic for MovieTicket
function Ticket() {
  this.tickets = {};
}

// Business Logic for Tickets
function Ticket(name, time, year) {
  this.name = name;
  this.time = time;
  this.year = year;
}

Ticket.prototype.calculatePrice = function (ticketPrice) {
    let fullPrice = "$27";
    let price;

    if (this.name === "1" || this.name === "2") {
        return price =  20;
    } else if  (this.time <= 3 ) {
        return price = 15;
    } else if (this.year >= 65) {
        return price = 10;
    } else {
      return fullPrice;
    }
  };

// UI Logic
let ticket = new Ticket();

function displayTicket(ticketPrice) {
  $(".price").html(ticketPrice.calculatePrice());
}


$(document).ready(function() {
  $("form#movie-tickets").submit(function(event) {
    event.preventDefault();
    const selectedMovie = $("#movie-name option:selected").val();
    const selectedTime = parseInt($("input:radio[name=movieTime]:checked").val());
    const inputtedAge =  parseInt($("input#age").val());
    $("#movie-name option:selected").val("");
    $("input:radio[name=movieTime]:checked").val("");
    $("input#age").val("");
    var ticketPrice = new Ticket (selectedMovie, selectedTime, inputtedAge);
    console.log(ticketPrice);
    displayTicket(ticketPrice);
  })
})