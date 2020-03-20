currenttab = "home"
function updatetabdisplay(tab) {
  switch (tab) {
    case "home":
      currenttab = "home"
      $("#homewrapper").show()
      $("#tradeupswrapper").hide()
      $("#levelwrapper").hide()
      $("#unboxingwrapper").hide()
      $("#settingswrapper").hide()
      $("#jpwrapper").hide()
      updateinventorydisplay(false)
      break;
    case "levels":
      currenttab = "levels"
      $("#levelwrapper").show()
      $("#homewrapper").hide()
      $("#unboxingwrapper").hide()
      $("#tradeupswrapper").hide()
      $("#settingswrapper").hide()
      $("#jpwrapper").hide()
      updateinventorydisplay(false)
      break;
    case "boxes":
      currenttab = "boxes"
      $("#unboxingwrapper").show()
      $("#tradeupswrapper").hide()
      $("#levelwrapper").hide()
      $("#homewrapper").hide()
      $("#settingswrapper").hide()
      $("#jpwrapper").hide()
      updateinventorydisplay(false)
      break;
    case "tradeups":
      currenttab = "tradeups"
      $("#tradeupswrapper").show()
      $("#levelwrapper").hide()
      $("#homewrapper").hide()
      $("#unboxingwrapper").hide()
      $("#settingswrapper").hide()
      $("#jpwrapper").hide()
      updateinventorydisplay(false)
        break;
    case "settings":
      currenttab = "settings"
      $("#settingswrapper").show()
      $("#tradeupswrapper").hide()
      $("#levelwrapper").hide()
      $("#homewrapper").hide()
      $("#unboxingwrapper").hide()
      $("#jpwrapper").hide()
      updateinventorydisplay(false)
      $("#currentusername").html("Username: "+user.name)
      break;
    case "jackpot":
      currenttab = "jackpot"
      $("#settingswrapper").hide()
      $("#tradeupswrapper").hide()
      $("#levelwrapper").hide()
      $("#homewrapper").hide()
      $("#unboxingwrapper").hide()
      updateinventorydisplay(true)
      $("#jpwrapper").show()
      $("#jpentries").html('')
      $("#jpentries").append('<div style="width: 0px;"></div>')
      for(i=0; i < botsinjp.length; i++) {
        addtojpreel(i)
      }
      updatejpdisplay()
      break;
    default:

  }
}
$("#tradeuplink").click(function(){
updatetabdisplay("tradeups")
})
$("#levellink").click(function(){
updatetabdisplay("levels")
})
$("#homelink").click(function(){
updatetabdisplay("home")
})
$("#caselink").click(function(){
updatetabdisplay("boxes")
})
$("#settingslink").click(function(){
updatetabdisplay("settings")
})
$("#jplink").click(function(){
updatetabdisplay("jackpot")
})
