function Bot(playstyle, name, difficulty) {
	this.playstyle = playstyle
	this.name = name
	this.difficulty = difficulty
	this.bet = 0;
	this.betitems = [];
	this.updatebet = function() {
		this.bet = 0;
		for (i=0; this.betitems.length > i; i++) {
			this.bet += this.betitems[i].cube.price
		}
	}
	switch (this.difficulty) {
		case "Normal":
			normalbots.push(this)
			break;
		case "Tough":
			toughbots.push(this)
			break;
		case "Hard":
			hardbots.push(this)
			break;
		case "Very Hard":
			veryhardbots.push(this)
			break;
		case "Expert":
			expertbots.push(this)
			break;
		case "Elite":
			elitebots.push(this)
			break;
		default:
		unknownbots.push(this)
	}
	switch (this.playstyle) {
		case "sniper":
			sniperbots.push(this)
			break;
		case "fair":
			fairbots.push(this)
			break;
		case "lowballer":
			lowballerbots.push(this)
			break;
		case "cf":
			cfbots.push(this)
			break;
	}
	this.botid=botid
	botid++
	allbots.push(this)
}
botid=0

allbots = []
unknownbots = []
normalbots = []
toughbots = []
hardbots = []
veryhardbots = []
expertbots = []
elitebots = []

sniperbots = []
fairbots = []
lowballerbots = []
cfbots = []

function resetallbotbets() {
	for (i=0; i < allbots.length; i++) {
		allbots[i].bet = 0
	}
}
function resetallbotitems() {
	for (i=0; i < allbots.length; i++) {
		allbots[i].betitems = []
	}
}
// Bot Declarations
//elite
cliffe = new Bot('fair', 'Banned (&beta;)', "Elite")
crusher = new Bot('sniper', 'Roflzilla (&beta;)', "Elite")
gunner = new Bot('fair', 'MUTE (&beta;)', "Elite")
minh = new Bot('lowballer', 'The Zedder (&beta;)', "Elite")
garret = new Bot('fair', 'Arachnix (&beta;)', "Elite")
pheonix = new Bot('sniper', 'AspectQuote (&beta;)', "Elite")
ridgway = new Bot('fair', 'Stupid Guy (&beta;)', "Elite")
rock = new Bot('fair', 'The N-Word Pass (&beta;)', "Elite")
shark = new Bot('lowballer', 'Scum (&beta;)', "Elite")
steel = new Bot('fair', 'Kenny (&beta;)', "Elite")
stone = new Bot('sniper', 'Forrest Gump (&beta;)', "Elite")
wolf = new Bot('fair', 'The Demoman (&beta;)', "Elite")
vitaliy = new Bot('sniper', 'The Scout (&beta;)', "Elite")
zed = new Bot('fair', 'The Spy (&beta;)', "Elite")
croftz = new Bot('sniper', 'Croftz (&beta;)', "Elite")
