/* Fonctionnalité 1 : */

let footer = document.getElementsByTagName('footer')[0];

/*var OnClick = function() {
  alert('Vous avez cliquer sur le footer !');
};

footer.addEventListener('click', OnClick);
 */

/* Fonctionnalité 1BIS : */
let i = 1
var OnClick = function() {
  alert(`Clic numéro ${i} sur le footer !`);
  i++
};

footer.addEventListener('click', OnClick);

/* Fonctionnalité 2 : */
let navHamburger = document.getElementById('navbarHeader');
let bntHamburger = document.getElementsByClassName('navbar-toggler')[0];

let hamburgerOnClick = function() {
  navHamburger.classList.toggle('collapse');
};

bntHamburger.addEventListener('click', hamburgerOnClick);

/* Fonctionnalité 3 */

let btnCard = document.querySelector('.btn.btn-sm.btn-outline-secondary');
let textCard = document.querySelector('.card-text');

let textInRedOnClick = function () {
  textCard.style.color = 'red';
};

btnCard.addEventListener('click', textInRedOnClick);


/* Fonctionnalité 4 */

let btnCard4 = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[1];
let textCard4 = document.querySelectorAll('.card-text')[1];

let textInRedOnClick4 = function () {
  if (textCard4.style.color === 'green'){
    textCard4.style.color = '' ;
  } else {
    textCard4.style.color = 'green';
  }
};


btnCard4.addEventListener('click', textInRedOnClick4)

/* Fonctionnalité 5 */

let css = document.getElementsByTagName('link')[0];
let navbar = document.getElementsByClassName('navbar')[0];


let removeBootstrap = function() {
  if (document.getElementsByTagName('link')[0]) {
    css.parentNode.removeChild(css);
  } else {
    document.head.appendChild(css);
  }
}

navbar.addEventListener('dblclick', removeBootstrap)