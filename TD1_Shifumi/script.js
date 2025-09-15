/* Exo 1: Déclarez une variable pour stocker une température en degrés Celsius.
Convertissez cette température en degrés Fahrenheit en utilisant la
formule : F = C * 9/5 + 32.
Affichez la température en degrés Celsius et Fahrenheit.*/
let celcius = 20;
let fahrenheit = celcius * 9 / 5 + 32;
console.log(celcius);
console.log(fahrenheit);

/* Exo 5: ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true)
Est-ce true ?*/
console.log(((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true));
// oui c'est vrai

/* Exo 6: Exercice 6 :
Déclarez deux variables pour stocker le poids en kilogrammes et la taille
en mètres d'une personne.
Calculez l'indice de masse corporelle (IMC) en utilisant la formule :
IMC = poids / (taille * taille).
Affichez l'IMC avec deux décimales.
NB : vous pouvez vous aider de la méthode toFixed().*/
let poids = 75;
let taille = 1.80;
let IMC = Math.round(poids / Math.pow(taille, 2) * 100) / 100;
console.log(IMC)

/* Exo 7: Déclarez une constante pour le montant minimum de commande pour la
livraison gratuite.
Déclarez une variable pour le montant total de la commande.
Si le montant total est supérieur ou égal au montant minimum, affichez
"Livraison gratuite !".
Sinon, affichez "Frais de livraison : X euros".*/
const seuil_gratuit = 50
let total = 49
if (total >= seuil_gratuit) {
    console.log("Livraison gratuite !")
} else {
    console.log("Fras de livrason : X euros")
}

/* Exo 8: Déclarez une variable pour stocker un nombre binaire en String
Convertissez cette variable en décimal en utilisant la fonction parseInt().
Affichez le nombre binaire et sa conversion décimale.*/
let binaire = "010011010101011"
let decimal = parseInt(binaire, 2)
console.log("Binaire: "+binaire)
console.log("Décimal: "+decimal)















document.addEventListener("DOMContentLoaded", function () {
    console.log("La page a fini de charger");
})