// Funzione per creare l'oggetto "person" e aggiungerlo come attributo "data-person" al form
function addPersonDataToForm() {
  // Recupera i valori dai campi di input
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;

  // Crea l'oggetto person
  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  // Recupera l'elemento form
  const form = document.getElementById("personForm");

  // Aggiunge l'attributo data-person con il valore dell'oggetto person in formato JSON
  form.setAttribute("data-person", JSON.stringify(person));
}
