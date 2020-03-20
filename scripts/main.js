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

$("#casebuybutton").click(function(){
	if (user.money >= selectedbox.price) {
		user.boxes[selectedbox.boxid].amount += 1
		user.money -= selectedbox.price;
		updatemoneydisplay()
		updateboxesdisplay()
		$("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
	}
})
$("#caseopenbutton").click(function(){
	if (user.boxes[selectedbox.boxid].amount >= 1 && spincooldown == false && user.inventory.length < 200) {
		user.boxes[selectedbox.boxid].amount -= 1
		unbox(selectedbox)
		updateboxesdisplay()
	} else {
		console.log("ERROR! USER DOES NOT HAVE THE APPROPRIATE BOXES")
	}
})
function updatemoneydisplay(){
	$("#moneyamount").html("Money: $"+(user.money/100).toLocaleString())
}
moneycooldown = window.setInterval(function(){
	moneycooldown = false
}, 100)
$("#getmoneybutton").click(function(){
	if (moneycooldown == false) {
		user.money += randomnumber(500)
		savegame()
		updatemoneydisplay()
		moneycooldown = true
	}
})
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
	if (user.boxes.length != allboxes.length) {
		while (user.boxes.length < allboxes.length) {
			user.boxes.push(allboxes[user.boxes.length-1])
		}
	}
	if (user.sellbelowprice == undefined) { user.sellbelowprice = 100;}
	if (user.name == undefined) { user.name = "Player";}
	for (var i = 0; i < user.inventory.length; i++) {
		if (user.inventory[i].cube.cubeid) { // removes old cubes without ID's
			user.inventory[i].cube.price = allcubes[user.inventory[i].cube.cubeid].price
		} else {
			user.inventory.splice(i, 1)
		}
	}
	updateinventorydisplay()
}
tryforjackpot = window.setInterval(function(){
	console.log("trying for jackpot...")
	if (randomnumber(20) == 1 && jpgoing == false) { // a 5% chance for the bots to start a JP every 3 seconds, an average of 1 minute between jps
		startjackpot(8)
	}
}, 1000)
$("#inventoryselling").click(function(){
	sellallbelow(user.sellbelowprice)
})
$("#inventorysortlh").click(function(){
	sortinventory("lh")
})
$("#inventorysorthl").click(function(){
	sortinventory("hl")
})
