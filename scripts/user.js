user = {
	money: 1000,
	boxes: [],
	inventory: [],
	name: "Player",
	betitems: []
}
function constructplayersboxes(boxes) {
	user.boxes = boxes
}
function getaverageinventoryvalue() {
	return getplayerinventoryvalue()/user.inventory.length
}
