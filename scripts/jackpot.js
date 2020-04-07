function startjackpot(botamount) {
	botstoenterjp = []
	sniperbotsjp = []
	fairbotsjp = []
	lowballerbotsjp = []
	jptotal = []
	currententries = 1;
	jptotal = 0
	timeleft = 20
	jpgoing = true
	startjpcountdown = setInterval(jpcountdown, 1000)
	for (i=0; i < botamount; i++) {
		botstoenterjp.push(allbots[randomarray(allbots.length)])
	}
	botstoenterjp = removeDuplicates(botstoenterjp)
	for (var i = 0; i < botstoenterjp.length; i++) {
		if(botstoenterjp[i].playstyle == 'cf') {
			botstoenterjp.splice(i, 1)
		}
	}
	while (botstoenterjp.length > 8) {
		botstoenterjp.pop()
	}
	sniperbotsjp = botstoenterjp.filter(bot => bot.playstyle == "sniper")
	//console.log(sniperbotsjp)
	fairbotsjp = botstoenterjp.filter(bot => bot.playstyle == "fair")
	//console.log(fairbotsjp)
	lowballerbotsjp = botstoenterjp.filter(bot => bot.playstyle == "lowballer")
	//console.log(lowballerbotsjp)

	for (i=0; i < fairbotsjp.length; i++) { // the fair bots entering the jp at a random time throughout the beginning of the jackpot
		createfairbotjpentry(i)
	}
	for (i=0; i < sniperbotsjp.length; i++) { // the sniper bots entering the jp at a later time throughout the jackpot
		createsniperbotjpentry(i)
	}
	for (i=0; i < lowballerbotsjp.length; i++) { // the lowballer bots entering the jp at a later time throughout the entire jackpot duration
		createlowballerbotjpentry(i)
	}
}
function removeDuplicates(array) {
	return array.filter((a, b) => array.indexOf(a) === b)
};
function createfairbotjpentry(e) {
	window.setTimeout(function(){
			//console.log(fairbotsjp[e].name)
			fairbotsjp[e].betitems = getjpbotbet(0.8, 1.2)
			formatbotitems(fairbotsjp[e])
			fairbotsjp[e].updatebet()
			jptotal += Math.floor(fairbotsjp[e].bet)
			botsinjp.push(fairbotsjp[e])
			addtojpreel(botsinjp.indexOf(fairbotsjp[e]))
			currententries++
			//console.log(fairbotsjp[e].bet)
			updatejpdisplay()
	}, randomnumber(12000))
}
function createsniperbotjpentry(e) {
	window.setTimeout(function(){
			//console.log(sniperbotsjp[e].name)
			sniperbotsjp[e].betitems = getjpbotbet(1.5, 1.8)
			formatbotitems(sniperbotsjp[e])
			sniperbotsjp[e].updatebet()
			jptotal += Math.floor(sniperbotsjp[e].bet)
			botsinjp.push(sniperbotsjp[e])
			addtojpreel(botsinjp.indexOf(sniperbotsjp[e]))
			currententries++
			//console.log(sniperbotsjp[e].bet)
			updatejpdisplay()
	}, randomnumber(10000)+8000)
}
function createlowballerbotjpentry(e) {
	window.setTimeout(function(){
			//console.log(lowballerbotsjp[e].name)
			lowballerbotsjp[e].betitems = getjpbotbet(0.1, 0.5)
			formatbotitems(lowballerbotsjp[e])
			lowballerbotsjp[e].updatebet()
			jptotal += Math.floor(lowballerbotsjp[e].bet)
			botsinjp.push(lowballerbotsjp[e])
			addtojpreel(botsinjp.indexOf(lowballerbotsjp[e]))
			currententries++
			//console.log(lowballerbotsjp[e].bet)
			updatejpdisplay()
		}, randomnumber(18000))
}
targetbet = 0;
targetcubes = []
betcubes = []
function getuseraverageitemswithbets() {
	updateusertotalbet()
	return (getplayerinventoryvalue() + user.bet)/(user.inventory.length + user.betitems.length || 1)+50
}
function getjpbotbet(mindev, maxdev) {
	targetbet = randomnumber((user.betitems.length || 3))+randomnumber(2)
	targetcubes = allcubes.filter(cube => cube.price <= (getaverageuserbet()*maxdev))
	targetcubes = targetcubes.filter(cube => cube.price >= (getaverageuserbet()*mindev))
	betcubes = []
	if (targetcubes.length <= 0) {
		targetcubes = user.inventory.filter(cube => cube.cube.price <= (getaverageuserbet()*maxdev))
		targetcubes = targetcubes.filter(cube => cube.cube.price >= (getaverageuserbet()*mindev))
	}
	if (targetcubes.length <= 0) {
		for (var i = 0; i < targetbet; i++) {
			targetcubes.push(user.inventory[randomarray(user.inventory.length)].cube)
		}
	}
	for (var i = 0; i < targetcubes.length; i++) {
		betcubes.push(targetcubes[randomarray(targetcubes.length)])
	}
	while (betcubes.length < targetbet) {
		betcubes.push(targetcubes[randomarray(targetcubes.length)])
	}
	while (betcubes.length > targetbet) {
		betcubes.splice(randomarray(targetcubes.length), 1)
	}
	targetcubes = betcubes
	return betcubes
}
jptotal = 0;
jpgoing = false;
function getjptotal() {
	return Math.ceil(jptotal)
}
function updatejpdisplay() {
	$("#individualjpentries").html('')
	for (var i = 0; i < botsinjp.length; i++) {
		//console.log("updating jackpot display for entry #"+i)
		$("#individualjpentries").append("<div class='individualjpentry' id='individualjpentry"+i+"'>"+botsinjp[i].name+": "+Math.floor((botsinjp[i].bet/getjptotal())*10000)/100+"% with $"+(botsinjp[i].bet/100).toLocaleString()+" Items: "+getbotbetitemsdisplay(i)+"</div>")
		$("#jpentry"+i).css("width", $("#jpentries").width()*(botsinjp[i].bet/getjptotal())+"px")
		$("#jpentry"+i).html(botsinjp[i].name+" ($"+(botsinjp[i].bet/100).toLocaleString()+"),<div id='jpentrypercent"+i+"' style='text-align: center;'> with "+Math.floor((botsinjp[i].bet/getjptotal())*10000)/100+"% chance")
	}
	$("#jpinfotext").html('Pot Value: $'+(getjptotal()/100).toLocaleString())
}
display = ''
function getbotbetitemsdisplay(e){
	display = ''
	for(i=0; i < botsinjp[e].betitems.length; i++){
		display += "<img src='"+botsinjp[e].betitems[i].cube.image+"' title='"+botsinjp[e].betitems[i].cube.name+"' style='width: 16px;'/>"
	}
	return display
}
function addtojpreel(e){
	$("#jpentries").append("<div class='jpentries' id='jpentry"+e+"' style='transition: 0.5s; text-align: center;' >"+botsinjp[e].name+" ($"+(botsinjp[e].bet/100).toLocaleString()+"),<div id='jpentrypercent"+e+"' style='text-align: center;'> with "+Math.floor((botsinjp[e].bet/getjptotal())*10000)/100+"% chance</div></div></div>")
	$("#jpentry"+e).css("width", "0px")
}
function resetjp() {
	jptotal = 0;
	botstoenterjp = []
	sniperbotsjp = []
	fairbotsjp = []
	lowballerbotsjp = []
	jptotal = []
	currententries = 1;
	userinjp = false
	jpspinning = false
	jpgoing = false
	userbetitems = []
	user.bet = 0
	timeleft = 0
	botsinjp = []
	jpwinningticket = 0
	$("#jpentries").html('')
	$("#individualjpentries").html('')
	$("#jpentries").css("transition", '0.001s')
	$("#jpentries").css("transform", 'translate3D(0px, 0, 0)')
	$("#jpentries").css("transition", '6s')
	$("#jpentries").css("transition-timing-function", "cubic-bezier(.31,.9985,.31,.9985)")
	$("#jpinfotext").html('Pot Value: $0')
}
currententries = 0;
botsinjp = []
botstoenterjp = []
userinjp = false

