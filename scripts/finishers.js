function createclickablebox(e){
  $("#box"+e).click(function(){
    if(user.boxes[e] == undefined || null) {
      user.boxes.push({box: allboxes[e], amount:0})
    }
    $("#box"+selectedbox.boxid).css("filter",  "")
    selectedbox = allboxes[e]
    $("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
    $("#box"+e).css("filter",  "drop-shadow(-1px -1px 3px rgb(20, 20, 20)) drop-shadow(1px 1px 3px rgb(20, 20, 20))")
    $("#casebuybutton").html("BUY BOX ($"+selectedbox.price/100+")")
  })
}
$("#cubeinspectclosebutton").click(function(){
  $("#cubeinspectoverlay").hide()
})
$("#cubeinspectoverlay").hide()
function inspectcube(slot) {
  $("#cubeinspectionname").html("<span style='color: "+returnraritycolor(user.inventory[slot].cube.rarity)+"'>"+user.inventory[slot].cube.name+"</span>")
  $("#cubeinspectionimg").html("<img src='"+user.inventory[slot].cube.image+"' style='height: 100%; filter: drop-shadow(0px 0px 5px "+returnraritycolor(user.inventory[slot].cube.rarity)+") drop-shadow(0px 0px 5px "+returnraritycolor(user.inventory[slot].cube.rarity)+")'/>")
  $("#cubeinspectiondescription").html(user.inventory[slot].cube.flavortext)
  $("#cubeinspectionprice").html("$"+(user.inventory[slot].cube.price/100).toLocaleString())
  $("#cubeinspectionsellbutton").unbind()
  $("#cubeinspectionsellbutton").click(function(){
    user.money += user.inventory[slot].cube.price
	    user.inventory.splice(slot, 1)
	    updateinventorydisplay()
	    updatemoneydisplay()
	    updatequestsdisplay()
	    savegame()
    $("#cubeinspectoverlay").hide()
  })
  $("#cubeinspectoverlay").show()
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
	    $("#cubeinspectoverlay").hide()
	})
  $("#inventoryslot"+e).click(function(){
    inspectcube(e)
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
  if (currenttab == "profile") {
    $("#inventoryslot"+e).unbind()
    $("#inventoryslot"+e).click(function(){
      if (user.featureditems.filter(slot => slot == false).length >= 1){
	user.featureditems[user.featureditems.indexOf(false)] = user.inventory[e]
	user.inventory.splice(e,1)
	updateinventorydisplay()
	updateprofiledisplay()
	savegame()
      } else {
	sendusermessage('error', 'Could not add item to your showcase!', 'Your showcase is full!')
      }
    })
  }
}
function updateinventorydisplay(jackpotmode, tradeupmode, cfmode) {
  $("#cubeinspectoverlay").hide()
  $("#inventory").html("")
  for(i=0; i < user.inventory.length; i++) {
	 $("#inventory").append("<div style='cursor: pointer; border: 2px solid "+returnraritycolor(user.inventory[i].cube.rarity)+"; border-radius: 3px; width: 52px; height: 52px; margin: 3px; display: inline-block;' class='inventoryslots' id='inventoryslot"+i+"'><img style='width:52px; filter: drop-shadow(0px 0px 2px "+returnraritycolor(user.inventory[i].cube.rarity)+") drop-shadow(0px 0px 2px "+returnraritycolor(user.inventory[i].cube.rarity)+")' src='"+user.inventory[i].cube.image+"'><div class='itempriceoverlay'>$"+(user.inventory[i].cube.price/100).toLocaleString()+"</div><div class='prefixoverlay' id='prefixoverlay"+i+"'  style='position: absolute; top: 0; left: 0; font-size: x-small; color: "+returnraritycolor(user.inventory[i].prefix.rarity)+"'></div></div>")
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
  $("#inventoryvalue").html("Total Value: $"+(getplayerinventoryvalue()/100).toLocaleString())
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
  $("#casebuybutton").html("BUY BOX ($"+selectedbox.price/100+")")
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
window.setTimeout(function(){
  $("#loadingscreen").fadeOut(1500)
  window.setTimeout(function(){
    $("#loadingscreen").remove()
  }, 1600)
}, 3000)
