let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));
alert(gauche) //Nous permet d'afficher les coordonnées de la balle quand on accède à la page


setInterval(function(){
    //On défini pour la balle des paramètres de mouvement
    gauche=gauche+1; 
    haut=haut+0.5;
    $("#balle").css("left",gauche);
    $("#balle").css("top",haut);
}, 10);
