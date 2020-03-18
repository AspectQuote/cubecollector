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
//Normal
adam = new Bot('cf', 'Adam', 'Normal')
andy = new Bot('fair', 'Andy', 'Normal')
chris= new Bot('fair', 'Chris', 'Normal')
colin= new Bot('cf', 'Colin', 'Normal')
dennis= new Bot('fair', 'Dennis', 'Normal')
doug = new Bot('fair', 'Doug', 'Normal')
duffy = new Bot('sniper', 'Duffy', 'Normal')
gary = new Bot('lowballer', 'Gary', 'Normal')
greg = new Bot('fair', 'Greg', 'Normal')
ian = new Bot('sniper', 'Ian', 'Normal')
jerry = new Bot('fair', 'Jerry', 'Normal')
jon = new Bot('fair', 'Jon', 'Normal')
keith = new Bot('fair', 'Keith', 'Normal')
mark = new Bot('cf', 'Mark', 'Normal')
matt = new Bot('fair', 'Matt', 'Normal')
mike = new Bot('lowballer', 'Mike', 'Normal')
nate = new Bot('fair', 'Nate', 'Normal')
paul = new Bot('fair', 'Paul', 'Normal')
scott = new Bot('fair', 'Scott', 'Normal')
steve = new Bot('fair', 'Steve', 'Normal')
tom = new Bot('fair', 'Tom', 'Normal')
yahn = new Bot('sniper', 'Yahn', 'Normal')
//tough
adrian = new Bot('sniper', 'Adrian', 'Tough')
bank = new Bot('sniper', 'Bank', 'Tough')
brad = new Bot('fair', 'Brad', 'Tough')
connor = new Bot('fair', 'Connor', 'Tough')
dave = new Bot('lowballer', 'Dave', 'Tough')
dan = new Bot('fair', 'Dan', 'Tough')
derek = new Bot('fair', 'Derek', 'Tough')
don = new Bot('lowballer', 'Don', 'Tough')
eric = new Bot('fair', 'Eric', 'Tough')
erik = new Bot('fair', 'Erik', 'Tough')
finn = new Bot('cf', 'Finn', 'Tough')
jeff = new Bot('fair', 'Jeff', 'Tough')
kevin = new Bot('sniper', 'Kevin', 'Tough')
reed  = new Bot('fair', 'Reed', 'Tough')
rick  = new Bot('fair', 'Rick', 'Tough')
ted = new Bot('lowballer', 'Ted', 'Tough')
troy = new Bot('fair', 'Troy', 'Tough')
wade = new Bot('cf', 'Wade', 'Tough')
wayne = new Bot('fair', 'Wayne', 'Tough')
xander = new Bot('cf', 'Xander', 'Tough')
xavier = new Bot('sniper', 'Xavier', 'Tough')
//hard
brian = new Bot('fair', 'Brian', 'Hard')
chad = new Bot('fair', 'Chad', 'Hard')
chet = new Bot('cf', 'Chet', 'Hard')
gabe = new Bot('lowballer', 'Gabe', 'Hard')
hank = new Bot('fair', 'Hank', 'Hard')
ivan = new Bot('sniper', 'Ivan', 'Hard')
jim = new Bot('cf', 'Jim', 'Hard')
joe = new Bot('fair', 'Joe', 'Hard')
john = new Bot('lowballer', 'John', 'Hard')
tony = new Bot('fair', 'Tony', 'Hard')
tyler = new Bot('cf', 'Tyler', 'Hard')
victor = new Bot('fair', 'Victor', 'Hard')
vladimir = new Bot('sniper', 'Vladimir', 'Hard')
zane = new Bot('fair', 'Zane', 'Hard')
zim = new Bot('lowballer', 'Zim', 'Hard')
//very hard
cory = new Bot('fair', 'Cory', "Very Hard")
quinn = new Bot('sniper', 'Quinn', "Very Hard")
seth = new Bot('cf', 'Seth', "Very Hard")
vinny = new Bot('lowballer', 'Vinny', "Very Hard")
//expert
arnold = new Bot('fair', 'Arnold', "Expert")
brett = new Bot('lowballer', 'Brett', "Expert")
kurt = new Bot('fair', 'Kurt', "Expert")
kyle = new Bot('sniper', 'Kyle', "Expert")
moe = new Bot('cf', 'Moe', "Expert")
quade = new Bot('fair', 'Quade', "Expert")
quintin = new Bot('fair', 'Quintin', "Expert")
ringo = new Bot('sniper', 'Ringo', "Expert")
rip = new Bot('cf', 'Rip', "Expert")
zach = new Bot('lowballer', 'Zach', "Expert")
//elite
cliffe = new Bot('fair', 'Cliffe', "Elite")
crusher = new Bot('sniper', 'Crusher', "Elite")
gunner = new Bot('fair', 'Gunner', "Elite")
minh = new Bot('lowballer', 'Minh', "Elite")
garret = new Bot('fair', 'Garret', "Elite")
pheonix = new Bot('cf', 'Pheonix', "Elite")
ridgway = new Bot('fair', 'Ridgway', "Elite")
rock = new Bot('fair', 'Rock', "Elite")
shark = new Bot('lowballer', 'Shark', "Elite")
steel = new Bot('fair', 'Steel', "Elite")
stone = new Bot('sniper', 'Stone', "Elite")
wolf = new Bot('cf', 'Wolf', "Elite")
vitaliy = new Bot('sniper', 'Vitaliy', "Elite")
zed = new Bot('fair', 'Zed', "Elite")
