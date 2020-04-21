function updateprofiledisplay() {
	$("#topbarusername").html(user.name)
	$("#profileusername").html(user.name)
	$("#profilepicture").attr('src', user.pfp)
	$("#profileprofilepicture").attr('src', user.pfp)
	getuserlevel()
	$("#profileexpcounter").css("width", "0px")
	$("#profileexpcounter").css("width", $("#profileexpbar").width()*((user.exp-levels[user.level].exp)/(levels[user.level+1].exp-levels[user.level].exp)))
	$("#profileexpcounter").html((user.exp-levels[user.level].exp)+"exp. / "+(levels[user.level+1].exp-levels[user.level].exp)+"exp.")
	$("#profilelevel").html('level '+user.level+", with "+ user.exp + " exp.")
	$("#topbarlevelicon").attr("src", getlevelicon())
	$("#playerlevel").html(user.level)
	updatemoneydisplay()
	$("#profilestatsmain").html('')
	$("#profilestatsmain").append("<div class='statcontainers' id='statblacksunboxed'>Total Black Items Unboxed: "+user.stats.blacksunboxed+"</div>")
	$("#profilestatsmain").append("<div class='statcontainers' id='statunboxes'>Total Boxes Unboxed: "+user.stats.unboxes+"</div>")
	$("#profilestatsmain").append("<div class='statcontainers' id='statjackpotswon'>Total Jackpot Wins: "+user.stats.jackpotswon+"</div>")
	$("#profilestatsmain").append("<div class='statcontainers' id='statcfswon'>Total Coinflip Wins: "+user.stats.cfswon+"</div>")
	$("#profilestatsmain").append("<div class='statcontainers' id='statbestcube'>Best Cube Of All Time: "+getbestusercube("name")+", with a value of $"+getbestusercube("price")/100+"</div>")
	$("#profilestatsmain").append("<div class='statcontainers' id='stattotaltradeups'>Total Trade Ups: "+user.stats.tradeups+"</div>")
	$("#profilestatsmain").append("<div class='statcontainers' id='stataveragevalue'>Average Item Value: $"+(getaverageinventoryvalue()/100).toLocaleString()+"</div>")
	$("#profilestatsmain").append("<div class='statcontainers' id='statskillpoints'>Skill Points: "+user.skillpoints+"</div>")
	$("#profilestatsmain").append("<div class='statcontainers' id='statquestsdone'>Quests Completed: "+user.questscompleted+"</div>")
	for (i = 0; i < user.featureditems.length; i++){
		if (user.featureditems[i] != false){
			$("#profileshowcaseicon"+i).attr("src", user.featureditems[i].cube.image)
			$("#profileshowcasename"+i).html(user.featureditems[i].cube.name)
			$("#profileshowcase"+i).unbind()
			createclickableshowcase(i)
		} else {
			$("#profileshowcaseicon"+i).attr("src", 'sprites/unknown.png')
			$("#profileshowcasename"+i).html('')
			$("#profileshowcase"+i).unbind()
		}
	}
	$("#profileshowcasefooter").html("$"+(valuesadded(user.featureditems.filter(slot => slot != false))/100).toLocaleString())
}
function createclickableshowcase(e){
	$("#profileshowcase"+e).click(function(){
		user.inventory.push(user.featureditems[e])
		user.featureditems[e] = false
		updateprofiledisplay()
		updateinventorydisplay()
		savegame()
	})
}
function getbestusercube(whichpart) {
	if (whichpart == "name") {
		return user.stats.bestcube.name || "No Cubes Yet!"
	}
	if (whichpart == "price") {
		return user.stats.bestcube.price || ""
	}
}
levels = [
	{exp: 0, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 0
	{exp: 10, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 1
	{exp: 30, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 2
	{exp: 50, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 3
	{exp: 70, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 4
	{exp: 90, rewards: {skillpoints: 0, cubes: false, boxes: [{box: CubeSeriesOne, amount: 5}], achievement: true}}, // lvl 5
	{exp: 120, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 6
	{exp: 160, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 7
	{exp: 210, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 8
	{exp: 270, rewards: {skillpoints: 1, cubes: false, boxes: [{box: CubeSeriesTwo, amount: 10}], achievement: false}}, // lvl 9
	{exp: 340, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: true}}, // lvl 10
	{exp: 420, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 11
	{exp: 510, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 12
	{exp: 610, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 13
	{exp: 720, rewards: {skillpoints: 0, cubes: false, boxes: [{box: CubeSeriesThree, amount: 15}], achievement: false}}, // lvl 14
	{exp: 840, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 15
	{exp: 970, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 16
	{exp: 1110, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 17
	{exp: 1260, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 18
	{exp: 1420, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 19
	{exp: 1590, rewards: {skillpoints: 0, cubes: false, boxes: [{box: CubeSeriesOne, amount: 25}], achievement: true}}, // lvl 20
	{exp: 1770, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 21
	{exp: 1960, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 22
	{exp: 2160, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 23
	{exp: 2370, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 24
	{exp: 2590, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 25
	{exp: 2820, rewards: {skillpoints: 0, cubes: false, boxes: [{box: HomeBox, amount: 40}], achievement: false}}, // lvl 26
	{exp: 3060, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 27
	{exp: 3310, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 28
	{exp: 3570, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 29
	{exp: 3840, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: true}}, // lvl 30
	{exp: 4130, rewards: {skillpoints: 0, cubes: false, boxes: [{box: SuperstitiousBox, amount: 15}], achievement: false}}, // lvl 31
	{exp: 4420, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 32
	{exp: 4720, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 33
	{exp: 5030, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 34
	{exp: 5350, rewards: {skillpoints: 0, cubes: false, boxes: [{box: CubeSeriesFour, amount: 50}], achievement: false}}, // lvl 35
	{exp: 5680, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 36
	{exp: 6020, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 37
	{exp: 6370, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 38
	{exp: 6730, rewards: {skillpoints: 1, cubes: false, boxes: [{box: GameBox, amount: 20}], achievement: false}}, // lvl 39
	{exp: 7100, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: true}}, // lvl 40
	{exp: 7480, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 41
	{exp: 7870, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 42
	{exp: 8270, rewards: {skillpoints: 0, cubes: false, boxes: [{box: SuperstitiousBox, amount: 30}], achievement: false}}, // lvl 43
	{exp: 8680, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 44
	{exp: 9100, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 45
	{exp: 9530, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 46
	{exp: 9970, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}}, // lvl 47
	{exp: 10420, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: false}}, // lvl 48
	{exp: 11000, rewards: {skillpoints: 0, cubes: false, boxes: [{box: GameBox, amount: 20}], achievement: false}}, // lvl 49
	{exp: 11700, rewards: {skillpoints: 1, cubes: false, boxes: false, achievement: true}}, // lvl 50
]
for(i=levels.length; i < 1338; i++) {
	levels.push({exp: levels[i-1].exp+i*10, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}})
}
levels.push({exp: 1000000000000000000000000000, rewards: {skillpoints: 0, cubes: false, boxes: false, achievement: false}})
function getuserlevel() {
	user.level = 0
	for (i=0; i < user.level+1; i++) {
		if (user.exp >= levels[i].exp) {
			user.level++
		}
	}
	user.level--
	return user.level
}
function checkforlevelup(){
	if (user.exp >= levels[user.level+1].exp) {
		user.level++
		sendusermessage("info", "Level Up!", "Your level increased to "+user.level+"!")
		if(levels[user.level].rewards.cubes != false) {
			for (var i = 0; i < levels[user.level].rewards.cubes.length; i++) {
				user.inventory.push({cube: levels[user.level].rewards.cubes[i], prefix: false, suffix: false})
			}
			sendusermessage("alert", "You Earned "+levels[user.level].rewards.cubes.length+" cubes!", "Because your level increased to "+user.level+"!")
			updateinventorydisplay()
		}
		if(levels[user.level].rewards.boxes != false) {
			for (var i = 0; i < levels[user.level].rewards.boxes.length; i++) {
				user.boxes[user.boxes.indexOf(user.boxes.filter(box => box.box.name == levels[user.level].rewards.boxes[i].box.name)[i])].amount += levels[user.level].rewards.boxes[i].amount
			}
			sendusermessage("alert", "You Earned a few boxes!", "Because your level increased to "+user.level+"!")
			updateboxesdisplay()
		}
		if(levels[user.level].rewards.achievement == true) {
			checkforachievements("levels")
		}
		user.skillpoints += levels[user.level].rewards.skillpoints
		if (levels[user.level].rewards.skillpoints > 0) {
			sendusermessage("alert", "You got skill points!", "You earned "+levels[user.level].rewards.skillpoints+" skill points for leveling up!")
		}
		checkforlevelup()
		updateprofiledisplay()
	}
}
function giveexp(exp) {
	if(user.level != 50) {
		user.exp += exp
		checkforlevelup()
		updateprofiledisplay()
	}
}
function displaylevels() {
	$("#levelwrapper").html('')
	for (i=0; i < levels.length; i++){
		$("#levelwrapper").append("<div class='leveldisplayitems' id='level"+i+"display'>Level "+i+": Exp required: "+levels[i].exp+"</div>")
	}
}
function getlevelicon() {
	if (user.level < 5) {
		return "sprites/levelicons/level1.png"
	}
	if (user.level >= 5 && user.level < 15) {
		return "sprites/levelicons/level5.png"
	}
	if (user.level >= 15 && user.level < 25) {
		return "sprites/levelicons/level15.png"
	}
	if (user.level >= 25 && user.level < 35) {
		return "sprites/levelicons/level25.png"
	}
	if (user.level >= 35 && user.level < 50) {
		return "sprites/levelicons/level35.png"
	}
	if (user.level >= 50 && user.level < 75) {
		return "sprites/levelicons/level50.png"
	}
	if (user.level >= 75 && user.level < 100) {
		return "sprites/levelicons/level75.png"
	}
	if (user.level >= 100 && user.level < 200) {
		return "sprites/levelicons/level100.png"
	}
	if (user.level >= 200 && user.level < 300) {
		return "sprites/levelicons/level200.png"
	}
	if (user.level >= 300 && user.level < 400) {
		return "sprites/levelicons/level300.png"
	}
	if (user.level >= 400 && user.level < 500) {
		return "sprites/levelicons/level400.png"
	}
	if (user.level >= 500 && user.level < 100) {
		return "sprites/levelicons/level50.png"
	}
	if (user.level >= 1000) {
		return "sprites/levelicons/level1000.png"
	}
}
messagenumber = 0;
function sendusermessage(type, messagetitle, messagecontent) {
	messagenumber++
	$("#usermessages").append("<div id='message"+messagenumber+"' style='color: "+getmessagecolor(type)+"; background-color: "+getmessagecolor(type+"background")+"; overflow: hidden; height: 120px; width: 90%; border-color: "+getmessagecolor(type)+"; border-radius: 10px; margin-bottom: 10px; margin-left: 10px; border: 3px solid "+getmessagecolor(type)+"; transition: 0.5s ease-in; opacity: 0;' class='usermessage'><div class='messagetitle'>"+messagetitle+"</div><div class='messagecontent'>"+messagecontent+"</div></diV>")
	createmessageremover(messagenumber)
}
function createmessageremover(number) {
	window.setTimeout(function(){
		$("#message"+number).css("opacity", 1);
	}, 50)
	window.setTimeout(function(){
		$("#message"+number).css("opacity", 0);
		window.setTimeout(function(){
			$("#message"+number).remove()
		}, 510)
	}, 5000)
}
function getmessagecolor(type) {
	switch (type) {
		case "info":
			return "#1D2F47"
			break;
		case "infobackground":
			return "#335C81"
			break;
		case "alert":
			return "#605728"
			break;
		case "alertbackground":
			return "#C1AF53"
			break;
		case "error":
			return "#541418"
			break;
		case "errorbackground":
			return "#872027"
			break;
		default:
		return "#FFFFFF"
	}
}
$("#resetsavebutton").click(function(){
	$("#resetsavebutton").html("Are you absolutley 100% sure?")
	window.setTimeout(function(){
		$("#resetsavebutton").html("Double Click To Reset Save Game")
	}, 3000)
})
$("#resetsavebutton").dblclick(function(){
	$("#resetsavebutton").html("Here we go...")
	window.setTimeout(function(){
		resetsave()
	}, 1000)
})
