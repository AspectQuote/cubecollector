function Achievement(name, description, icon, type, checker, expreward, visibility) {
  this.name = name
  this.description = description
  this.icon = icon
  this.type = type
  this.checker = checker
  this.expreward = expreward
  this.visibility = visibility
  this.id = achievementcount
  achievementcount++
  allachievements.push(this)
}
achievementcount = 0
allachievements = []
function checkforachievements(type){
  //if (category == general) {
  switch (type) {
    case "levels":
      for (var i = 0; i < allachievements.filter(achievement => achievement.type == "levels").length; i++) {
        allachievements.filter(achievement => achievement.type == "levels")[i].checker()
      }
      break;
    case "jackpot":
      for (var i = 0; i < allachievements.filter(achievement => achievement.type == "jackpot").length; i++) {
        allachievements.filter(achievement => achievement.type == "jackpot")[i].checker()
      }
      break;
    case "unboxing":
      for (var i = 0; i < allachievements.filter(achievement => achievement.type == "unboxing").length; i++) {
        allachievements.filter(achievement => achievement.type == "unboxing")[i].checker()
      }
      break;
    case "misc":
      for (var i = 0; i < allachievements.filter(achievement => achievement.type == "misc").length; i++) {
        allachievements.filter(achievement => achievement.type == "misc")[i].checker()
      }
      break;
    case "tradeup":
      for (var e = 0; e < allachievements.filter(achievement => achievement.type == "tradeup").length; e++) {
        allachievements.filter(achievement => achievement.type == "tradeup")[e].checker()
      }
      break;
    case "cf":
      for (var e = 0; e < allachievements.filter(achievement => achievement.type == "cf").length; e++) {
        allachievements.filter(achievement => achievement.type == "cf")[e].checker()
      }
      break;
    case "quest":
      for (var e = 0; e < allachievements.filter(achievement => achievement.type == "quest").length; e++) {
        allachievements.filter(achievement => achievement.type == "quest")[e].checker()
      }
      break;
    default:
      for (var e = 0; e < allachievements.length; e++) {
        allachievements[e].checker()
      }
    }
    updateachievementsdisplay()
//  }
}
// achievement declarations
jpwinneriachievement = new Achievement("Jackpot Winner I", "Win 3 Jackpots", "sprites/achievementicons/jptier1.png", "jackpot",function(){
  if(user.stats.jackpotswon >= 3 && user.achievements.includes(0) == false){
    user.achievements.push(0)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 10, "visibile")
jpwinneriiachievement = new Achievement("Jackpot Winner II", "Win 6 Jackpots", "sprites/achievementicons/jptier2.png", "jackpot",function(){
  if(user.stats.jackpotswon >= 6 && user.achievements.includes(1) == false){
    user.achievements.push(1)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 50, "visibile")
jpwinneriiiachievement = new Achievement("Jackpot Winner III", "Win 10 Jackpots", "sprites/achievementicons/jptier3.png", "jackpot",function(){
  if(user.stats.jackpotswon >= 10 && user.achievements.includes(2) == false){
    user.achievements.push(2)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 100, "visibile")
jpwinnerivachievement = new Achievement("Jackpot Winner IV", "Win 20 Jackpots", "sprites/achievementicons/jptier4.png", "jackpot",function(){
  if(user.stats.jackpotswon >= 20 && user.achievements.includes(3) == false){
    user.achievements.push(3)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 500, "visibile")
jpwinnervachievement = new Achievement("Jackpot Winner V", "Win 30 Jackpots", "sprites/achievementicons/jptier5.png", "jackpot",function(){
  if(user.stats.jackpotswon >= 30 && user.achievements.includes(4) == false){
    user.achievements.push(4)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 750, "visibile")
pullalightgreenachievement = new Achievement("Pull a Light Green Cube", "Unbox an item of light green quality", "sprites/achievementicons/lightgreenpull.png", "unboxing",function(){
  if(ticket >= 0 && ticket <= 400 && user.achievements.includes(5) == false ){
    user.achievements.push(5)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 1, "visibile")
pullagreenachievement = new Achievement("Pull a Green Cube", "Unbox an item of green quality", "sprites/achievementicons/greenpull.png", "unboxing",function(){
  if(ticket >= 401 && ticket <= 650 && user.achievements.includes(6) == false ){
    user.achievements.push(6)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 5, "visibile")
pullablueachievement = new Achievement("Pull a Blue Cube", "Unbox an item of blue quality", "sprites/achievementicons/bluepull.png", "unboxing",function(){
  if(ticket >= 651 && ticket <= 800 && user.achievements.includes(7) == false ){
    user.achievements.push(7)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 10, "visibile")
pullapurpleachievement = new Achievement("Pull a Purple Cube", "Unbox an item of purple quality", "sprites/achievementicons/purplepull.png", "unboxing",function(){
  if(ticket >= 801 && ticket <= 900 && user.achievements.includes(8) == false ){
    user.achievements.push(8)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 20, "visibile")
pullanorangeachievement = new Achievement("Pull an Orange Cube", "Unbox an item of orange quality", "sprites/achievementicons/orangepull.png", "unboxing",function(){
  if(ticket >= 901 && ticket <= 980 && user.achievements.includes(9) == false ){
    user.achievements.push(9)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 50, "visibile")
pullaredachievement = new Achievement("Pull a Red Cube", "Unbox an item of red quality", "sprites/achievementicons/redpull.png", "unboxing",function(){
  if(ticket >= 981 && ticket <= 995 && user.achievements.includes(10) == false ){
    user.achievements.push(10)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 100, "visibile")
pullablackachievement = new Achievement("Pull A Black Cube", "Unbox an item of black quality", "sprites/achievementicons/blackpull.png", "unboxing",function(){
  if(ticket >= 996 && ticket <= 1000 && user.achievements.includes(11) == false ){
    user.achievements.push(11)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 300, "visibile")
levelfiveachievement = new Achievement("Get to Level Five", "Level up to level 5", "sprites/achievementicons/level5.png", "levels",function(){
  if(user.level >= 5 && user.achievements.includes(12) == false ){
    user.achievements.push(12)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 0, "visibile")
leveltenachievement = new Achievement("Get to Level Ten", "Level up to level 10", "sprites/achievementicons/level10.png", "levels",function(){
  if(user.level >= 10 && user.achievements.includes(13) == false ){
    user.achievements.push(13)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 0, "visibile")
leveltwentyachievement = new Achievement("Get to Level Twenty", "Level up to level 20", "sprites/achievementicons/level20.png", "levels",function(){
  if(user.level >= 20 && user.achievements.includes(14) == false ){
    user.achievements.push(14)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 0, "visibile")
levelthirtyachievement = new Achievement("Get to Level Thirty", "Level up to level 30", "sprites/achievementicons/level30.png", "levels",function(){
  if(user.level >= 30 && user.achievements.includes(15) == false ){
    user.achievements.push(15)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 0, "visibile")
levelfortyachievement = new Achievement("Get to Level Forty", "Level up to level 40", "sprites/achievementicons/level40.png", "levels",function(){
  if(user.level >= 40 && user.achievements.includes(16) == false ){
    user.achievements.push(16)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 0, "visibile")
levelfiftyachievement = new Achievement("Get to Level Fifty", "Level up to level 50", "sprites/achievementicons/level50.png", "levels",function(){
  if(user.level >= 50 && user.achievements.includes(17) == false ){
    user.achievements.push(17)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 0, "visibile")
unboxeriachievement = new Achievement("Unboxer I", "Unbox 10 boxes", "sprites/achievementicons/unboxingtier1.png", "unboxing",function(){
  if(user.stats.unboxes >= 10 && user.achievements.includes(18) == false ){
    user.achievements.push(18)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 10, "visibile")
unboxeriiachievement = new Achievement("Unboxer II", "Unbox 50 boxes", "sprites/achievementicons/unboxingtier2.png", "unboxing",function(){
  if(user.stats.unboxes >= 50 && user.achievements.includes(19) == false ){
    user.achievements.push(19)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 50, "visibile")
unboxeriiiachievement = new Achievement("Unboxer III", "Unbox 200 boxes", "sprites/achievementicons/unboxingtier3.png", "unboxing",function(){
  if(user.stats.unboxes >= 200 && user.achievements.includes(20) == false ){
    user.achievements.push(20)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 200, "visibile")
unboxerivachievement = new Achievement("Unboxer IV", "Unbox 500 boxes", "sprites/achievementicons/unboxingtier4.png", "unboxing",function(){
  if(user.stats.unboxes >= 500 && user.achievements.includes(21) == false ){
    user.achievements.push(21)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 500, "visibile")
unboxervachievement = new Achievement("Unboxer V", "Unbox 1000 boxes", "sprites/achievementicons/unboxingtier5.png", "unboxing",function(){
  if(user.stats.unboxes >= 1000 && user.achievements.includes(22) == false ){
    user.achievements.push(22)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 1000, "visibile")
obtainagoldachievement = new Achievement("Obtain a Gold Cube", "Trade up to a gold quality item", "sprites/achievementicons/goldtradeup.png", "tradeup",function(){
  if(tradeupresult.cube.rarity == yellow && user.achievements.includes(23) == false ){
    user.achievements.push(23)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 750, "visibile")
tradeupiachievement = new Achievement("Trader-Upper I", "Trade up 3 times", "sprites/achievementicons/tradeuptier1.png", "tradeup", function(){
  if(user.stats.tradeups >= 3 && user.achievements.includes(24) == false ){
    user.achievements.push(24)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 25, "visibile")
tradeupiiachievement = new Achievement("Trader-Upper II", "Trade up 10 times", "sprites/achievementicons/tradeuptier2.png", "tradeup", function(){
  if(user.stats.tradeups >= 10 && user.achievements.includes(25) == false ){
    user.achievements.push(25)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 50, "visibile")
tradeupiiiachievement = new Achievement("Trader-Upper III", "Trade up 30 times", "sprites/achievementicons/tradeuptier3.png", "tradeup", function(){
  if(user.stats.tradeups >= 30 && user.achievements.includes(26) == false ){
    user.achievements.push(26)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 100, "visibile")
tradeupivachievement = new Achievement("Trader-Upper IV", "Trade up 50 times", "sprites/achievementicons/tradeuptier4.png", "tradeup", function(){
  if(user.stats.tradeups >= 50 && user.achievements.includes(27) == false ){
    user.achievements.push(27)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 300, "visibile")
tradeupvachievement = new Achievement("Trader-Upper V", "Trade up 100 times", "sprites/achievementicons/tradeuptier5.png", "tradeup", function(){
  if(user.stats.tradeups >= 100 && user.achievements.includes(28) == false ){
    user.achievements.push(28)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name, this.description)
  }}, 500, "visibile")
getbaitedachievement = new Achievement("BAITED!", "Get baited by a box", "sprites/achievementicons/baited.png", "unboxing", function(){
  if(ticket <= 15 && user.achievements.includes(29) == false){
    user.achievements.push(29)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 40, "visible")
coinflipi = new Achievement("Coinflip Winner I", "Win 3 Coinflips", "sprites/achievementicons/cftier1.png", "cf", function(){
  if(user.stats.cfswon >= 3 && user.achievements.includes(30) == false){
    user.achievements.push(30)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 50, "visible")
coinflipii = new Achievement("Coinflip Winner II", "Win 6 Coinflips", "sprites/achievementicons/cftier2.png", "cf", function(){
  if(user.stats.cfswon >= 6 && user.achievements.includes(31) == false){
    user.achievements.push(31)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 100, "visible")
coinflipiii = new Achievement("Coinflip Winner III", "Win 10 Coinflips", "sprites/achievementicons/cftier3.png", "cf", function(){
  if(user.stats.cfswon >= 10 && user.achievements.includes(32) == false){
    user.achievements.push(32)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 250, "visible")
coinflipiv = new Achievement("Coinflip Winner IV", "Win 15 Coinflips", "sprites/achievementicons/cftier4.png", "cf", function(){
  if(user.stats.cfswon >= 15 && user.achievements.includes(33) == false){
    user.achievements.push(33)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 500, "visible")
coinflipv = new Achievement("Coinflip Winner V", "Win 25 Coinflips", "sprites/achievementicons/cftier5.png", "cf", function(){
  if(user.stats.cfswon >= 25 && user.achievements.includes(34) == false){
    user.achievements.push(34)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 750, "visible")
questsi = new Achievement("Quest Fulfiller I", "Complete 5 Quests", "sprites/achievementicons/questtier1.png", "quest", function(){
  if(user.questscompleted >= 5 && user.achievements.includes(35) == false){
    user.achievements.push(35)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 50, "visible")
questsii = new Achievement("Quest Fulfiller II", "Complete 15 Quests", "sprites/achievementicons/questtier2.png", "quest", function(){
  if(user.questscompleted >= 15 && user.achievements.includes(36) == false){
    user.achievements.push(36)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 100, "visible")
questsiii = new Achievement("Quest Fulfiller III", "Complete 30 Quests", "sprites/achievementicons/questtier3.png", "quest", function(){
  if(user.questscompleted >= 30 && user.achievements.includes(37) == false){
    user.achievements.push(37)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 250, "visible")
questsiv = new Achievement("Quest Fulfiller IV", "Complete 70 Quests", "sprites/achievementicons/questtier4.png", "quest", function(){
  if(user.questscompleted >= 70 && user.achievements.includes(38) == false){
    user.achievements.push(38)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 500, "visible")
questsv = new Achievement("Quest Fulfiller V", "Complete 150 Quests", "sprites/achievementicons/questtier5.png", "quest", function(){
  if(user.questscompleted >= 150 && user.achievements.includes(39) == false){
    user.achievements.push(39)
    giveexp(this.expreward)
    sendusermessage("alert", "Achievement Get! "+ this.name +" ("+this.expreward+" exp.) ", this.description)
  }
}, 1000, "visible")

function updateachievementsdisplay() {
  $("#achievementsmain").html('')
  for(i=0; i < allachievements.length; i++) {
    $("#achievementsmain").append("<div class='achievements'><img src='"+allachievements[i].icon+"' style='width: 64px; height: 64px; filter: grayscale("+getgrayscaleachievement(i)+")'/><div class='tooltips'><div style='font-size: large;'>"+allachievements[i].name+"</div><br/>"+allachievements[i].description+"<br/><br/><div style='font-size: x-small;'>("+allachievements[i].expreward+" exp. reward)</div></div></div>")
  }
  $("#achievementcount").html(user.achievements.length+"/"+allachievements.length+" ("+Math.floor((user.achievements.length/allachievements.length)*100)+"%)")
}
function getgrayscaleachievement(id) {
  if (user.achievements.includes(id) == false) {
    return "100%"
  } else {
    return "0%"
  }
}