function userenterjp(item) {
	if (userinjp == true) {
		//console.log(item)
		user.betitems.push(item)
		jptotal += item.cube.price
		updateusertotalbet()
		updatejpdisplay()
	} else {
		user.bet = 0
		userinjp = true
		user.betitems = []
		user.bet = item.cube.price
		user.betitems.push(item)
		console.log(item)
		jptotal += user.bet
		botsinjp.push(user)
		addtojpreel(botsinjp.indexOf(user))
		currententries++
		//console.log(user.bet)
		updatejpdisplay()
	}
}
function updateusertotalbet() {
	user.bet = 0
	for (var i = 0; i < user.betitems.length; i++) {
		user.bet += user.betitems[i].cube.price
	}
}
jpspinning = false
jpcountdown = function() {
	jpspinning = false
	timeleft--
	//console.log(timeleft)
	$("#jpname").html("<h4>Jackpot ("+timeleft+"s left)</h4>")
	if (timeleft <= 0) {
		clearInterval(startjpcountdown)
		spinthejp(randomnumber(getjptotal()))
	}
}
// figure out where the reel will end up on final item
jpreelContainer = document.querySelector('#jpentrycontainer');
jpreel = document.querySelector('#jpentries');
function spinthejp(ticket) {
	jpspinning = true
	console.log("spinning jackpot with ticket "+ ticket)
	jpwinningticket = ticket
	jpreelNumber = 12;
	jpreelWidth = jpreel.offsetWidth;
	jpreelWidthComputed = jpreelWidth + parseFloat(window.getComputedStyle(jpreel)["marginRight"]);
	jpwinningTicketOffset = Math.round((ticket / getjptotal()) * (jpreelWidth-0));
	jpend = (((jpreelWidthComputed) * (jpreelNumber - 1)) + jpwinningTicketOffset) - Math.round(jpreelWidthComputed / 2);

	jpreelWidth = jpreelWidth + 'px';
	reelContainerWidth = jpend + 'px';
	jpreels = jpreelNumber+1;
	jpghostreel = ''
	/* for (var i = 0; i < botsinjp.length; i++) {
		jpghostreel += "<div class='jpentries' id='jpentry"+i+"' style='transition: 0.5s; text-align: center; width: "+Math.floor((botsinjp[i].bet/$("#entries").width())*10000)/100+"%;' >"+botsinjp[i].name+" ($"+(botsinjp[i].bet/100).toLocaleString()+"),<div id='jpentrypercent"+i+"' style='text-align: center;'> with "+Math.floor((botsinjp[i].bet/getjptotal())*10000)/100+"% chance</div></div></div>"
		console.log(Math.floor((botsinjp[i].bet/getjptotal())*1000000)/10000)
	} */
	// set translation for animation
	jpreelContainerTranslate = 'translate3D(' + -jpend + 'px, 0, 0)';
	jpghostreel = $("#jpentries").html()
	$("#jpentries").css("transform", jpreelContainerTranslate)
	for (var i = 0; i < jpreelNumber; i++) {
		$("#jpentries").append(jpghostreel)
	}
	window.setTimeout(function(){
		if (getjpwinner().name == user.name) {
			itemstogivetouser = []
			for (i=0; i < botsinjp.length; i++) {
				for (e = 0; e < botsinjp[i].betitems.length; e++) {
					itemstogivetouser.push(botsinjp[i].betitems[e])
		  		}
			}
			for (i=0; i < itemstogivetouser.length; i++) {
				user.inventory.push({cube: new Immutablecube(itemstogivetouser[i].cube), prefix: itemstogivetouser[i].prefix})
			}
			updateusertotalbet()
			if(Math.floor((getjptotal()-user.bet)/1000) > 0) {
				giveexp(Math.floor((getjptotal()-user.bet)/1000)) // give the player experience based on the value of the pot they just won
				sendusermessage("alert", "Jackpot Won!", "You earned "+Math.floor((getjptotal()-user.bet)/1000)+" exp. for winning that pot!")
			}
			updateinventorydisplay()
			user.stats.jackpotswon++
			checkforachievements("jackpot")
			savegame()
		}
		$("#lastjpwinnerinfotext").html(getjpwinner().name+ " won "+(getjptotal()/100).toLocaleString()+"$ with "+(getjpwinner().bet/100).toLocaleString()+"$ with a "+Math.floor((getjpwinner().bet/getjptotal())*10000)/100+"% chance on ticket "+jpwinningticket)
	}, 6000)
	window.setTimeout(function(){
		jpspinning = false
		resetjp()
		resetallbotbets()
		resetallbotitems()
	}, 10000)
	//$("#jpentry"+i).css("width", (botsinjp[i].bet/getjptotal())*100+"%")
}
function formatbotitems(bot) {
	for (i=0; i < bot.betitems.length; i++) {
		if (bot.betitems[i].cube == undefined) {
			bot.betitems[i] = {cube: bot.betitems[i], prefix: false, suffix: false}
		}
	}
}
function getjpwinner() {
	jpentrychances = []
	for(i=0; i < botsinjp.length; i++) {
		jpvalabove = 0
		jpvalbelow = 0
		for(e=0; e < botsinjp.length; e++) {
			if(e > i) {
				jpvalabove += botsinjp[e].bet
			} else if (e < i) {
				jpvalbelow += botsinjp[e].bet
			}
		}
	jpentrychances.push({name: botsinjp[i].name, valabove: jpvalabove, valbelow: jpvalbelow})
	}
	for (i=0; i < jpentrychances.length; i++) {
		if (jpwinningticket > jpentrychances[i].valbelow && jpwinningticket <= jpentrychances[i].valbelow+botsinjp[i].bet) {
			return botsinjp[i]
		}
	}
}
