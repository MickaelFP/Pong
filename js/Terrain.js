// On créait une classe pour définir les paramètres du terrain
class Terrain{
    constructor($element){
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();
    }
    
    /* On ajoute des classes que l'on retire par la suite dans le but de faire réagir les bordure.
    Permet donc les limtes et rebonds du terrain en ajoutant également un effet de clignotemant de couleur */

    tiltHaut() {
        //ajouter une classe
        this.$element.addClass("tiltHaut");
        let ici = this;

        setTimeout(
            function () {
                //retirer une classe
                ici.$element.removeClass("tiltHaut");
            }, 200
        );
    }

    tiltBas() {
        //ajouter une classe
        this.$element.addClass("tiltBas");
        let ici = this;

        setTimeout(
            function () {
                //retirer une classe
                ici.$element.removeClass("tiltBas");
            }, 200
        );
    }

    tiltDroite() {
        //ajouter une classe
        this.$element.addClass("tiltDroite");
        let ici = this;

        setTimeout(
            function () {
                //retirer une classe
                ici.$element.removeClass("tiltDroite");
            }, 200
        );
    }

    tiltGauche() {
        //ajouter une classe
        this.$element.addClass("tiltGauche");
        let ici= this;

        setTimeout(
            function () {
                //retirer une classe
                ici.$element.removeClass("tiltGauche");
            }, 200
        );
    }
}