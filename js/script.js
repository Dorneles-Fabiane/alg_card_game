//Array delcaration
var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var suits = ["D", "H", "S", "C"];
var vPlayer = [];
var vComputer = [];
var deck = new Array();

var c = 0;

//Create an array to unite the cards and suits.
function getDeck() {

	for(var posS = 0; posS < suits.length; posS++)
	{
    //populate the deck Array with the objects (cards + suits)
		for(var posC = 0; posC < cards.length; posC++)
		{
			var card = (cards[posC] + suits[posS]); 
      deck.push(card);
		}
	}
	return deck;
}

//Select a card randomly and show it on the screen
function selectCards() {

  playerCardImg = document.querySelector('div#playerCardImg');
  var imgP = document.createElement('img');

  imgP.setAttribute('id','img');
  imgP.setAttribute('width',172);
  imgP.setAttribute('height',264);

  computerCardImg = document.querySelector('div#computerCardImg');
  var imgC = document.createElement('img');

  imgC.setAttribute('id','img');
  imgC.setAttribute('width',172);
  imgC.setAttribute('height',264);

  let result = document.querySelector("pre#result")

  if (c < 10) { //display cards randomly selected
    var index = getRandomNumber(0, deck.length-1);
    var card = deck[index];
  
    playerCardImg.innerHTML = "";
    imgP.setAttribute('src', 'img/' + card + '.png');
    playerCardImg.appendChild(imgP);

    deck.splice(deck.indexOf(card), 1);
    vPlayer.push(Number(card.replace(/\D+/g, ""))) //Add the value of the card to the players array

    var index = getRandomNumber(0, deck.length-1);
    var card = deck[index];
  
    computerCardImg.innerHTML = "";
    imgC.setAttribute('src', 'img/' + card + '.png');
    computerCardImg.appendChild(imgC);

    deck.splice(deck.indexOf(card), 1);
    vComputer.push(Number(card.replace(/\D+/g, "")));

    if (vPlayer[c] > vComputer[c]) {
      result.textContent = `Player win!`;
    }
    else if (vPlayer[c] < vComputer[c]) {
      result.textContent = `Computer win!`;
    }
    else {
      result.textContent = `It's a tie!`;
    }
    c++;
  }
  else {
    //show results
    result.innerHTML = `Score: ${storsData(vPlayer, vComputer)}`;
  }
}
/* ------------ */

function storsData (vPlayer, vComputer){
  let playerScore = 0;
  let computerScore = 0;
  let ties = 0;
  var res = "";

  for (pos in vPlayer) {
    if (vPlayer[pos] > vComputer[pos]) {
      playerScore++;
    }
    else if (vPlayer[pos] < vComputer[pos]) {
      computerScore++;
    }
    else {
      ties++;
    }
  }
  res += `\nPlayer Score ${playerScore}\nComputer Score ${computerScore}\nTies ${ties}`
  return res;
}

function getRandomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function load() {
	deck = getDeck();
}

window.onload = load;

btnSelectCard = document.querySelector('button#btnSelectCard');
btnSelectCard.addEventListener('click', selectCards);