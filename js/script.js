//Array delcaration
var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var suits = ["D", "H", "S", "C"];
var vPlayer = [];
var vComputer = [];
var deck = new Array();

var c = 1;

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

  if (c <= 10) {
    var index = getRandomNumber(0, deck.length-1);
    var card = deck[index];
  
    playerCardImg.innerHTML = "";
    imgP.setAttribute('src', 'img/' + card + '.png');
    playerCardImg.appendChild(imgP);

    deck.splice(deck.indexOf(card), 1);
    vPlayer.push(card) //Add the value of the card to the players array

    computerCardImg = document.querySelector('div#computerCardImg');
    var imgC = document.createElement('img');
    imgC.setAttribute('id','img');
    imgC.setAttribute('width',172);
    imgC.setAttribute('height',264);

    var index = getRandomNumber(0, deck.length-1);
    var card = deck[index];
  
    computerCardImg.innerHTML = "";
    imgC.setAttribute('src', 'img/' + card + '.png');
    computerCardImg.appendChild(imgC);

    deck.splice(deck.indexOf(card), 1);
    vComputer.push(card)
    c++
  }
  else {
    alert("tudo ok")
    //mostrar resultados
  }
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