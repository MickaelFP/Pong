//On défini les paramètres de la balle
let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));

// On créait une nouvelle fonction afin de definir les mouvents de la balle et de la raquette
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let raquetteGauche = new Raquette($("#gauche"));
let raquetteDroite = new Raquette($("#droite"));
raquetteDroite.changeDirection();

setInterval(function(){

//On créait une boucle pour les fonction précédentes
    balle.majHTML();

    balle.bouger();
    
    raquetteGauche.bouger();
        
    raquetteDroite.bouger();

}, 10);
