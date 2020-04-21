user = {
	money: 1000,
	boxes: [],
	inventory: [],
	name: "Player",
	betitems: []
}
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
val=0;
function getplayerinventoryvalue(){
	val=0;
	for (i=0; i < user.inventory.length; i++) {
		val += user.inventory[i].cube.price
	}
	return val
}
function constructplayersboxes(boxes) {
	user.boxes = boxes
}
function getaverageinventoryvalue() {
	return getplayerinventoryvalue()/user.inventory.length
}
function getaverageuserbet() {
	updateusertotalbet()
	return (user.bet/user.betitems.length) || getaverageinventoryvalue()
}
function sortinventory(whichway) {
	switch (whichway) {
		case "hl":
			user.inventory.sort(function (a, b) {
				return b.cube.price - a.cube.price;
			});
			updateinventorydisplay()
			break;
		case "lh":
			user.inventory.sort(function (a, b) {
				return a.cube.price - b.cube.price;
			});
			updateinventorydisplay()
			break;
		default:

	}
}
