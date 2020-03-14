function Cube(name, rarity, flavortext, price, image) {
	this.name = name
	this.rarity = rarity
	this.flavortext = flavortext
	this.price = price
	this.image = image

	this.cubeid = cubeid
	cubeid++
	allcubes.push(this)
}
allcubes =[]
cubeid = 0;
//CUBE SERIES #1, 16 cubes
bluecube = new Cube("Blue Cube", light_green, "It's like a 3cm x 3cm x 3cm lego with no connecting parts!", 25, "sprites/bluecube.png")
redcube = new Cube("Red Cube", light_green, "It's like a 3cm x 3cm x 3cm lego with no connecting parts!", 20, "sprites/redcube.png")
greencube = new Cube("Green Cube", light_green, "It's like a 3cm x 3cm x 3cm lego with no connecting parts!", 75, "sprites/greencube.png")
purplecube = new Cube("Purple Cube", light_green, "It's like a 3cm x 3cm x 3cm lego with no connecting parts!", 50, "sprites/purplecube.png")
greenmushroomcube = new Cube("Green Mushroom Cube", green, "Psychadelic Square!", 120, "sprites/greenmushroomcube.png")
bluemushroomcube = new Cube("Blue Mushroom Cube", green, "It's a mushroom but like a block.. odd", 310, "sprites/bluemushroomcube.png")
ironcube = new Cube("Iron Cube", blue, "Solid iron cube, kinda heavy tbh.", 1212, "sprites/ironcube.png")
redmushroomcube = new Cube("Red  Mushroom Cube", blue, "There we go, the classic 'shroom.", 1534, "sprites/redmushroomcube.png")
hologramcube = new Cube("Holo-Cube", purple, "This is a pretty cool looking cube... too bad it's only a refraction of light, and therefore, intangible.", 2050, "sprites/hologramcube.png")
coppercube = new Cube("Copper Cube", purple, "This seems impractical for copper's main use.", 1570, "sprites/coppercube.png")
goldcube = new Cube("Gold Cube", orange, "Super heavy, and expensive!", 4120, "sprites/goldcube.png")
icecube = new Cube("Ice Cube", orange, "Not to be confused with the artist.", 3020, "sprites/icecube.png")
diamondcube = new Cube("Diamond Cube", red, "A small cube of diamonds, nice if you like diamonds", 13920, "sprites/diamondcube.png")
emeraldcube = new Cube("Emerald Cube", red, "It's like green diamonds.", 16816, "sprites/emeraldcube.png")
plastiquecube = new Cube("Plastique Cube", black, "This stylized cube is decorated with a circuitboard pattern.", 74048, "sprites/plastiquecube.png")
aspectscube = new Cube("Aspect's Cube", black, "Smells like more cubes...", 122912, "sprites/aspectscube.png")
// CUBE SERIES #2, 19 cubes
bluetargetcube = new Cube("Blue Target Cube", light_green, "A small cube built as a replica of a bullseye", 30, "sprites/bluetargetcube.png")
browntargetcube = new Cube("Brown Target Cube", light_green, "A small cube built as a replica of a bullseye", 12, "sprites/browntargetcube.png")
greentargetcube = new Cube("Green Target Cube", light_green, "A small cube built as a replica of a bullseye", 56, "sprites/greentargetcube.png")
pinktargetcube = new Cube("Pink Target Cube", green, "A small cube built as a replica of a bullseye", 90, "sprites/pinktargetcube.png")
purpletargetcube = new Cube("Purple Target Cube", green, "A small cube built as a replica of a bullseye", 156, "sprites/purpletargetcube.png")
redtargetcube = new Cube("Red Target Cube", green, "A small cube built as a replica of a bullseye", 156, "sprites/redtargetcube.png")
bluegalaxycube = new Cube("Blue Galaxy Cube", blue, "A small cube painted with a hydrographic of a galaxy.", 1612, "sprites/bluegalaxycube.png")
pinkgalaxycube = new Cube("Pink Galaxy Cube", blue, "A small cube painted with a hydrographic of a galaxy.", 1539, "sprites/pinkgalaxycube.png")
purplegalaxycube = new Cube("Purple Galaxy Cube", blue, "A small cube painted with a hydrographic of a galaxy.", 1798, "sprites/purplegalaxycube.png")
redgalaxycube = new Cube("Red Galaxy Cube", blue, "A small cube painted with a hydrographic of a galaxy.", 1282, "sprites/redgalaxycube.png")
galaxycube = new Cube("Gold Galaxy Cube", purple, "A small cube painted with a golden hydrographic of a galaxy.", 2679, "sprites/yellowgalaxycube.png")
mosaicocube = new Cube("Mosaico", purple, "A stunning amount of detail applied to a small 3x3x3 cube.", 2358, "sprites/mosaicocube.png")
mosaicacube = new Cube("Mosaica", purple, "The patterns and divets of this cube are soothing to hold in your hand.", 2778, "sprites/mosaicacube.png")
boomcube = new Cube("BOOM! Cube", orange, "A small, heavy cube painted with B-O-O-M on all sides. It smells of gunpowder.", 3763, "sprites/boomcube.png")
teleportationcube = new Cube("Teleportation Cube", orange, "A small cube that reminds you of... cake..?", 5719, "sprites/teleportationcube.png")
pillarcube = new Cube("Pillar Cube", orange, "Despite comprising of only solid marble, it emits a catchy tune.", 5379, "sprites/pillarcube.png")
dice = new Cube("The D6", red, "A normal sized 6-sided die made from ivory and indian ink.", 13951, "sprites/dice.png")
neoncube = new Cube("Neon Cube", red, "This cube is one small multicolored neon light, complete with an on-off switch.", 14398, "sprites/neoncube.png")
binarycube = new Cube("Binary Cube", black, "The cube shifts little by little every moment...", 57937, "sprites/binarycube.png")
// CUBE SERIES #3, 17 cubes
arascube = new Cube("Interdimensional Cube", black, "A tear in the fabric of space, you can feel it pulsing with cosmic energy <br/> By Arachnix", 138612, "sprites/arascube.png")
bluecheckeredcube = new Cube("Blue Checkered Cube", light_green, "A painted, checkered cube", 70, "sprites/bluecheckeredcube.png")
checkeredcube = new Cube("Checkered Cube", light_green, "A painted, checkered cube", 100, "sprites/checkeredcube.png")
cleanerscube = new Cube("The Cleaner's Cube", red, "A cube dedicated to those who would stop at nothing in their quest for rare items. <br/> By Kenny", 14682, "sprites/cleanerscube.png")
cyangrass = new Cube("Cyan Grass", green, "A cube of dirt with colored grass growing atop it.", 127, "sprites/cyangrass.png")
dirtbutwithoutcopyrightcube = new Cube("Weird Dirt Cube", blue, "This is like a gross ass piece of dirt..? Wait is this even dirt? <br/> By Trevis", 1998, "sprites/dirtbutwithoutcopyrightcube.png")
holycube = new Cube("Holy Cube", purple, "A light, thin cube that looks like a communion wafer.", 1630, "sprites/holycube.png")
holeycube = new Cube("Holey Cube", purple, "a tiny cube of swiss that doesn't smell for some reason", 1992, "sprites/holeycube.png")
minecraftgrass = new Cube("Grass Cube", blue, "A cube of dirt with colored grass growing atop it.", 1660, "sprites/minecraftgrass.png")
mutescube = new Cube("M.U.T.E.", black, "When you gaze into the cube, you feel an emptiness that leaves you sad. <br/> By Mute", 123023, "sprites/mutescube.png")
pinkcheckeredcube = new Cube("Pink Checkered Cube", light_green, "A painted, checkered cube", 67, "sprites/pinkcheckeredcube.png")
purplegrass = new Cube("Purple Grass", green, "A cube of dirt with colored grass growing atop it.", 1593, "sprites/purplegrass.png")
redgrass = new Cube("Red Grass", blue, "A cube of dirt with colored grass growing atop it.", 220, "sprites/redgrass.png")
invisiblecube = new Cube("Invisible Cube", orange, "uhh.. is this sold air?", 3569, "sprites/invisiblecube.png")
mintycube = new Cube("Minty Cube", orange, "This small cube emits a nice, minty smell.", 6123, "sprites/mintycube.png")
redeye = new Cube("Red Eye", light_green, "A cube painted to look like an eye. eew.", 175, "sprites/redeye.png")
yelloweye = new Cube("Yellow Eye", light_green, "A cube painted to look like an eye. eew.", 104, "sprites/yelloweye.png")
//= new Cube("name", rarity, "flavortext", price, "sprites/.png")
