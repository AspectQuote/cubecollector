// figure out where the reel will end up on final item
reelContainer = document.querySelector('#entrycontainer');
reel = document.querySelector('#entries');
function reelthecasein(ticket) {
console.log("spinning case with ticket "+ ticket)
reelNumber = 12;
reelWidth = reel.offsetWidth;
reelWidthComputed = reelWidth + parseFloat(window.getComputedStyle(reel)["marginRight"]);
winningTicketOffset = Math.round((ticket / 1000) * reelWidth);
end = (((reelWidthComputed) * (reelNumber - 1)) + winningTicketOffset) - Math.round(reelWidthComputed / 2);

reelWidth = reelWidth + 'px';
reelContainerWidth = end + 'px';
reels = reelNumber+1;
ghostreel = $("#entries").html()
// set translation for animation
reelContainerTranslate = 'translate3D(' + -end + 'px, 0, 0)';
$("#entries").css("transform", reelContainerTranslate)
function getcubewithprefix() {
  if(pull.prefix != false) {
    return pull.prefix.namespace+" "+pull.cube.name
  } else {
    return pull.cube.name
  }
}
for (var i = 0; i < reelNumber; i++) {
$("#entries").append(ghostreel)
  }
  setTimeout(function() {
    $("#lastunboxicon").attr("src", pull.cube.image)
    pull.cube = new Immutablecube(pull.cube)
    $("#lastunboxname").html(getcubewithprefix())
    $("#lastunboxflavortext").html(pull.cube.flavortext)
		$("#lastunboxicon").css("filter",  "drop-shadow(-1px -1px 5px "+returnraritycolor(pull.cube.rarity)+") drop-shadow(1px 1px 5px "+returnraritycolor(pull.cube.rarity)+")")
    user.inventory.push(pull) //weird but aight
    applyprefixestouserinventory()
    updateinventorydisplay()
    if (ticket <=  400) {   // light green
			giveexp(2)
		}
		if (ticket <=  650 && ticket >= 401) { // green
			giveexp(5)
		}
		if (ticket <=  800 && ticket >= 651) { // blue
			giveexp(8)
		}
		if (ticket <=  900 && ticket >= 801) { // purple
			giveexp(15)
		}
		if (ticket <=  980 && ticket >= 901) { // orange
		  giveexp(27)
		}
		if (ticket <=  995 && ticket >= 981) { // red
			giveexp(50)
		}
		if (ticket <= 1000 && ticket >= 996){ // black
			giveexp(100)
		}
    checkforachievements("unboxing")
    savegame()
  }, user.spinspeed*1000)
  setTimeout(function(){
    resetspinner(1)
  }, user.spinspeed*1000 + 3000);
}
function resetspinner(beginning){
  if (beginning == true) {
    $("#entries").css("transition",'0.01s')
  }
  $("#entrycontainer").css("opacity",'0')
  setTimeout(function(){
    $("#entries").css("transform",'translate3D(0px, 0, 0)')
  }, 750);
  setTimeout(function(){
  $("#entrycontainer").css("opacity",'1')
  }, 1000);
  setTimeout(function(){
    $("#entries").css("transition", user.spinspeed+'s')
    $("#entries").css("transition-timing-function", "cubic-bezier(.31,.9985,.31,.9985)")
  }, 1240);
  setTimeout(function(){
    $("#entries").html(ghostreel)
    spincooldown = false
  }, 1250)
}
// add this stuff to a separate file later!
