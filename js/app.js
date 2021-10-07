
let notification = document.createElement('div'); //Code pour placer les notifications en haut en droite 
notification.id='notif'
const search_item = document.getElementById('search-item')
search_item.append(notification)

let boutonPanier = document.querySelectorAll('.add-to-cart');
console.log(boutonPanier);
// genere nodelist de chaque class add-to-cart
let nombreCours = document.querySelectorAll('.stock');
console.log(nombreCours);
// genere nodeList de chaque class stock
let boutonVidePanier = document.getElementById('empty-cart');
console.log(boutonVidePanier);
//retrouve le bouton "vider le panier"



 const listAjouter = document.getElementsByClassName("add-to-cart")

const listAcheter = document.querySelectorAll(".course__item")
const listBlockCard = document.getElementsByClassName("info__card")
  

for (let i=0;i<boutonPanier.length;i++){
    //boutonPanier.addEventListener('click', ajoutNotif);
    boutonPanier[i].addEventListener('click', function(event){
      ajoutPanier(i);
  })
} // boucle qui permet de baisser le nombre disponible de cours en fonction des clics



function ajoutPanier(i){

  if (parseInt(nombreCours[i].textContent)>0){
    nombreCours[i].textContent= (parseInt(nombreCours[i].textContent)-1);
  }
  ajoutNotif();
} // fonction qui permet de baisser le nombre disponible de cours

function ajoutNotif(){ // fontion ajouter une notification lors qu'on ajoute un cours 
    let destination = document.querySelector('#notif');
    let para = document.createElement('p');
    para.id = "paratemp"
    para.innerHTML = 'Vous avez ajouté au votre panier';
    search_item.append(para);
    // search_item.appendChild(para);
    //setTimeout(efface, 5000);
    setTimeout(function(){para.remove()}, 5000); //code pour faire dispaître le code après 5 seconde 
  console.log('testest')



}  



function retourPanier(i){
  
  console.log(`l37 i=${i}`);
  //deleteNotif();
  if ((nombreCours[i].textContent)<10){
    nombreCours[i].textContent= (parseInt(nombreCours[i].textContent)+1);
    ;
  }
} // fonction qui permet de rajouter un cours dans les disponibilités










function deleteNotif(){ // fontion ajouter une notification lors qu'on supprime un cours

    let parag = document.createElement('p');
    let dest = document.querySelector('#notif');
    parag.id = "paragtemp"
    parag.innerHTML = 'Vous avez supprimé à votre panier';
    search_item.append(parag);
    // search_item.appendChild(parag);
    setTimeout(function(){parag.remove()}, 5000);//code pour faire dispaître le code après 5 seconde
}




function viderPanier (i){
boutonVidePanier.addEventListener('click', function(event){
  nombreCours[i].textContent = '10';
})
} 
// boucle permettant d'appliquer la fonction viderPanier à chaque cours

for (i=0;i<nombreCours.length;i++){

  viderPanier(i);  }
// fonction qui permet de vider le panier et réaffecter toutes les disponibilités à chaque cours


let list_supprimer = document.querySelectorAll('.add-to-cart');       //sélectionner toutes les class grâce aux querSelectorAll
console.log(list_supprimer);



let newCours = document.createElement('div');  //crée un bloc html grâce a une nouvelle div
    newCours.id = 'divCours';
newCours.innerHTML = `
<div class="course__item">
      <figure class="course_img">
        <img src="img/courses/html5.png">
      </figure>
      <div class="info__card">
        <h4>HTML5</h4>
        <figure class="mark m_2">
          <img src="img/rates.png">
        </figure>
        <p>
          <span class="price">200 €</span>
          <span class="discount">9.99 €</span>
        </p>
        <p>
          Disponible: <span class="stock">10</span>
        </p>
        <a href="#" class="add-to-cart" data-id="3"><i class="fa fa-cart-plus"></i>Ajouter au panier</a>
      </div>
    </div>
    `
listAcheter[4].parentNode.appendChild(newCours);


let list_supprimer1 = document.querySelectorAll('.add-to-cart');
console.log(list_supprimer1)



 for(i=0;i<6;i++){
let btn = document.createElement("BUTTON");    // Crée l'élement "button"
btn.innerHTML = "supprimer du panier";        // Inserer notre texte
listAcheter[i].appendChild(btn); 

btn.id= 'delete${i}';

let boutonSupp = document.getElementById('delete${i}');
  console.log(`l53 i=${i}`);
  boutonSupp.addEventListener('click', function(event){
      retourPanier(i);
  })

  boutonSupp.addEventListener('click', deleteNotif) // code lorsqu'on clique sur supprimer le panier la notification apparaît 
} 