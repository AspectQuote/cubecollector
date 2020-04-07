itemsintradeup = [false, false, false, false, false, false, false, false, false, false]
itemscounttradeup = 0
function deposititemfortradeup(inventoryslot) {
	if(itemsintradeup.filter(item => item != false).length < 10){
		if(itemsintradeup.filter(item => item != false) == 0) {
			$("#tradeupchances").html('')
			itemsintradeup[itemsintradeup.indexOf(false)] = user.inventory[inventoryslot]
			user.inventory.splice(inventoryslot, 1)
			updateinventorydisplay()
			updatetradeupsinputdisplay()
		} else if (itemsintradeup.filter(item => item != false)[0].cube.rarity == user.inventory[inventoryslot].cube.rarity) {
			$("#tradeupchances").html('')
			itemsintradeup[itemsintradeup.indexOf(false)] = user.inventory[inventoryslot]
			user.inventory.splice(inventoryslot, 1)
			updateinventorydisplay()
			updatetradeupsinputdisplay()
		}
	} else {

	}
	savegame()
}
function removeitemfromtradeup(tradeupslot) {
	$("#tradeupchances").html('')
	itemscounttradeup--
	user.inventory.push(itemsintradeup[tradeupslot])
	itemsintradeup[tradeupslot] = false
	updateinventorydisplay()
	updatetradeupsinputdisplay()
	savegame()
}
function resettradeup() {
	itemsintradeup = [false, false, false, false, false, false, false, false, false, false]
	updatetradeupsinputdisplay()
	savegame()
}
function updatetradeupsinputdisplay() {
	for (i=0; itemsintradeup.length > i; i++) {
		if(itemsintradeup[i] != false) {
			$("#tradeupslotimg"+i).attr("src", itemsintradeup[i].cube.image)
			$("#tradeupslotinfo"+i).html(itemsintradeup[i].cube.name)
			$("#tradeupslot"+i).css("border-color", returnraritycolor(itemsintradeup[i].cube.rarity))
			$("#tradeupslot"+i).css("cursor", "pointer")
			createclickabletradeupslot(i, false)
		} else {
			$("#tradeupslotimg"+i).attr("src", "sprites/cube16x16temp.png")
			$("#tradeupslotinfo"+i).html('')
			$("#tradeupslot"+i).css("border-color", "black")
			$("#tradeupslot"+i).css("cursor", "not-allowed")
			createclickabletradeupslot(i, true)
		}
	}
	if (itemsintradeup.filter(item => item != false).length == 10) {
		$("#tradeupconfirmbutton").css("background-color", "#4B8230")
		$("#tradeupconfirmbutton").css("color", "#006817")
		$("#tradeupconfirmbutton").css("cursor", "pointer")
		$("#tradeupconfirmbutton").attr("title", "Consume all 10 items and finish your trade up!")
		$("#chancesforyourtradeup").html("Chances for your trade up: ("+itemsintradeup.filter(cube => cube.prefix != false && cube.prefix != undefined).length*10+"% chance for a prefix)")
		displaytradeupchances()
		$("#tradeupconfirmbutton").unbind()
		$("#tradeupconfirmbutton").click(function(){
			completetradeup()
		})
	} else {
		$("#tradeupconfirmbutton").css("background-color", "#931621")
		$("#tradeupconfirmbutton").css("color", "#680004")
		$("#tradeupconfirmbutton").css("cursor", "not-allowed")
		$("#tradeupconfirmbutton").attr("title", "Add 10 cubes total to complete your trade up!")
		$("#chancesforyourtradeup").html("Chances for your trade up:")
		$("#tradeupconfirmbutton").unbind()
	}
	$("#itemsintradeupcount").html("Enter items: "+itemsintradeup.filter(item => item != false).length)
}
function createclickabletradeupslot(slot, noitem) {
	$("#tradeupslot"+slot).unbind()
	if(noitem == false) {
		$("#tradeupslot"+slot).click(function(){
			removeitemfromtradeup(slot)
		})
	}
}
tradeupropaganda = [
	"If you arent 100% satisfied with 10 of your cubes, you'll be 1000% satisfied with just one!",
	"Trade your gear to a new tier!",
	"Trade ups are the best way to make your bad cubes better!",
	"Now with 20% more PROFIT!"
]
function getrandomtradeuppropaganda() {
	$("#tradeupspropaganda").html(tradeupropaganda[randomarray(tradeupropaganda.length)])
}
var tradeupresult;
possibletradeupitems = []
function completetradeup() {
	possibletradeupitems = []
	for (i=0; i < itemsintradeup.length; i++) {
		getitemtradeups(itemsintradeup[i].cube)
	}
	if (possibletradeupitems.length != 0) {
		tradeupresult = new Immutablecube(possibletradeupitems[randomarray(possibletradeupitems.length)])
		tradeupresult = {cube: tradeupresult, prefix: false}
		applyprefixestotradeup()
		if (tradeupresult.prefix != false) {
			tradeupresult.cube.name = tradeupresult.prefix.namespace+" "+tradeupresult.cube.name
		}
		resettradeup()
		window.setTimeout(function(){
			updatetradeupsinputdisplay()
		}, 5000)
		setTimeout(function(){
  		$(".tradeupslots").css("opacity",'0')
		}, 0);
		setTimeout(function(){
			$("#tradeupoutputimg").attr("src", tradeupresult.cube.image)
			$("#tradeupslotoutputinfo").html(tradeupresult.cube.name)
  		$(".tradeupslots").css("opacity",'1')
  	}, 2000);
		setTimeout(function(){
			user.inventory.push(tradeupresult)
			user.stats.tradeups++
			checkforachievements("tradeup")
			savegame()
			updateinventorydisplay()
  	}, 2750);
	} else {
		$("#tradeupconfirmbutton").html('You may not trade red items into black ones!')
		window.setTimeout(function(){
			$("#tradeupconfirmbutton").html('Confirm Trade Up?')
		}, 2500)
	}
}
function getitemtradeups(item) {
	for(e=0; e < allboxes.length; e++) {
		if (allboxes[e].cubes.filter(cube => cube.cubeid == item.cubeid).length != 0) {
			console.log("Succesfully found the cube in "+allboxes[e].name)
			for (var r = 0; r < allboxes[e].cubes.filter(cube => cube.rarity == getrarityhigherthan(item.rarity)).length; r++) {
				possibletradeupitems.push(allboxes[e].cubes.filter(cube => cube.rarity == getrarityhigherthan(item.rarity))[r])
			}
		}
	}
}
function getrarityhigherthan(rarity) {
	switch (rarity) {
		case light_green:
			return green
		case green:
			return blue
		case blue:
			return purple
		case purple:
			return orange
		case orange:
			return red
		case red:
			return false
		case black:
			return yellow
	}
}
tradeuppossibilities = []
function gettradeuppossibilities() {
	possibletradeupitemsunduped = removeDuplicates(possibletradeupitems)
	tradeuppossibilities = []
	for (i = 0; possibletradeupitemsunduped.length > i; i++) {
		tradeuppossibilities.push({cube: possibletradeupitemsunduped[i], chance: possibletradeupitems.filter(item => item == possibletradeupitemsunduped[i]).length})
	}
}
tradeupdivisor = 0;
function gettotaltradeupchance() {
	tradeupdivisor = 0;
	for (y=0; y < tradeuppossibilities.length; y++) {
		tradeupdivisor += tradeuppossibilities[y].chance
	}
	return tradeupdivisor
}
function displaytradeupchances() {
	possibletradeupitems = []
	for (i=0; i < itemsintradeup.length; i++) {
		getitemtradeups(itemsintradeup[i].cube)
	}
	$("#tradeupchances").html('')
	gettradeuppossibilities()
	for (i=0; i < tradeuppossibilities.length; i++) {
		$("#tradeupchances").append("<div class='tradeupchances' id='tradeupchanceitem"+i+"' style='position: relative; display: inline-block; padding: 8px;'><img style='width: 80px; height: 80x; filter: drop-shadow(-1px -1px 5px "+returnraritycolor(tradeuppossibilities[i].cube.rarity)+") drop-shadow(1px 1px 5px "+returnraritycolor(tradeuppossibilities[i].cube.rarity)+");' src='"+tradeuppossibilities[i].cube.image+"' /><div style='position: absolute; bottom: 0; left: 0; font-size: x-small;' class='tradeupchanceinfo'>"+tradeuppossibilities[i].cube.name+" has a "+Math.floor((tradeuppossibilities[i].chance/gettotaltradeupchance())*10000)/100+"% chance</div></div>")
	}
}
tradeupprefixticket = 0
function applyprefixestotradeup() {
	tradeupprefixticket = 0
	if (randomnumber(10) <= itemsintradeup.filter(cube => cube.prefix != false && cube.prefix != undefined).length) {
		for (i=0; i < itemsintradeup.filter(cube => cube.prefix != false && cube.prefix != undefined).length; i++) {
			tradeupprefixticket += getprefixticket(itemsintradeup.filter(cube => cube.prefix != false && cube.prefix != undefined)[i].prefix)
		}
		tradeupprefixticket = tradeupprefixticket/itemsintradeup.filter(cube => cube.prefix != false && cube.prefix != undefined).length
		if (tradeupprefixticket <= 833  && tradeupprefixticket > 800) {                  // light green
			tradeupresult.prefix = allPrefixes.filter(prefix => prefix.rarity == light_green)[randomarray(allPrefixes.filter(prefix => prefix.rarity == light_green).length)]
		}
		if (tradeupprefixticket <= 866 && tradeupprefixticket > 833) { // green
			tradeupresult.prefix = allPrefixes.filter(prefix => prefix.rarity == green)[randomarray(allPrefixes.filter(prefix => prefix.rarity == green).length)]
		}
		if (tradeupprefixticket <=  900 && tradeupprefixticket > 866) { // blue
			tradeupresult.prefix = allPrefixes.filter(prefix => prefix.rarity == blue)[randomarray(allPrefixes.filter(prefix => prefix.rarity == blue).length)]
		}
		if (tradeupprefixticket <=  933 && tradeupprefixticket > 900) { // purple
			tradeupresult.prefix = allPrefixes.filter(prefix => prefix.rarity == purple)[randomarray(allPrefixes.filter(prefix => prefix.rarity == purple).length)]
		}
		if (tradeupprefixticket <=  1000 && tradeupprefixticket > 933) { // orange
			tradeupresult.prefix = allPrefixes.filter(prefix => prefix.rarity == orange)[randomarray(allPrefixes.filter(prefix => prefix.rarity == orange).length)]
		}
		if (tradeupprefixticket <=  1050 && tradeupprefixticket > 1000) { // red
			tradeupresult.prefix = allPrefixes.filter(prefix => prefix.rarity == red)[randomarray(allPrefixes.filter(prefix => prefix.rarity == red).length)]
		}
		if (tradeupprefixticket <= 1100 && tradeupprefixticket > 1050){ // black
			tradeupresult.prefix = allPrefixes.filter(prefix => prefix.rarity == black)[randomarray(allPrefixes.filter(prefix => prefix.rarity == black).length)]
		}
		tradeupresult.cube.price = tradeupresult.cube.price*tradeupresult.prefix.bonus
		console.log(tradeupresult.prefix.namespace)
		console.log(tradeupprefixticket)
	}
}
function getprefixticket(prefix) {
	console.log("checking prefix for "+prefix.namespace)
	if (prefix.rarity == light_green) {
		return 833
		console.log("added ticket for light green!")
	}
	if (prefix.rarity == green) {
		return 866
		console.log("added ticket for green!")
	}
	if (prefix.rarity == blue) {
		return 900
		console.log("added ticket for blue!")
	}
	if (prefix.rarity == purple) {
		return 933
		console.log("added ticket for purple!")
	}
	if (prefix.rarity == orange) {
		return 1000
		console.log("added ticket for orange!")
	}
	if (prefix.rarity == red) {
		return 1050
		console.log("added ticket for red!")
	}
	if (prefix.rarity == black) {
		return 1100
		console.log("added ticket for black!")
	}
}
