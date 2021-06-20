// declaration des variables 

let globalScore, roundScore, diceScore, numberPlayer, activePlayer, activeGame

// Ajout de la fonction nouvelle partie au bouton nouvelle partie
document.getElementById('nouvellePartie').addEventListener('click', newGame)

// Ajout de la fonction pour lancer le dé au click sur le bouton lancer le dé 
document.getElementById('lancerLeDe').addEventListener('click', function() {
    if(activeGame) {
        diceScore = Math.trunc(Math.random() * 6 + 1);
        roundScore[activePlayer] = parseInt(document.getElementById('round-score-joueur-' + numberPlayer[activePlayer]).textContent, 10);
        if(diceScore != 1) {
            document.getElementById('resultatLance').src = '../images/' + diceScore + '.png';
            roundScore[activePlayer] += diceScore;
            document.getElementById('round-score-joueur-' + numberPlayer[activePlayer]).textContent = roundScore[activePlayer];
        } else {
            document.getElementById('resultatLance').src = '../images/' + diceScore + '.png';
            document.getElementById('round-score-joueur-' + numberPlayer[activePlayer]).textContent = roundScore[activePlayer];
            changePlayer();
            alert('Joueur suivant')
        }
    }
})
// ajout de la fonction pour sauvegarder le score au click sur le bouton sauvegarder 
document.getElementById('sauvegarderLeScore').addEventListener('click',function() {
    if (activeGame && roundScore[activePlayer] != 0) {
        globalScore[activePlayer] += roundScore[activePlayer];
        document.getElementById('global-score-joueur-' + numberPlayer[activePlayer]).textContent = globalScore[activePlayer];
        winGame()
    }
}
)

