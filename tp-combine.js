// Toutes les questions doivent faire appel à cette fonction
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
  return [
    { name: "Thomas", age: "30" },
    { name: "Theo", age: "25" },
    { name: "Philippe", age: "45" },
    { name: "Jeremy", age: "28" },
    { name: "Minnie", age: "50" },
  ];
}

module.exports = {
  // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
  B1() {
    // Implémentation ici
    return getEmployees().filter(person => person.name.endsWith("e"));
  },

  // 2) Trouver la première personne dont l'âge est inférieur à 30
  B2() {
    // Implémentation ici
    return getEmployees().find(person => parseInt(person.age) < 30);
  },

  // 3) Renvoyer l'index où se trouve "Jeremy"
  B3() {
    // Implémentation ici
    return getEmployees().findIndex(person => person.name === "Jeremy");
  },

  // 4) Trier le tableau par âge des personnes
  B4() {
    // Implémentation ici
    return getEmployees().sort((a, b) => parseInt(a.age) - parseInt(b.age));
  },

  // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
  B5() {
    // Implémentation ici
    const tableau = getEmployees();
    tableau.push({ name: "Kasimu", age: "38" });
    return tableau;
  },

  // 6) Renvoyer la longueur du tableau
  B6() {
    // Implémentation ici
    return getEmployees().length;
  },

  // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié
  B7() {
    // Implémentation ici
    return getEmployees().map(person => {
      if (person.name === "Theo") {
        return { ...person, name: person.name.replace("o", "a") };
      }
      return person;
    });
  },

  // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
  B8() {
    // Implémentation ici
    return getEmployees().filter(person => person.name.includes("e"));
  },
};