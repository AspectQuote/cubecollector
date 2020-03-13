function createclickablebox(e){
  $("#box"+e).click(function(){
    $("#box"+selectedbox.boxid).css("filter",  "")
    selectedbox = allboxes[e]
    $("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
    console.log("Selected box is now "+allboxes[e].name)
    $("#box"+e).css("filter",  "drop-shadow(-1px -1px 3px rgb(20, 20, 20)) drop-shadow(1px 1px 3px rgb(20, 20, 20))")
  })
}
function createclickablesellable(e){
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
}
function updateinventorydisplay() {
  $("#inventory").html("")
  for(i=0; i < user.inventory.length; i++) {
     $("#inventory").append("<div style='cursor: pointer; border: 2px solid "+returnraritycolor(user.inventory[i].cube.rarity)+"; width: 52px; height: 52px; margin: 3px;' class='inventoryslots' id='inventoryslot"+i+"'><img style='width:52px; filter: drop-shadow(-1px -1px 1px "+returnraritycolor(user.inventory[i].cube.rarity)+") drop-shadow(1px 1px 1px "+returnraritycolor(user.inventory[i].cube.rarity)+")' src='"+user.inventory[i].cube.image+"'><div class='itempriceoverlay'>$"+(user.inventory[i].cube.price/100).toLocaleString()+"</div></div>")
	 createclickablesellable(i)
  }
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
for (var i = 0; i < allboxes.length; i++) {
  $("#boxes").append("<img class='boxicons' id='box"+i+"' src='"+allboxes[i].image+"'>")
  createclickablebox(i)
}
$("#casename").html(selectedbox.name + " ("+user.boxes[selectedbox.boxid].amount+" owned)")
checklocalstorage()
updatemoneydisplay()
updateinventorydisplay()
