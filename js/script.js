var nome = prompt('come ti chiami?');
var cognome = prompt('quale è il tuo cognome?');
var colorePreferito = prompt('quale è il tuo colore preferito?');

var saluto = nome + cognome +colorePreferito + 19;

document.getElementById('pass').innerHTML = saluto;
