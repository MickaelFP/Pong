/* On créait une classe pour définir les paramètres du terrain */
class Terrain{
    constructor($element){
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();
    }
}
