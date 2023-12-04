// module thème : permet de switch entre dark/light theme & gestion des thèmes de couleur

const theme = {

    // méthode init : exécutée au chargement de la page
    init: function () {
        // console.log("theme : init");
        // 1. on sélectionne notre bouton lune

        const themeButton = document.querySelector('#theme-switch');
        // 2. on ajoute un écouteur d'évènement dessus
        themeButton.addEventListener("click", theme.changeTheme);

        // 1. on sélectionne TOUS nos boutons qui ont la classe 'theme-button'
        const colorButtons = document.querySelectorAll('.theme-button');
        // vu que querySelectorAll renvoit un tableau, on doit le parcourir !
        for (const button of colorButtons) {
            // 2. on ajoute un écouteur d'évènement dessus
            button.addEventListener('click', theme.handleThemeColorClick);
        }
    }
}