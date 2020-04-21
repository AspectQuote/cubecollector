function Quest(questdata){
	this.questgiver = questdata.questgiver
	this.questflavortext = questdata.questflavortext
	this.requestedcube = questdata.requestedcube
	this.getdifficulty = function(){
		if (this.requestedcube.prefix != false) {
			return getraritytier(this.requestedcube.cube.rarity)*getraritytier(this.requestedcube.prefix.rarity)+10
		} else {
			return getraritytier(this.requestedcube.cube.rarity)
		}
	}
	this.expreward = this.getdifficulty()*15
	this.rewardcubes = getrewardcubes(this.getdifficulty())
	this.difficultydisplay = getdifficultydisplay(this.getdifficulty())
	this.cubename = function() {
		if (this.requestedcube.prefix != false) {
			return "<span style='color: "+returnraritycolor(this.requestedcube.prefix.rarity)+"'>"+this.requestedcube.prefix.namespace + "</span> <span style='color: "+returnraritycolor(this.requestedcube.cube.rarity)+"'>" + this.requestedcube.cube.name + "</span>"
		} else {
			return "<span style='color: "+returnraritycolor(this.requestedcube.cube.rarity)+"'>" + this.requestedcube.cube.name + "</span>"
		}
	}
}
allquests = []
function getrewardcubes(difficulty) {
	rewardbox = rewardboxes[randomarray(rewardboxes.length)]
	if (difficulty <=  2) {
			rewardcube = rewardbox.cubes.filter(cube => cube.rarity == light_green)[randomarray(rewardbox.cubes.filter(cube => cube.rarity == light_green).length)]
		}
		if (difficulty <=  5 && difficulty > 2) {
			rewardcube = new Immutablecube(rewardbox.cubes.filter(cube => cube.rarity == green)[randomarray(rewardbox.cubes.filter(cube => cube.rarity == green).length)])
		}
		if (difficulty <=  7 && difficulty > 5) {
			rewardcube = new Immutablecube(rewardbox.cubes.filter(cube => cube.rarity == blue)[randomarray(rewardbox.cubes.filter(cube => cube.rarity == blue).length)])
		}
		if (difficulty <=  13 && difficulty > 7) {
			rewardcube = new Immutablecube(rewardbox.cubes.filter(cube => cube.rarity == purple)[randomarray(rewardbox.cubes.filter(cube => cube.rarity == purple).length)])
		}
		if (difficulty <=  18 && difficulty > 13) {
			rewardcube = new Immutablecube(rewardbox.cubes.filter(cube => cube.rarity == orange)[randomarray(rewardbox.cubes.filter(cube => cube.rarity == orange).length)])
		}
		if (difficulty <=  22 && difficulty > 18) {
			rewardcube = new Immutablecube(rewardbox.cubes.filter(cube => cube.rarity == red)[randomarray(rewardbox.cubes.filter(cube => cube.rarity == red).length)])
		}
		if (difficulty <= 100 && difficulty > 22){
			rewardcube = new Immutablecube(rewardbox.cubes.filter(cube => cube.rarity == black)[randomarray(rewardbox.cubes.filter(cube => cube.rarity == black).length)])
		}
		if (difficulty > 100){
			rewardcube = new Immutablecube(rewardbox.cubes.filter(cube => cube.rarity == yellow)[randomarray(rewardbox.cubes.filter(cube => cube.rarity == yellow).length)])
		}
	return rewardcube
}
function getraritytier(rarity) {
	if (rarity == light_green) {
		return 2
	}
	if (rarity == green) {
		return 3
	}
	if (rarity == blue) {
		return 4
	}
	if (rarity == purple) {
		return 7
	}
	if (rarity == orange) {
		return 10
	}
	if (rarity == red) {
		return 15
	}
	if (rarity == black) {
		return 20
	}
}
function getdifficultydisplay(difficulty) {
	if (difficulty <= 4) {
		return difficulty+" (Easy)"
	}
	if (difficulty <= 8 && difficulty > 4) {
		return difficulty+" (Medium)"
	}
	if (difficulty <= 15 && difficulty > 8) {
		return difficulty+" (Hard)"
	}
	if (difficulty < 20 && difficulty > 15) {
		return difficulty+" (Very hard)"
	}
	if (difficulty < 30 && difficulty >= 20) {
		return difficulty+" (Ungodly difficult)"
	}
	if (difficulty >= 30) {
		return difficulty+" (Impossible)"
	}
}
function makenewquest() {
	generatequest()
	allquests.push(new Quest(questdata))
	updatequestsdisplay()
	sendusermessage('info', "New Quest!", "New Quest Available!")
}
questdata = {}
function generatequest() {
	questdata = {}
	questdata.questgiver = questgivers[randomarray(questgivers.length)]
	questdata.questflavortext = questflavortext[randomarray(questflavortext.length)]
	ticket = randomnumber(1000)
	prefixticket = randomnumber(1100)
	questdata.requestedcube = {cube: false, prefix: false}
	if (ticket <=  400) {
			questdata.requestedcube.cube = allcubes.filter(cube => cube.rarity == light_green)[randomarray(allcubes.filter(cube => cube.rarity == light_green).length)]
		}
		if (ticket <=  650 && ticket >= 401) {
			questdata.requestedcube.cube = allcubes.filter(cube => cube.rarity == green)[randomarray(allcubes.filter(cube => cube.rarity == green).length)]
		}
		if (ticket <=  800 && ticket >= 651) {
			questdata.requestedcube.cube = allcubes.filter(cube => cube.rarity == blue)[randomarray(allcubes.filter(cube => cube.rarity == blue).length)]
		}
		if (ticket <=  900 && ticket >= 801) {
			questdata.requestedcube.cube = allcubes.filter(cube => cube.rarity == purple)[randomarray(allcubes.filter(cube => cube.rarity == purple).length)]
		}
		if (ticket <=  980 && ticket >= 901) {
			questdata.requestedcube.cube = allcubes.filter(cube => cube.rarity == orange)[randomarray(allcubes.filter(cube => cube.rarity == orange).length)]
		}
		if (ticket <=  995 && ticket >= 981) {
			questdata.requestedcube.cube = allcubes.filter(cube => cube.rarity == red)[randomarray(allcubes.filter(cube => cube.rarity == red).length)]
		}
		if (ticket <= 1000 && ticket >= 996){
			questdata.requestedcube.cube = allcubes.filter(cube => cube.rarity == black)[randomarray(allcubes.filter(cube => cube.rarity == black).length)]
		}
		if (prefixticket <= 833  && prefixticket > 800) {
			questdata.requestedcube.prefix = allPrefixes.filter(prefix => prefix.rarity == light_green)[randomarray(allPrefixes.filter(prefix => prefix.rarity == light_green).length)]
		}
		if (prefixticket <= 866 && prefixticket > 833) {
			questdata.requestedcube.prefix = allPrefixes.filter(prefix => prefix.rarity == green)[randomarray(allPrefixes.filter(prefix => prefix.rarity == green).length)]
		}
		if (prefixticket <=  900 && prefixticket > 866) {
			questdata.requestedcube.prefix = allPrefixes.filter(prefix => prefix.rarity == blue)[randomarray(allPrefixes.filter(prefix => prefix.rarity == blue).length)]
		}
		if (prefixticket <=  933 && prefixticket > 900) {
			questdata.requestedcube.prefix = allPrefixes.filter(prefix => prefix.rarity == purple)[randomarray(allPrefixes.filter(prefix => prefix.rarity == purple).length)]
		}
		if (prefixticket <=  1000 && prefixticket > 933) {
			questdata.requestedcube.prefix = allPrefixes.filter(prefix => prefix.rarity == orange)[randomarray(allPrefixes.filter(prefix => prefix.rarity == orange).length)]
		}
		if (prefixticket <=  1050 && prefixticket > 1000) {
			questdata.requestedcube.prefix = allPrefixes.filter(prefix => prefix.rarity == red)[randomarray(allPrefixes.filter(prefix => prefix.rarity == red).length)]
		}
		if (prefixticket <= 1100 && prefixticket > 1050){
			questdata.requestedcube.prefix = allPrefixes.filter(prefix => prefix.rarity == black)[randomarray(allPrefixes.filter(prefix => prefix.rarity == black).length)]
		}
}
function updatequestsdisplay() {
	$("#questsmain").html('')
	for (i=0; i < allquests.length; i++) {
		$("#questsmain").append("<div class='questcontainer' style='border-radius: 5px; border: 1px solid black; width: 47%; height: 48%; margin: 1%; background-color: #212221;'><div class='questcontainerheader' style='font-size: small; border-bottom: 1px solid black; padding: 3px; height: 10%;'>Quest from <span style='color: #1E6D00;'>"+allquests[i].questgiver+"</span>, Difficulty: "+allquests[i].difficultydisplay+"</div><div class='questcontainermain' style='display: flex; height: 80%;'><div class='questinfo' style='border-right: 1px solid black; padding: 5px; font-size: small;'>"+allquests[i].questflavortext+"<br/><br/><div>"+allquests[i].cubename()+"</div><br/>Rewards: <br/> Experience: "+allquests[i].expreward+"<br/> Cube: 1 special cube of <span style='color:"+returnraritycolor(allquests[i].rewardcubes.rarity)+"'>"+allquests[i].rewardcubes.rarity+"</span> quality</div><div class='questcube'><div style='padding: 10px; background-image: linear-gradient(45deg, rgba(35, 35, 31, 0.3), rgba(35, 35, 31, 0.8));'><img src='"+allquests[i].requestedcube.cube.image+"' style='width: 64px; height: 64px; filter: drop-shadow(-1px -1px 1px rgba(0,0,0, 0.8)) drop-shadow(2px 2px 1px rgba(0,0,0, 0.8));'/></div></div></div><div class='questcancelbutton' id='questcancelbutton"+i+"' style='text-align: center; width: 100%; border-top: 1px solid black; color: #4C0000; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; cursor: pointer;'>Dismiss</div></div>")
		if (user.inventory.filter(slot => slot.cube.name == allquests[i].requestedcube.cube.name && slot.prefix == allquests[i].requestedcube.prefix).length >= 1) {
			createdismissablequest(i, true)
		} else {
			createdismissablequest(i, false)
		}
	}
}
function createdismissablequest(e, hasnecessarycubes){
	$("#questcancelbutton"+e).html('Dismiss')
	$("#questcancelbutton"+e).css('color', "#4C0000")
	$("#questcancelbutton"+e).css('background-color', "#7D0000")
	$("#questcancelbutton"+e).unbind()
  $("#questcancelbutton"+e).click(function(){
    dismissquest(e)
  })
	if(hasnecessarycubes == true) {
		$("#questcancelbutton"+e).unbind()
		$("#questcancelbutton"+e).html('Fulfill Quest?')
		$("#questcancelbutton"+e).css('color', "#006108")
		$("#questcancelbutton"+e).css('background-color', "#007009")
		$("#questcancelbutton"+e).click(function(){
	    fulfillquest(e)
	  })
	}
}
questgivers = [
	"Natalia",
	"Banned",
	"Roflzilla",
	"Super Mario IRL",
	"AspectQuote",
	"R.O.B.",
	"Mr. Game and Watch",
	"Chell",
	"Mr. Freeman",
	"The Heavy",
	"The Medic",
	"The One They Call Carson",
	"Headcrabs!",
	"Isabelle",
	"The Doomslayer",
	"Delicious Cake",
	"Onions",
	"Xxx_ShadowAssassin_xxX",
	"Guy on a quest",
	"ThatOneGuy",
	"DUDE!?",
	"Super Creeper Slayer",
	"Gameming"
]
questflavortext = [
	"Heyo! I was wondering if you could get this cube for me! It'd be greatly appreciated!",
	"Now listen here, pardner. I'm gonna need this cube. Don't ask me why. I just do.",
	"Someone told me it was dangerous to go alone! So, I'll need this cube to keep me company!",
	"I would like if you could retrieve this cube for me! I'd be very grateful!",
	"If you get me this cube, I'll send you one pixel of my left buttcheek!",
	"My mom said that I could send a stranger on a quest to get this cube for me!",
	"If you retrieve this cube for me, I'll pay you accordingly. I promise."
]
function dismissquest(id) {
	allquests.splice(id, 1)
	updatequestsdisplay()
}
function fulfillquest(id) {
	if (user.inventory.filter(slot => slot.cube.name == allquests[id].requestedcube.cube.name && slot.prefix == allquests[id].requestedcube.prefix).length >= 1) {
		user.inventory.push({cube: allquests[id].rewardcubes, prefix: false})
		user.inventory.splice(user.inventory.indexOf(user.inventory.filter(slot => slot.cube.name == allquests[id].requestedcube.cube.name)[0]), 1)
		giveexp(allquests[id].expreward)
		sendusermessage('alert', "Quest Fulfilled!", "You earned a "+allquests[id].rewardcubes.name+"!")
		allquests.splice(id, 1)
		updatequestsdisplay()
		updateinventorydisplay()
		user.questscompleted++
		checkforachievements("quest")
		savegame()
	}
}
maxquests = 4
setInterval(function(){
	if(randomnumber(30)==5 && allquests.length < maxquests) {
		makenewquest()
	}
}, 1000);
