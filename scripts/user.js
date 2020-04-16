user = {
	money: 1000,
	boxes: [],
	inventory: [],
	name: "Player",
	betitems: []
}
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
