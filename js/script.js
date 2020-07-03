//Array delcaration
var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var suits = ["D", "H", "S", "C"];
var vPlayer = [];
var vComputer = [];
var deck = new Array();

//Create an array to unite the cards and suits.
function getDeck()
{

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
function selectCard()
{
  playerCardImg = document.querySelector('div#playerCardImg');
  playerCardImg.style.textAlign = 'center';
  var imgP = document.createElement('img');
  imgP.setAttribute('id','cards');
  imgP.setAttribute('width',172);
  imgP.setAttribute('height',264);

  var card = getRndInteger(1,13);
  var naipe = makeid (1);
  var cards = card + naipe;
  playerCardImg.innerHTML = "Player";
  imgP.setAttribute('src', 'img/' + cards + '.png');

  deck.splice(deck.indexOf(cards), 1);

  playerCardImg.appendChild(imgP);
  vPlayer.push(card) //Add de value of the card to the players array


    computerCardImg = document.querySelector('div#computerCardImg');
    computerCardImg.style.textAlign = 'center';
    var imgC = document.createElement('img');
    imgC.setAttribute('id','cards');
    imgC.setAttribute('width',172);
    imgC.setAttribute('height',264);
  
    var card = getRndInteger(1,13);
    var naipe = makeid (1);
    var cards = card + naipe;
    computerCardImg.innerHTML = "Computer";
    imgC.setAttribute('src', 'img/' + cards + '.png');
  
    deck.splice(deck.indexOf(cards), 1);
  
    computerCardImg.appendChild(imgC);
    vComputer.push(card) //Add de value of the card to the computer array
  
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function makeid(length) {
    var playerCardImgult = '';
    var characters = 'CDHS';
    var charactersLength = characters.length;
    
    for ( var cont = 0; cont < length; cont++ ) {
       playerCardImgult = characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return playerCardImgult;
 }

 function load()
{
	deck = getDeck();
}

window.onload = load;
