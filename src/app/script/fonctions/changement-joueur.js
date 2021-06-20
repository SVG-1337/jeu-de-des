function changePlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
        resetRoundScores();
        document.getElementById('joueur1Actif').style.display = 'none';
        document.getElementById('joueur2Actif').style.display = 'inline-flex';
    } else {
        activePlayer = 0;
        resetRoundScores();
        document.getElementById('joueur1Actif').style.display = "inline-flex";
        document.getElementById('joueur2Actif').style.display = "none"
    }
}