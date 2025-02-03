const email = "test.test@email.com";

module.exports = {
  // 1) Séparer l'email en deux parties au niveau du caractère '@', renvoyer le tableau correspondant
  Q1() {
    // Implémentation ici
    return email.split('@');
  },

  // 2) Vérifier qu'il n'y a qu'un seul caractère '@' dans email. Renvoyer un booléen
  Q2() {
    // Implémentation ici
    return email.split('@').length === 2;
  },

  // 3) Renvoyer l'index du caractère '@'
  Q3() {
    // Implémentation ici
    return email.split('@').length === 2;
  },

  // 4) Renvoyer la sous-chaîne se situant après le caractère '@'
  Q4() {
    // Implémentation ici
    return email.substring(email.indexOf('@') + 1);
  },

  // 5) Renvoyer la variable en majuscule
  Q5() {
    // Implémentation ici
    return email.toUpperCase();
  },

  // 6) Renvoyer le type de la variable email
  Q6() {
    // Implémentation ici
    return typeof email;
  },

  // 7) Changez email.com par gmail.com, renvoyez la chaine modifiée
  Q7() {
    // Implémentation ici
    return email.replace("email.com", "gmail.com");
  }
};