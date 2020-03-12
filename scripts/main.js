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
		$("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
	}
})
$("#caseopenbutton").click(function(){
	if (user.boxes[selectedbox.boxid].amount >= 1 && spincooldown == false) {
		user.boxes[selectedbox.boxid].amount -= 1
		unbox(selectedbox)
	} else {
		console.log("ERROR! USER DOES NOT HAVE THE APPROPRIATE BOXES")
	}
})
function updatemoneydisplay(){
	$("#moneyamount").html("Money: $"+returnusermoneystring())
}
function returnusermoneystring(){
	moneyword = JSON.stringify(user.money)
	fancymoneyword = ''
	for(i=0; moneyword.length-2 > i; i++) {
		fancymoneyword += moneyword[i]
	}
	return fancymoneyword
}
$("#getmoneybutton").click(function(){
	user.money += 1000
	updatemoneydisplay()
})
