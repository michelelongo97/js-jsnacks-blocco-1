//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ];

  const nome = prompt('Inserisci il tuo nome');
  let isInvitato = false;

    for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === nome) {
        isInvitato = true;
    }
}

  if (isInvitato) {
    alert(`${nome}, sei invitato alla festa del Grande Gatsby!`);
} else {
    alert(`${nome}, non sei invitato alla festa del Grande Gatsby.`);
}