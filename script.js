console.log('chargé');

// Menu (en mode hamburger): s’ouvre et se ferme au clic sur le bouton.

const elPanels = document.getElementById( 'panels' );
const elCmdMenu = document.getElementById( 'cmd-menu' );

elCmdMenu.addEventListener( 'click', function(){
    elPanels.classList.toggle( 'opened' );
});

// Validation du formulaire:

const elSubmitForm = document.getElementById('submitForm');

const inputName = document.getElementById('input-name');
const errorName = document.getElementById('errorName');

const inputEmail =document.getElementById('input-email');
const errorEmail = document.getElementById('errorEmail');

const inputMessage = document.getElementById('input-message')
const errorMessage = document.getElementById('errorMessage');


function submitForm (){


    if(inputName.value===""){
    errorName.style.display='block';}

    if(inputEmail.value===""){
    errorEmail.style.display='block';}

    if(inputMessage.value==="")
    {errorMessage.style.display='block'; }
}

elSubmitForm.addEventListener( 'click' , submitForm);
// Au clic sur le bouton, contrôler la saisie de l’utilisateur selon les règles:
// - Nom: Pas vide, pas de chiffres, pas de caractères spéciaux sauf tiret
// - Email: Doit avoir la forme X@X.X (X = un ou plusieurs caractères)
// - Message: Pas vide
// Si la validation échoue les champs erronés sont vidés et leur message d’erreur 
// s’affiche. Si l’utilisateur place le curseur sur un champ erroné, l’erreur disparaît.
// Si la validation réussit la modale de succès s’affiche (on la ferme au clic sur son 
//bouton
