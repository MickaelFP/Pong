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
    
    //On défini pour la balle des paramètres de mouvement
    balle.gauche=balle.gauche+balle.vitesseX; 
    balle.haut=balle.haut+balle.vitesseY;
 
    if(balle.gauche>terrain.largeur){
        balle.gauche=terrain.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.gauche<0){
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut>terrain.hauteur){
        balle.gauche=terrain.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }
    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }
//On créait une boucle pour les fonction précédentes
    balle.majHTML();

    balle.bouger();
    
    raquetteGauche.bouger();
        
    raquetteDroite.bouger();

}, 10);
