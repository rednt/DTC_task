let person = {nom:"Alex",adress:"Paris",age:25};//Q1

//Q2
let valeurs = [];
let somme = 0;
let moy = 0.0;

function summoy(){
    valeurs = prompt("Entrer des valeurs séparée par ',':").split(',').map(Number);
    for(let i = 0; i < valeurs.length;i++){
        somme += valeurs[i];
    }
    moy = somme/valeurs.length;
    document.getElementById('vals').innerHTML = "Les valeurs: "+valeurs.join(" ");
    document.getElementById('dispSum').innerHTML = "Somme: "+somme;
    document.getElementById('dispMoy').innerHTML = "Moyenne: "+moy;
}




