var customer = document.getElementById("customer");
var email = document.getElementById("email");
var message = document.getElementById("message"); 
var dugme = document.getElementById("button");

dugme.addEventListener("click", function (e) {
  e.preventDefault();
  
  // Dobijanje vrednosti iz polja forme
  var customerValue = customer.value;
  var emailValue = email.value;
  var messageValue = message.value;

  // Kreiranje objekta za čuvanje podataka
  var ElabBaza = {
    customer: customerValue,
    email: emailValue,
    message: messageValue
  };

  // Konvertovanje objekta u JSON format
  var ElabBazaJSON = JSON.stringify(ElabBaza);

  // Čuvanje podataka u lokalnoj memoriji web pregledača
  localStorage.setItem("ElabBaza", ElabBazaJSON);

  // Prikazivanje potvrde
  confirm(
    "Customer: " +
      customerValue +
      "\n" +
      "Email: " +
      emailValue +
      "\n" +
      "Message: " +
      messageValue
  );

  // Resetovanje forme nakon što su podaci sačuvani
  customer.value = "";
  email.value = "";
  message.value = "";
});

// Funkcija za proveru da li postoje sačuvani podaci u lokalnoj memoriji
function checkLocalStorage() {
  var ElabBazaJSON = localStorage.getItem("ElabBaza");
  if (ElabBazaJSON) {
    var ElabBaza = JSON.parse(ElabBazaJSON);
    console.log("Sačuvani podaci:");
    console.log("Customer: " + ElabBaza.customer);
    console.log("Email: " + ElabBaza.email);
    console.log("Message: " + ElabBaza.message);
  } else {
    console.log("Nema sačuvanih podataka.");
  }
}

// Poziv funkcije za proveru prilikom učitavanja stranice
checkLocalStorage();








