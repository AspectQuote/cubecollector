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
