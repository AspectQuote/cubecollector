function randomnumber(max) {
	return Math.floor(Math.random()*max)+1
}
function randomarray(arraylength) {
	return Math.floor(Math.random()*arraylength)
}
document.addEventListener('contextmenu', event => event.preventDefault());
white = "white"
light_green = "light green"
green = "green"
blue = "blue"
purple = "purple"
orange = "orange"
red = "red"
black = "black"
yellow = "yellow"
moneyword = ''
fancymoneyword = ''
loadingflavors = [
	'Stacking the cubes',
	'Counting the cubes',
	'Trading the cubes up',
	'Writing the Cubepedia',
	'Admiring the cubes',
	'Unboxing Cube Series #2',
	'Unboxing a light green cube',
	'Manufacturing more cubes',
	'Probably something to do with cubes',
	'Pressing Ctrl+W',
	'Clicking a bunch of times',
	'Losing a Coinflip',
	'Winning a Coinflip',
	'Losing a Jackpot',
	'Winning a Jackpot',
	'Palette-swapping the cubes',
	'Offending the cubes',
	'Aspect says thanks!',
	'Join our discord!',
	"I didn't make this loading animation",
	"Also try csgoclicker.net!",
	'Adding more cubes',
	'Reading search history',
	'Not sending your personal info to dubai',
	'Wasting my life on video games',
	'There are three periods next to this sentence',
	'The cops cannot see you if you do not move',
	'Removing 40% of the sodium',
	'Adding 20% more autism',
	'Removing all the headcrabs',
	'Banning IvanTheSpaceBiker',
	'Not taking fall damage',
	'Aiming for the head inflicts critical damage',
	'Cooking more biscuits',
	'Asking if we are there yet',
	'Becoming self aware',
	'Googling the answers to the SAT',
	'Getting baited',
	'Not unlocking any achievements',
	'Deleting all the cubes'
]
$("#loadingflavortext").html(loadingflavors[randomarray(loadingflavors.length)]+"... <br/><br/> LOADING")
$("#homewrapper").hide()
$("#achievementwrapper").hide()
$("#unboxingwrapper").hide()
$("#tradeupswrapper").hide()
$("#settingswrapper").hide()
$("#jpwrapper").hide()
$("#profilewrapper").hide()
$("#questswrapper").hide()
$("#skillpointswrapper").hide()
$("#cubepediawrapper").hide()
$("#coinflipwrapper").hide()
$("#casebuybutton").click(function(){
	if (user.money >= selectedbox.price) {
		user.boxes[selectedbox.boxid].amount += 1
		user.money -= selectedbox.price;
		updatemoneydisplay()
		updateboxesdisplay()
		$("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
	}
})
function updatemoneydisplay(){
	$("#moneyamount").html("$"+(user.money/100).toLocaleString())
}
moneycooldown = window.setInterval(function(){
	moneycooldown = false
}, 100)
function checklocalstorage(){
	if(typeof localStorage.getItem("user") == 'object'){ // if user doesnt have a save
		savegame()
		console.log('saved game for first time startup')
	} else {
		loadsave()
		if (user.name == undefined) {
			user.name == "Player"
		}
		user.bet = 0
		user.betitems = []
		console.log('loaded save game')
	}
}
function savegame(){
	localStorage.setItem("user", JSON.stringify(user))
	localStorage.setItem("cfs", JSON.stringify(allcoinflips))
}
function loadsave(){
	user = JSON.parse(localStorage.getItem("user"))
	allcoinflips = JSON.parse(localStorage.getItem("cfs"))
	cfid = Math.max.apply(Math, allcoinflips.map(function(o) { return o.cfid; }))+1 || 0
	if (cfid == -Infinity || cfid == Infinity) {
		cfid = 0
	}
	if (user.boxes.length != allboxes.length) {
		while (user.boxes.length < allboxes.length) {
			user.boxes.push({box: allboxes[user.boxes.length], amount: 0})
		}
	}
	user.inventory = user.inventory.filter(slot => slot.suffix == undefined)
	if (user.exp == undefined) {user.exp = 0;}
	if (user.skillpoints == undefined) {user.skillpoints = 0;}
	if (user.pfp == undefined) {user.pfp = "sprites/cube16x16temp.png"}
	if (user.sellbelowprice == undefined) { user.sellbelowprice = 100;}
	if (user.name == undefined) {user.name = "Player";}
	if (user.stats == undefined) {
		user.stats = {};
		user.stats.blacksunboxed = 0
		user.stats.unboxes = 0
		user.stats.jackpotswon = 0
		user.stats.cfswon = 0
		user.stats.bestcube = {price: 0}
		user.stats.tradeups = 0
	}
	if (user.maxinventory == undefined) {user.maxinventory = 200;}
	if (user.spinspeed == undefined) {user.spinspeed = 6;}
	if (user.mpcvariation == undefined) {user.mpcvariation = 25;}
	if (user.achievements == undefined) {user.achievements = []}
	if (user.foundcubes == undefined) {user.foundcubes = []}
	if (user.questscompleted == undefined) {user.questscompleted = 0}
	if (allcoinflips == null) {
		allcoinflips = []
	}
	if (user.featureditems == undefined) {user.featureditems = [false, false, false, false, false, false];}
	allcoinflips = allcoinflips.filter(coinflip => coinflip.winningside.name == undefined && coinflip.countdown == 0)
	if (user.level == undefined) {user.level = 0}
	applyprefixestouserinventory()
	updateprofiledisplay()
	updateinventorydisplay()
}
function resetsave() {
	user = {
		money: 1000,
		boxes: [],
		inventory: [],
		name: "Player",
		betitems: []
	}
	allcoinflips = []
	savegame()
	location.reload()
}
tryforjackpot = window.setInterval(function(){
	if (randomnumber(20) == 1 && jpgoing == false) { // a 5% chance for the bots to start a JP every 3 seconds, an average of 1 minute between jps
		startjackpot(8)
	}
}, 1000)
$("#getmoneybutton").click(function(){
	if (moneycooldown == false) {
		user.money += randomnumber(user.mpcvariation)
		savegame()
		updatemoneydisplay()
		moneycooldown = true
	}
})
$("#caseopenbutton").click(function(){
	if (user.boxes[selectedbox.boxid].amount >= 1 && spincooldown == false && user.inventory.length < user.maxinventory) {
		user.boxes[selectedbox.boxid].amount -= 1
		unbox(selectedbox)
		updateboxesdisplay()
	} else {
		console.log("ERROR! USER DOES NOT HAVE THE APPROPRIATE BOXES")
	}
})
$("#inventoryselling").click(function(){
	sellallbelow(user.sellbelowprice)
})
$("#inventorysortlh").click(function(){
	sortinventory("lh")
})
$("#inventorysorthl").click(function(){
	sortinventory("hl")
})
