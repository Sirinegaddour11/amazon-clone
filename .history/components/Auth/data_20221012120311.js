
Trouvez les détails des utilisateurs attendus en faisant correspondre les noms d'utilisateur.
Si aucune correspondance n'est trouvée, ajoutez le message d'erreur " nom d' utilisateur invalide "
sinon validez le mot de passe, affichez le message d'erreur « mot de passe invalide » si la validation échoue.
setIsSubmitted(true) si toutes les validations réussissent.
// User Login info
  const database = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
];

const errors = {
  uname: "invalid username",
  pass: "invalid password"
};