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
function createclickablesellable(e, jackpotmode){
	$("#inventoryslot"+e).unbind()
	$("#inventoryslot"+e).dblclick(function(){
    user.money += user.inventory[e].cube.price
    user.inventory.splice(e, 1)
    updateinventorydisplay()
    updatemoneydisplay()
    savegame()
  })
  $("#inventoryslot"+e).click(function(){
    $("#lastunboxicon").attr("src", user.inventory[e].cube.image)
    $("#lastunboxname").html(user.inventory[e].cube.name)
    $("#lastunboxflavortext").html(user.inventory[e].cube.flavortext)
	$("#lastunboxicon").css("filter",  "drop-shadow(-1px -1px 5px "+returnraritycolor(user.inventory[e].cube.rarity)+") drop-shadow(1px 1px 5px "+returnraritycolor(user.inventory[e].cube.rarity)+")")
  })
  if (jackpotmode == true || currenttab == "jackpot") {
    console.log("jackpot mode is on for "+user.inventory.length+" cubes!")
    $("#inventoryslot"+e).unbind()
    $("#inventoryslot"+e).dblclick(function(){
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
}
function updateinventorydisplay(jackpotmode) {
  $("#inventory").html("")
  for(i=0; i < user.inventory.length; i++) {
	 $("#inventory").append("<div style='cursor: pointer; border: 2px solid "+returnraritycolor(user.inventory[i].cube.rarity)+"; border-radius: 3px; width: 52px; height: 52px; margin: 3px;' class='inventoryslots' id='inventoryslot"+i+"'><img style='width:52px; filter: drop-shadow(-1px -1px 1px "+returnraritycolor(user.inventory[i].cube.rarity)+") drop-shadow(1px 1px 1px "+returnraritycolor(user.inventory[i].cube.rarity)+")' src='"+user.inventory[i].cube.image+"'><div class='itempriceoverlay'>$"+(user.inventory[i].cube.price/100).toLocaleString()+"</div></div>")
	 createclickablesellable(i , jackpotmode)
     }
  $("#inventoryslotsfilled").html(user.inventory.length)
  $("#inventoryvalue").html("Inventory Value: $"+(getplayerinventoryvalue()/100).toLocaleString())
}
val=0;
function getplayerinventoryvalue(){
	val=0;
	for (i=0; i < user.inventory.length; i++) {
		val += user.inventory[i].cube.price
	}
	return val
}
updatemoneydisplay()
function updateboxesdisplay() {
  $("#boxes").html('')
  $("#boxes").unbind()
  for (var i = 0; i < allboxes.length; i++) {
    $("#boxes").append("<div class='boxiconwrapper' style='display: inline-block; position: relative;'><img class='boxicons' id='box"+i+"' src='"+allboxes[i].image+"'><div class='itempriceoverlay' style='color: white;'>$"+(allboxes[i].price/100).toLocaleString()+", "+user.boxes[i].amount+" owned</div></div>")
    createclickablebox(i)
  }
  $("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
  $("#box"+allboxes.indexOf(selectedbox)).css("filter",  "drop-shadow(-1px -1px 3px rgb(20, 20, 20)) drop-shadow(1px 1px 3px rgb(20, 20, 20))")
}
$("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
updatetabdisplay("home")
checklocalstorage()
updatemoneydisplay()
updateinventorydisplay()
updateboxesdisplay()
updatetabdisplay("home")
$("#inventoryselling").html("Sell Below $" + (user.sellbelowprice/100).toLocaleString())
