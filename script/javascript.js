var Hamburger = document.querySelector("button") /* HTML-element geselecteerd dat is gemarkeerd als een button-element. */

var headerLijst = document.querySelector("header ul") /*HTML- element dat zich binnen het header-element bevindt en het type ul (ongeordende lijst) heeft. */

var menuImg = document.querySelector("header button img") /* HTML-element geselecteerd dat zich binnen het header-element bevindt en een img-element is binnen een button */


Hamburger.onclick = function () { /* de code binnen de functionele blok tussen {} zal worden uitgevoerd wanneer de knop wordt geklikt. dus de if else */

    headerLijst.classList.toggle("menuopen"); /* voor het weergeven en verberegen van het menu "menuopen" staat in connectie met de css  */

        if (headerLijst.classList.contains("menuopen")) { /* IF hier wordt gecontroleerd of de klasse "menuopen" aanwezig is in het headerLijst-element. Als dat het geval is, wordt de code uitgevoerd. */

            menuImg.src="images/close.png" /* als er op de knop word gedrukt, dan verschijnt er een kruis ipv het hamburgermenu en klapt er een menu uit */
        }

        else { /* ELSE als het menu is gesloten, wordt de kruis verranderd naar het hamburgermenu. */
            menuImg.src="images/hamburgermenu.svg" 
        }

}