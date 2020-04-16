function createclickablebox(e){
  $("#box"+e).click(function(){
    if(user.boxes[e] == undefined || null) {
      user.boxes.push({box: allboxes[e], amount:0})
    }
    $("#box"+selectedbox.boxid).css("filter",  "")
    selectedbox = allboxes[e]
    $("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
    console.log("Selected box is now "+allboxes[e].name)
    $("#box"+e).css("filter",  "drop-shadow(-1px -1px 3px rgb(20, 20, 20)) drop-shadow(1px 1px 3px rgb(20, 20, 20))")
  })
}
function createclickablesellable(e, jackpotmode, tradeupmode, cfmode){
	$("#inventoryslot"+e).unbind()
	$("#inventoryslot"+e).dblclick(function(){
    user.money += user.inventory[e].cube.price
    user.inventory.splice(e, 1)
    updateinventorydisplay()
    updatemoneydisplay()
    updatequestsdisplay()
    savegame()
  })
  $("#inventoryslot"+e).click(function(){
    $("#lastunboxicon").attr("src", user.inventory[e].cube.image)
    $("#lastunboxname").html(user.inventory[e].cube.name)
    $("#lastunboxflavortext").html(user.inventory[e].cube.flavortext)
	$("#lastunboxicon").css("filter",  "drop-shadow(-1px -1px 5px "+returnraritycolor(user.inventory[e].cube.rarity)+") drop-shadow(1px 1px 5px "+returnraritycolor(user.inventory[e].cube.rarity)+")")
  })
  if (jackpotmode == true || currenttab == "jackpot") {
    $("#inventoryslot"+e).unbind()
    $("#inventoryslot"+e).click(function(){
      if (jpgoing == false && jpspinning == false) {
        startjackpot(8)
      }
      if (jpspinning == false && jpgoing == true) {
	       userenterjp(user.inventory[e])
	       user.inventory.splice(e, 1)
	       updateinventorydisplay()
	       savegame()
      }
    })
  }
  if (tradeupmode == true || currenttab == "tradeups") {
    $("#inventoryslot"+e).unbind()
    $("#inventoryslot"+e).click(function(){
      if (itemscounttradeup < 20 && user.inventory[e].cube.rarity != yellow) {
	       deposititemfortradeup(e)
      }
    })
  }
  if (cfmode == true || currenttab == "coinflip") {
    $("#inventoryslot"+e).unbind()
    $("#inventoryslot"+e).click(function(){
      if(cfitems.length < 10) {
       deposititemforcf(e)
      }
    })
  }
}
function updateinventorydisplay(jackpotmode, tradeupmode, cfmode) {
  $("#inventory").html("")
  for(i=0; i < user.inventory.length; i++) {
	 $("#inventory").append("<div style='cursor: pointer; border: 2px solid "+returnraritycolor(user.inventory[i].cube.rarity)+"; border-radius: 3px; width: 52px; height: 52px; margin: 3px;' class='inventoryslots' id='inventoryslot"+i+"'><img style='width:52px; filter: drop-shadow(0px 0px 2px "+returnraritycolor(user.inventory[i].cube.rarity)+") drop-shadow(0px 0px 2px "+returnraritycolor(user.inventory[i].cube.rarity)+")' src='"+user.inventory[i].cube.image+"'><div class='itempriceoverlay'>$"+(user.inventory[i].cube.price/100).toLocaleString()+"</div><div class='prefixoverlay' id='prefixoverlay"+i+"'  style='position: absolute; top: 0; left: 0; font-size: x-small; color: "+returnraritycolor(user.inventory[i].prefix.rarity)+"'></div></div>")
	 if (user.inventory[i].cube.price > user.stats.bestcube.price) {
	   user.stats.bestcube = user.inventory[i].cube
	 }
	 if (user.inventory[i].prefix != false) {
	   $("#prefixoverlay"+i).html(user.inventory[i].prefix.namespace)
	 }
	 createclickablesellable(i , jackpotmode, tradeupmode, cfmode)
	 if (user.foundcubes.includes(user.inventory[i].cube.cubeid) == false){
	    user.foundcubes.push(user.inventory[i].cube.cubeid)
	 }
  }
  if (currenttab == "profile") {
    updateprofiledisplay()
  }
  $("#inventoryslotsfilled").html(user.inventory.length)
  $("#inventoryslotsmax").html("/"+user.maxinventory)
  $("#inventoryvalue").html("Inventory Value: $"+(getplayerinventoryvalue()/100).toLocaleString())
  updatequestsdisplay()
}
function getprefixrarity(slot) {
  if(slot.prefix != false) {
    returnraritycolor(slot.prefix.rarity)
  } else {
    return "white"
  }
}
updatemoneydisplay()
function updateboxesdisplay() {
  $("#boxes").html('')
  $("#boxes").unbind()
  for (var i = 0; i < allboxes.length; i++) {
    if(allboxes[i].name != "Twitch Collection" && allboxes[i].name != "Slime Collection") {
      $("#boxes").append("<div class='boxiconwrapper' style='display: inline-block; position: relative;'><img class='boxicons' id='box"+i+"' src='"+allboxes[i].image+"'><div class='itempriceoverlay' style='color: white;'>$"+(allboxes[i].price/100).toLocaleString()+", "+user.boxes[i].amount+" owned</div></div>")
      createclickablebox(i)
    }
  }
  $("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
  $("#box"+allboxes.indexOf(selectedbox)).css("filter",  "drop-shadow(-1px -1px 3px rgb(20, 20, 20)) drop-shadow(1px 1px 3px rgb(20, 20, 20))")
}
hidealltabs()
$("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
updatetabdisplay("home")
checklocalstorage()
updatemoneydisplay()
updateinventorydisplay()
updateboxesdisplay()
updatecoinflipdisplay()
updatecubepediadisplay()
updateskillsdisplay()
updatetabdisplay("home")
$("#createcfcontainer").hide()
$("#inventoryselling").html("Sell Below $" + (user.sellbelowprice/100).toLocaleString())
makenewquest()
$("#entries").css("transition", user.spinspeed+'s')
$("#entries").css("transition-timing-function", "cubic-bezier(.31,.9985,.31,.9985)")
