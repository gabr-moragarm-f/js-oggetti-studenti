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

// Secondo esercizio -----------------------------------------------------------
var classe = [
  {
    'Nome' : 'Gabriel',
    'Cognome' : 'Moraga Figueroa'
  },

  {
    'Nome' : 'Lorenzo',
    'Cognome' : 'Morelli'
  },

  {
    'Nome' : 'Michele',
    'Cognome' : 'Poggi'
  },

  {
    'Nome' : 'Marco',
    'Cognome' : 'Madia'
  },

  {
    'Nome' : 'Marco',
    'Cognome' : 'Gattuso'
  },

  {
    'Nome' : 'Matt',
    'Cognome' : 'Aster'
  },

  {
    'Nome' : 'Gianandrea',
    'Cognome' : 'Muià'
  },

  {
    'Nome' : 'Nicola',
    'Cognome' : 'Degobbis'
  },

  {
    'Nome' : 'Gabrio',
    'Cognome' : 'Pozzi'
  },

  {
    'Nome' : 'Giulia',
    'Cognome' : 'Bersani'
  },

  {
    'Nome' : 'Sara',
    'Cognome' : 'Stefanizzi'
  },

  {
    'Nome' : 'Luca',
    'Cognome' : 'Occhi'
  },

  {
    'Nome' : 'Andrea',
    'Cognome' : 'Guagnini'
  },

  {
    'Nome' : 'Simone',
    'Cognome' : 'Rosini'
  },

  {
    'Nome' : 'Tommaso',
    'Cognome' : 'Amitrano'
  },

  {
    'Nome' : 'Mattia',
    'Cognome' : 'Ceniti'
  }
]

console.log(classe);

for (var i = 0; i < classe.length; i++) {
  console.log('Studente ' + (i+1));

  for (var key in classe[i]) {
    console.log(key + ': ' + classe[i][key]);
  }

  console.log(classe[i]);
}
// -----------------------------------------------------------------------------
