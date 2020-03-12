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

for (var i = 0; i < reelNumber; i++) {
$("#entries").append(ghostreel)
  }
  setTimeout(function() {
    $("#lastunboxicon").attr("src", pull.cube.image)
    $("#lastunboxname").html(pull.cube.name)
    $("#lastunboxflavortext").html(pull.cube.flavortext)
		$("#lastunboxicon").css("filter",  "drop-shadow(-1px -1px 5px "+returnraritycolor(pull.cube.rarity)+") drop-shadow(1px 1px 5px "+returnraritycolor(pull.cube.rarity)+")")
  }, 6000)
  setTimeout(function(){
    resetspinner(1)
  }, 9000);
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
    $("#entries").css("transition",'6s')
    $("#entries").css("transition-timing-function", "cubic-bezier(.31,.9985,.31,.9985)")
  }, 1240);
  setTimeout(function(){
    $("#entries").html(ghostreel)
    spincooldown = false
  }, 1250)
}
// add this stuff to a separate file later!
function createclickablebox(e){
  $("#box"+e).click(function(){
    $("#box"+selectedbox.boxid).css("filter",  "")
    selectedbox = allboxes[e]
    $("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
    console.log("Selected box is now "+allboxes[e].name)
    $("#box"+e).css("filter",  "drop-shadow(-1px -1px 3px rgb(20, 20, 20)) drop-shadow(1px 1px 3px rgb(20, 20, 20))")
  })
}
updatemoneydisplay()
for (var i = 0; i < allboxes.length; i++) {
  $("#boxes").append("<img class='boxicons' id='box"+i+"' src='"+allboxes[i].image+"'>")
  createclickablebox(i)
}
$("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
