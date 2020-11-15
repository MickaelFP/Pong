// On créait une classe pour définir les paramètres du terrain
class Terrain{
    constructor($element){
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();
    }
    
    // On ajoute une classe que l'on retire par la suite
    tilt()
    {
       
        this.$element.addClass("tilt");
        let ici = this;

        setTimeout(
            function()
            {
                ici.$element.removeClass("tilt");
            },200
        );
    }
}
