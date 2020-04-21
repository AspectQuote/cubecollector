function updatecubepediadisplay() {
	$("#cubepediaheadersubtext").html(user.foundcubes.length+"/"+cubepediacubesdisplayarray.length+" cubes found ("+Math.floor((user.foundcubes.length/cubepediacubesdisplayarray.length)*10000)/100+"%)")
	for (i = 0; i < user.foundcubes.length; i++){
		$("#cubepediaentryimage"+user.foundcubes[i]).css('filter', 'grayscale(0%)')
	}
}
$("#cubepediaoverlay").hide()
cubepediacubesdisplayarray = []
for (i = 0; i < trueallcubes.length; i++) {if (trueallcubes[i].rarity == light_green) {cubepediacubesdisplayarray.push(trueallcubes[i])}}
for (i = 0; i < trueallcubes.length; i++) {if (trueallcubes[i].rarity == green)       {cubepediacubesdisplayarray.push(trueallcubes[i])}}
for (i = 0; i < trueallcubes.length; i++) {if (trueallcubes[i].rarity == blue)        {cubepediacubesdisplayarray.push(trueallcubes[i])}}
for (i = 0; i < trueallcubes.length; i++) {if (trueallcubes[i].rarity == purple)      {cubepediacubesdisplayarray.push(trueallcubes[i])}}
for (i = 0; i < trueallcubes.length; i++) {if (trueallcubes[i].rarity == orange)      {cubepediacubesdisplayarray.push(trueallcubes[i])}}
for (i = 0; i < trueallcubes.length; i++) {if (trueallcubes[i].rarity == red)         {cubepediacubesdisplayarray.push(trueallcubes[i])}}
for (i = 0; i < trueallcubes.length; i++) {if (trueallcubes[i].rarity == black)       {cubepediacubesdisplayarray.push(trueallcubes[i])}}
for (i = 0; i < trueallcubes.length; i++) {if (trueallcubes[i].rarity == yellow)      {cubepediacubesdisplayarray.push(trueallcubes[i])}}
$("#cubepediacubes").html('')
for (i = 0; i < cubepediacubesdisplayarray.length; i++){
	$("#cubepediacubes").append("<div id='cubepediaentry"+cubepediacubesdisplayarray[i].cubeid+"' style='cursor: pointer; height: 64px; width: 64px; border: 1px solid "+returnraritycolor(cubepediacubesdisplayarray[i].rarity)+"; border-radius: 3px; margin: 3px; padding: 3px; display: inline-block;'><img id='cubepediaentryimage"+cubepediacubesdisplayarray[i].cubeid+"' src='"+cubepediacubesdisplayarray[i].image+"' style='width: 64px; height: 64px; filter: grayscale(100%);'/></div>")
}
for (i = 0; i < cubepediacubesdisplayarray.length; i++){
	createclickablecubepediaentry(cubepediacubesdisplayarray[i].cubeid)
}
function createclickablecubepediaentry(entry) {
	$("#cubepediaentry"+entry).click(function(){
		cubepediapopup(entry)
	})
}
function getboxacubeisin(cubeid) {
	for (q = 0; q < allboxes.length; q++){
		if (allboxes[q].cubes.includes(trueallcubes.filter(cube => cube.cubeid == cubeid)[0])){
			return allboxes[q]
		}
	}
	return false
}
function cubepediapopup(entry) {
	if (user.foundcubes.includes(entry) == true){
		$("#cubepediaoverlayname").html(trueallcubes.filter(cube => cube.cubeid == entry)[0].name)
		$("#cubepediaoverlayimage").html("<img src='"+trueallcubes.filter(cube => cube.cubeid == entry)[0].image+"' style='width: 100px; height: 100px; filter: grayscale(0%)'/>")
		$("#cubepediaoverlayprice").html("<img src='sprites/cubepediaicons/priceicon.png' style='height: 16px; display: inline; padding-right: 5px;' />$"+(trueallcubes.filter(cube => cube.cubeid == entry)[0].price/100).toLocaleString())
		$("#cubepediaoverlaydescription").html("<img src='sprites/cubepediaicons/descicon.png' style='height: 16px; display: inline; padding-right: 5px;' />"+trueallcubes.filter(cube => cube.cubeid == entry)[0].flavortext)
	} else {
		$("#cubepediaoverlayname").html("???")
		$("#cubepediaoverlayimage").html("<img src='"+trueallcubes.filter(cube => cube.cubeid == entry)[0].image+"' style='width: 100px; height: 100px; filter: grayscale(100%)'/>")
		$("#cubepediaoverlayprice").html("<img src='sprites/cubepediaicons/priceicon.png' style='height: 16px; display: inline; padding-right: 5px;' />???")
		$("#cubepediaoverlaydescription").html("<img src='sprites/cubepediaicons/descicon.png' style='height: 16px; display: inline; padding-right: 5px;' />???")
	}
	$("#cubepediaoverlayrarity").html("<img src='sprites/cubepediaicons/rarityicon.png' style='height: 16px; display: inline; padding-right: 5px;' />"+getfancyrarity(trueallcubes.filter(cube => cube.cubeid == entry)[0].rarity))
	$("#cubepediaoverlaybox").html("<img src='sprites/cubepediaicons/boxicon.png' style='height: 16px; display: inline; padding-right: 5px;' />"+getboxacubeisin(entry).name)
	if (allcubes.includes(trueallcubes.filter(cube => cube.cubeid == entry)[0]) == true){
		$("#cubepediaoverlayobtainability").html("Obtainable by unboxing boxes, playing coinflip, and playing jackpot")
		if (trueallcubes.filter(cube => cube.cubeid == entry)[0].rarity != black && trueallcubes.filter(cube => cube.cubeid == entry)[0].rarity != light_green){
			$("#cubepediaoverlayobtainability").html("Obtainable by unboxing boxes, playing coinflip, playing jackpot, and trading up")
		}
		if (trueallcubes.filter(cube => cube.cubeid == entry)[0].rarity == yellow){
			$("#cubepediaoverlayobtainability").html("Obtainable by playing coinflip, playing jackpot, and trading up")
		}
	} else if (allcubes.includes(trueallcubes.filter(cube => cube.cubeid == entry)[0]) == false){
		$("#cubepediaoverlayobtainability").html("Obtainable by completing quests")
		if (trueallcubes.filter(cube => cube.cubeid == entry)[0].rarity != black && trueallcubes.filter(cube => cube.cubeid == entry)[0].rarity != light_green){
			$("#cubepediaoverlayobtainability").html("Obtainable by completing quests and trading up")
		}
		if (trueallcubes.filter(cube => cube.cubeid == entry)[0].rarity == yellow){
			$("#cubepediaoverlayobtainability").html("Obtainable by trading up quest items")
		}
	}
	$("#cubepediaoverlay").show()
}
$("#cubepediaoverlayclosebutton").click(function(){
	$("#cubepediaoverlay").hide()
})
// all those loops place all of the cubes into an array that is sorted based on rarity, for more understandable display
function getfancyrarity(rarity) {
	switch (rarity){
		case light_green:
			return 'Common'
			break;
		case green:
			return 'Uncommon'
			break;
		case blue:
			return 'Rare'
			break;
		case purple:
			return 'Epic'
			break;
		case orange:
			return 'Very Rare'
			break;
		case red:
			return 'Ultra Rare'
			break;
		case black:
			return 'Legendary'
			break;
		case yellow:
			return 'Gold'
			break;
		default:
			return 'unknown'
	}

}
