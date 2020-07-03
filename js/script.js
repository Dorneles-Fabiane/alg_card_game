//Array delcaration
var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var suits = ["D", "H", "S", "C"];
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
///////////////////////////////////////////////////////////////////////////


//Select a card randomly and show it on the screen
function selectCard()
{
  response = document.querySelector('div#response');
  res = document.querySelector('div#figura');
  res.style.textAlign = 'center';
  var img = document.createElement('img');
  img.setAttribute('id','cards');
  img.setAttribute('width',172);
  img.setAttribute('height',264);

  var card = getRndInteger(1,13);
  var naipe = makeid (1);
  var cards = card + naipe;
  //response.innerHTML = "\nCarta do Jogador";
  res.innerHTML = "";
  img.setAttribute('src', 'img/' + cards + '.png');

  deck.splice(deck.indexOf(cards), 1);

  res.appendChild(img);
}
/*
function selectCardComputer()
{
  res = document.querySelector('div#figura');
  res.style.textAlign = 'center';
  var img = document.createElement('img');
  img.setAttribute('id','cards');
  img.setAttribute('width',172);
  img.setAttribute('height',264);

  var card = getRndInteger(1,13);
  var naipe = makeid (1);
  var cards = card + naipe;
  res.innerHTML = "";
  img.setAttribute('src', 'img/' + cards + '.png');

  var vet = deck.splice(deck.indexOf(cards), 1);


  alert(cards);
  alert(vet);

  res.appendChild(img);
}
*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function makeid(length) {
    var result = '';
    var characters = 'CDHS';
    var charactersLength = characters.length;
    
    for ( var i = 0; i < length; i++ ) {
       result = characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 function load()
{
	deck = getDeck();
}

window.onload = load;