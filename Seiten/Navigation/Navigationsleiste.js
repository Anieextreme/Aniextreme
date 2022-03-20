window.onload = () => {
    const navigationsleiste = document.getElementById("hauptnavigation");
    const unteresEnde = navigationsleiste.offsetTop + navigationsleiste.offsetHeight;
    document.getElementById("hauptbehaelter").style.marginTop = unteresEnde + "px";
}

function navigationUmschalten () {
    const navigationsleiste = document.getElementById("hauptnavigation");
    navigationsleiste.classList.toggle("navigation-geoffnet")
}