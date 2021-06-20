// declaration des variables 

let globalScore, roundScore, diceScore, numberPlayer, activePlayer, activeGame

// Il me faut une fonction pour une nouvelle partie, une pour reset les scores du round actuel, 
// une pour changer de joueur et une pour verifier si la partie est terminée


function newGame() {
    globalScore = [0, 0]; // les scores globaux sont initialisés à 0 pour les deux joueurs  
    roundScore = [0, 0];// les scores par round sont initialisés à 0 pour les deux joueurs  
    diceScore = 0; // le résultat du dé par défaut est de 0
    numberPlayer = [1, 2]; // On a deux joueurs (joueur 1 et joueur 2);
    activePlayer = 0; // Le joueur actif par défaut sera 0 donc joueur 1;
    activeGame = true; // On enclenche la partie donc je passe la variable a true 

    // je recupere les scores globaux et round pour les initaliser à 0 et j'affiche la pastille du joueur 1
    document.getElementById('global-score-joueur-1').textContent = 0;
    document.getElementById('global-score-joueur-2').textContent = 0;
    document.getElementById('round-score-joueur-1').textContent = 0;
    document.getElementById('round-score-joueur-2').textContent = 0;
    document.getElementById('joueur1Actif').style.display = "inline-flex";
    document.getElementById('joueur2Actif').style.display = "none"


    console.log(globalScore + '\n')
    console.log(roundScore + '\n')
    console.log(diceScore + '\n')
    console.log(numberPlayer + '\n')
    console.log(activePlayer + '\n')
    console.log(activeGame + '\n')
}

function resetRoundScores() {
    roundScore = [0, 0]
    diceScore = 0;
    document.getElementById('round-score-joueur-1').textContent = 0;
    document.getElementById('round-score-joueur-2').textContent = 0;  
}

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

function winGame() {
    if (globalScore[activePlayer] >= 100) {
        alert('Le joueur' + numberPlayer[activePlayer]); 
        newGame();
        return true;
    } else {
        changePlayer()
    }
}


