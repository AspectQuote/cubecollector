boxcount = 0
function Box(name, price, prefixes, suffixes, cubes, image) {
	this.name = name
	this.price = price
	this.prefixes = prefixes
	this.suffixes = suffixes
	this.cubes = cubes
	this.image = image
	this.boxid = boxcount
	boxcount++
	user.boxes.push({box: this, amount: 0})
	allboxes.push(this)
}
allboxes = []
spincooldown = false
pull = {}
function unbox(box){
	if (spincooldown == false) {
		$("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
		spincooldown = true
		pull = {cube: false, prefix: false, suffix: false}
		ticket = randomnumber(1000)
		if (ticket <=  400) {                  // light green
			console.log('Cube Pull is light green')
			pull.cube = box.cubes.filter(cube => cube.rarity == light_green)[randomarray(box.cubes.filter(cube => cube.rarity == light_green).length)]
			console.log(pull.cube.name)
		}
		if (ticket <=  650 && ticket >= 401) { // green
			console.log('Cube Pull is green')
			pull.cube = box.cubes.filter(cube => cube.rarity == green)[randomarray(box.cubes.filter(cube => cube.rarity == green).length)]
			console.log(pull.cube.name)
		}
		if (ticket <=  800 && ticket >= 651) { // blue
			console.log('Cube Pull is blue')
			pull.cube = box.cubes.filter(cube => cube.rarity == blue)[randomarray(box.cubes.filter(cube => cube.rarity == blue).length)]
			console.log(pull.cube.name)
		}
		if (ticket <=  900 && ticket >= 801) { // purple
			console.log('Cube Pull is purple')
			pull.cube = box.cubes.filter(cube => cube.rarity == purple)[randomarray(box.cubes.filter(cube => cube.rarity == purple).length)]
			console.log(pull.cube.name)
		}
		if (ticket <=  980 && ticket >= 901) { // orange
			console.log('Cube Pull is orange')
			pull.cube = box.cubes.filter(cube => cube.rarity == orange)[randomarray(box.cubes.filter(cube => cube.rarity == orange).length)]
			console.log(pull.cube.name)
		}
		if (ticket <=  995 && ticket >= 981) { // red
			console.log('Cube Pull is red')
			pull.cube = box.cubes.filter(cube => cube.rarity == red)[randomarray(box.cubes.filter(cube => cube.rarity == red).length)]
			console.log(pull.cube.name)
		}
		if (ticket <= 1000 && ticket >= 996){ // black
			console.log('Cube Pull is black')
			user.stats.blacksunboxed++
			pull.cube = box.cubes.filter(cube => cube.rarity == black)[randomarray(box.cubes.filter(cube => cube.rarity == black).length)]
			console.log(pull.cube.name)
		}
		console.log(ticket)
		reelthecasein(ticket)
		user.stats.unboxes++
	} else {
		if (spincooldown == true) {
			console.log("ERROR! REEL IS SPINNING!")
		}
	}
}
function returnraritycolor(item){
switch (item) {
	  case light_green:
		  return "rgba(144, 193, 63, 0.8)"
	  	break;
		case green:
			return "rgba(72, 114, 43, 0.8)"
			break;
		case blue:
			return "rgba(0, 110, 144, 0.8)"
			break;
	  case purple:
			return "rgba(98, 70, 107, 0.8)"
			break;
	  case orange:
			return "rgba(219, 76, 64, 0.8)"
			break;
	  case red:
			return "rgba(191, 26, 47, 0.8)"
			break;
			case black:
				return "rgba(0, 0, 0, 0.8)"
			  break;
		case yellow:
				return "rgba(252, 215, 87, 0.8)"
				break;
		default:
console.log("invalid color!!")
	}
}

// BOX DECLARATIONS

CubeSeriesOne = new Box("Cube Series #1", 1000, ['epic'], ['strangeness'], [bluecube, redcube, greencube, purplecube, greenmushroomcube, bluemushroomcube, ironcube, redmushroomcube, hologramcube, coppercube, goldcube, icecube, diamondcube, emeraldcube, plastiquecube, aspectscube, adamantiumcube, bluenebulacube], "sprites/cubeseriesonecase.png")
CubeSeriesTwo = new Box("Cube Series #2", 1000, ['odd'], ['cringe'], [bluetargetcube, browntargetcube, greentargetcube, pinktargetcube, purpletargetcube, redtargetcube, bluegalaxycube, pinkgalaxycube, purplegalaxycube, redgalaxycube, galaxycube, mosaicacube, mosaicocube, boomcube, teleportationcube, pillarcube, dice, neoncube, binarycube, goldmushroomcube, goldendicecube], "sprites/cubeseriestwocase.png")
CubeSeriesThree = new Box("Cube Series #3", 1500, ['interesting'], ['greed'], [arascube, bluecheckeredcube, checkeredcube, cleanerscube, cyangrass, dirtbutwithoutcopyrightcube, holycube, holeycube, minecraftgrass, mutescube, pinkcheckeredcube, purplegrass, mutescube, pinkcheckeredcube, purplegrass, redgrass, invisiblecube, mintycube, redeye, yelloweye, cakecube], "sprites/cubeseriesthreecase.png")
CubeSeriesFour = new Box("Cube Series #4", 1500, ['gamerly'], ['grindyness'], [bluepillcube, yellowpillcube, bluestripedcube, brownstripedcube, buddycube, bulletcube, burgercube, cheeseburgercube, dlorecube, eventhorizoncube, greenpillcube, greenstripedcube, lemonke, loadingcube, pinkpillcube, nebulacube, purplestripedcube, rustycube, shotgunshellcube, stripedcube, rubycube, spherecube], "sprites/cubeseries4/cubeseriesfourcase.png")
SuperstitiousBox = new Box("Superstitious Box", 1000, ['divine'], ['godliness'], [thefoolcube, themagiciancube, thehighpriestesscube, theemperorcube, theheirophantcube, theloverscube, thechariotcube, justicecube, hermitcube, wheeloffortunecube, strengthcube, hangedmancube, deathcube, thetowercube, thedevilcube, temperancecube, thestarscube, themooncube, thesuncube, judgementcube, theworldcube, capricorncube, aquariuscube, ariescube, piscescube, tauruscube, geminicube, cancercube, leocube, virgocube, libracube, scorpiocube, sagittariuscube, ophichuscube, ankhcube, brimstonecube, holygrailcube, starrynightcube, illuminaticube, goldophichuscube], "sprites/superstitiousbox/superstitiousbox.png")
HomeBox = new Box("Home Box", 750, ['homey'], ['messiness'], [brownbookcube, greenbookcube, redbookcube, lavenderbookcube, bluebedcube, redbedcube, yellowbedcube, purplebedcube, greenbedcube, bluewashingmachinecube, greenwashingmachinecube, washingmachinecube, pinkwashingmachinecube, redwashingmachinecube, glassofsodacube, glassofwatercube, glassofwinecube, greentoastercube, purpletoastercube, redtoastercube, toastercube, bluetoastercube, bluehousecube, greenhouse, pinkhouse, yellowhouse, purpletablecube, redtablecube, bluetablecube, greentablecube, browntablecube, confusedcube, deadcube, dizzycube, happycube, hungrycube, sadcube, sleepycube, straightfacecube, dogcube, catcube, astroturfcube, alarmcube, grandpasrelic, fridgecube, laptopcube, desktopcube, microwavecube, ovencube, itcries, gildedcube, tvcube, monitorcube, truereliccube], "sprites/homebox/homebox.png")
GameBox = new Box("Video Games Box", 5000, ['gaming'], ['gameyness'], [geometrydashcube, robloxcube, keyboardcube, devildaggerscube, controllercube, inspirationi, inspirationii, grassblockcube, asepritecube, battleblockcube, enterthegungeoncube, halflifecube, hollowknightcube, theendisnighcube, oneshotcube, portalcube, thebindingofisaaccube, teamfortresstwocube, starboundcube, undertalecube, hyperlightdriftercube, tabscube, halocube, gmodcube, smashbroscube, smwcube], "sprites/gamebox/gamebox.png")

selectedbox = CubeSeriesOne
