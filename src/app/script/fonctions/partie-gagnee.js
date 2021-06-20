
function winGame() {
    if (globalScore[activePlayer] >= 100) {
        alert('Le joueur' + numberPlayer[activePlayer]); 
        newGame();
        return true;
    } else {
        changePlayer()
    }
}