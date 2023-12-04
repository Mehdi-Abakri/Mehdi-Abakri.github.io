const app = {
    // méthode init() : initialise le module app et toute l'application
    init: function() {
        // pour debug
        console.log("app : init");

        // quand l'application s'initialise, on initialise tous nos autres modules !
        theme.init();
    },

};

//* quand le DOM est complètement chargé, l'événement DOMContentLoaded se déclenche
document.addEventListener('DOMContentLoaded', app.init);