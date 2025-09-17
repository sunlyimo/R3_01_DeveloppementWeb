/* Exercice 1 : Créez un objet personne avec les propriétés vous concernant suivantes :
prenom, nom, age, ville
Affichez les propriétés prenom, nom, age et ville de l'objet personne dans
des console.log() séparés.*/

let personne = { prenom: "Titouan", nom: "Macré", age: 19, ville: "Ifs" }
console.log(personne)


/*Exercice 2 :
Créez un tableau personnes contenant les objets suivants :
- {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"}
- {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"}
- {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}
Affichez le tableau personnes dans la console avec log() et table().*/

let personnes = [
    { prenom: "John", nom: "Doe", age: 25, ville: "Rouen" },
    { prenom: "Jane", nom: "Doe", age: 30, ville: "Paris" },
    { prenom: "Jim", nom: "Doe", age: 35, ville: "Caen" }
]

for (let i = 0; i <= 2; i++) {
    console.log(personnes[i])
}


/* Exercice 3 :
Ajoutez un objet à la fin du tableau personnes avec la méthode push() :
- {prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"}
Affichez le tableau personnes dans la console avec log() et table().*/

personnes.push({prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"})

for (let i = 0; i <= 3; i++) {
    console.log(personnes[i])
}


/* Exercice 4 :
Modifiez le premier objet du tableau personnes en utilisant la syntaxe
suivante : personnes[0].prenom = "Jean"
Supprimez le deuxième objet du tableau personnes en utilisant la
méthode splice()
Affichez le tableau personnes dans la console avec log() et table().*/

personnes[0].prenom = "Jean"
for (let i = 0; i <= 3; i++) {
    console.log(personnes[i])
}


/* Exercice 5 :
Créez un tableau contenant les nombres de 1 à 10.
- Affichez le premier élément du tableau.
- Affichez le dernier élément du tableau.
- Affichez la longueur du tableau.*/

let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Premier element du tableau: " + nombres[0])
console.log("Dernier element du tableau: " + nombres[nombres.length - 1])
console.log("Taille du tableau: " + nombres.length)


/*Exercice 6 :
Créez un tableau contenant les chiffres de 10 à 100 de 10 en 10.
- Affichez le tableau.
- Inversez le tableau avec la méthode reverse() puis affichez le tableau.*/

let dizaines = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(dizaines)
dizaines.reverse()
console.log(dizaines)


/*Exercice 7 :
Créez un tableau numbers = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ]
- Affichez le tableau.
- Triez le tableau avec la méthode sort() puis affichez le tableau.*/

let numbers = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ]
console.log(numbers)
numbers.sort()
console.log(numbers)

/*Exercice 8 :
En repartant du tableau numbers trié :
- Ajoutez le nombre 11 à la fin du tableau avec la méthode push().
- Affichez le tableau.
- Ajoutez le nombre 0 au début du tableau avec la méthode unshift().
- Affichez le tableau.
- Supprimez le dernier élément du tableau avec la méthode pop().
- Affichez le tableau.*/

numbers.push(11)
console.log(numbers)
numbers.unshift(0)
console.log(numbers)
numbers.pop()
console.log(numbers)

