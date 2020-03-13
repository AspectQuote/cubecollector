function randomnumber(max) {
	return Math.floor(Math.random()*max)+1
}
function randomarray(arraylength) {
	return Math.floor(Math.random()*arraylength)
}
white = "white"
light_green = "light green"
green = "green"
blue = "blue"
purple = "purple"
orange = "orange"
red = "red"
black = "black"
moneyword = ''
fancymoneyword = ''

window.alert("Double Click to sell items")
$("#casebuybutton").click(function(){
	if (user.money >= selectedbox.price) {
		user.boxes[selectedbox.boxid].amount += 1
		user.money -= selectedbox.price;
		updatemoneydisplay()
		$("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
	}
})
$("#caseopenbutton").click(function(){
	if (user.boxes[selectedbox.boxid].amount >= 1 && spincooldown == false && user.inventory.length < 200) {
		user.boxes[selectedbox.boxid].amount -= 1
		unbox(selectedbox)
	} else {
		console.log("ERROR! USER DOES NOT HAVE THE APPROPRIATE BOXES")
	}
})
function updatemoneydisplay(){
	$("#moneyamount").html("Money: $"+(user.money/100).toLocaleString())
}
$("#getmoneybutton").click(function(){
	user.money += 1000
	savegame()
	updatemoneydisplay()
})
function checklocalstorage(){
	if(typeof localStorage.getItem("user") == 'object'){ // if user doesnt have a save
		savegame()
		console.log('saved game for first time startup')
	} else {
		loadsave()
		console.log('loaded save game')
	}
}
function savegame(){
	/* localStorage.setItem("usermoney", user.money)
	localStorage.setItem("userboxes", user.boxes)
	localStorage.setItem("userinventory", user.inventory) */
	localStorage.setItem("user", JSON.stringify(user))
}
function loadsave(){
	/* user.money = localStorage.getItem("usermoney")
	user.boxes = localStorage.getItem("userboxes")
	user.inventory = localStorage.getItem("userinventory") */
	user = JSON.parse(localStorage.getItem("user"))
}
