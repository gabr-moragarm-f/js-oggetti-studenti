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
    'Cognome' : 'Moraga Figueroa',
    'Eta' : 23
  },

  {
    'Nome' : 'Lorenzo',
    'Cognome' : 'Morelli',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Michele',
    'Cognome' : 'Poggi',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Marco',
    'Cognome' : 'Madia',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Marco',
    'Cognome' : 'Gattuso',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Matt',
    'Cognome' : 'Aster',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Gianandrea',
    'Cognome' : 'Muià',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Nicola',
    'Cognome' : 'Degobbis',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Gabrio',
    'Cognome' : 'Pozzi',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Giulia',
    'Cognome' : 'Bersani',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Sara',
    'Cognome' : 'Stefanizzi',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Luca',
    'Cognome' : 'Occhi',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Andrea',
    'Cognome' : 'Guagnini',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Simone',
    'Cognome' : 'Rosini',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Tommaso',
    'Cognome' : 'Amitrano',
    'Eta' : 'Non pervenuta'
  },

  {
    'Nome' : 'Mattia',
    'Cognome' : 'Ceniti',
    'Eta' : 'Non pervenuta'
  }
]

console.log(classe);

for (var i = 0; i < classe.length; i++) {
  console.log('Studente ' + (i+1));

  for (var key in classe[i]) {
    if (key !== 'Eta') {
      console.log(key + ': ' + classe[i][key]);
    }
  }

  console.log(classe[i]);
}
// -----------------------------------------------------------------------------


// Terzo esercizio -------------------------------------------------------------
// Funzioni --------------------------------------------------------------------
function validString(string) {
  for (var i = 0; i <= 9; i++) {
    if (string.includes(i)) {
      return false
    }
  }

  if (isNaN(string)) {
    return true
  }
}

function validNumber(number) {
  if (!isNaN(number)) {
    return true
  }
}
// -----------------------------------------------------------------------------

var studenteInput = {};

do {
  studenteInput.Nome = prompt('Inserisci il nome del nuovo studente');

  if (!validString(studenteInput.Nome)) {
    alert('Nome non valido.')
  }
} while (!validString(studenteInput.Nome));

console.log(studenteInput);

do {
  studenteInput.Cognome = prompt('Inserisci il cognome del nuovo studente')

  if (!validString(studenteInput.Cognome)) {
    alert('Cognome non valido.')
  }
} while (!validString(studenteInput.Cognome));

console.log(studenteInput);

do {
  studenteInput.Eta = prompt("Inserisci l'età del nuovo studente")

  if (!validNumber(studenteInput.Eta)) {
    alert('Età non valida.')
  }
} while (!validNumber(studenteInput.Eta));

console.log(studenteInput);

classe.push(studenteInput);

console.log(classe);

console.log(classe[classe.length-1]);
// -----------------------------------------------------------------------------
