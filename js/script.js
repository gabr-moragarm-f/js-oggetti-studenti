// Primo esercizio -------------------------------------------------------------
var primoStudente = {
  'nome' : 'Gabriel',
  'cognome' : 'Moraga Figueroa',
  'eta' : 23
}
console.log(primoStudente);

for (var key in primoStudente) {
  console.log("Il/L'" + key + ' è ' + primoStudente[key] + '.');
}
// -----------------------------------------------------------------------------
