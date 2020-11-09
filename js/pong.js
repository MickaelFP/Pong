//On défini les paramètres de la balle
let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));

//On fait appel à la class Terrain pour définire des paramètres au terrain: fonction $element
class Terrain{
    constructor($element){
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }
}
//On fait appel à la class Balle pour définire des paramètres à la balle: vitesse
class Balle{
    constructor($html){
        this.$html=$html;
        this.gauche=parseInt($("#balle").css("left"));
        this.haut=parseInt($("#balle").css("top"));
        this.vitesseX=2;
        this.vitesseY=0.5;
    }

    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }
}

let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));

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

    balle.majHTML();

}, 10);