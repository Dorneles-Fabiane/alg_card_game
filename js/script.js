//Array delcaration
var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var suits = ["D", "H", "S", "C"];
var vPlayer = [];
var vComputer = [];
var deck = new Array();

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
function selectCard () {

  playerCardImg = document.querySelector('div#playerCardImg');
  playerCardImg.style.textAlign = 'center';
  var imgP = document.createElement('img');
  imgP.setAttribute('id','img');
  imgP.setAttribute('width',172);
  imgP.setAttribute('height',264);

  var index = getRandomNumber(0, deck.length-1);
  var card = deck[index];
  
  playerCardImg.innerHTML = "";
  imgP.setAttribute('src', 'img/' + card + '.png');
  playerCardImg.appendChild(imgP);

  deck.splice(deck.indexOf(card), 1);
  vComputer.push(card) //Add the value of the card to the players array
}

function getRandomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function load() {
	deck = getDeck();
}

window.onload = load;