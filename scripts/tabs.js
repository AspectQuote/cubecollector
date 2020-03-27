currenttab = "home"
function updatetabdisplay(tab) {
  switch (tab) {
    case "home":
      hidecurrenttab()
      currenttab = "home"
      $("#homewrapper").show()
      updateinventorydisplay(false)
      break;
    case "achievements":
      hidecurrenttab()
      currenttab = "achievements"
      $("#achievementwrapper").show()
      updateinventorydisplay(false)
      updateachievementsdisplay()
      break;
    case "boxes":
      hidecurrenttab()
      currenttab = "boxes"
      $("#unboxingwrapper").show()
      updateinventorydisplay(false)
      break;
    case "tradeups":
      hidecurrenttab()
      currenttab = "tradeups"
      $("#tradeupswrapper").show()
      updateinventorydisplay(false, true)
      updatetradeupsinputdisplay()
      getrandomtradeuppropaganda()
        break;
    case "settings":
      hidecurrenttab()
      currenttab = "settings"
      $("#settingswrapper").show()
      updateinventorydisplay(false)
      $("#currentusername").html("Username: "+user.name)
      break;
    case "jackpot":
      hidecurrenttab()
      currenttab = "jackpot"
      updateinventorydisplay(true)
      $("#jpwrapper").show()
      $("#jpentries").html('')
      $("#jpentries").append('<div style="width: 0px;"></div>')
      for(i=0; i < botsinjp.length; i++) {
        addtojpreel(i)
      }
      updatejpdisplay()
      break;
    case "profile":
      hidecurrenttab()
      currenttab = "profile"
      updateprofiledisplay()
      $("#profilewrapper").show()
      updateinventorydisplay(false)
      break;
    default:

  }
}
$("#tradeuplink").click(function(){
updatetabdisplay("tradeups")
})
$("#achievementslink").click(function(){
updatetabdisplay("achievements")
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
$("#topbarprofilewrapper").click(function(){
updatetabdisplay("profile")
})
function hidecurrenttab() {
  switch (currenttab) {
    case "home":
      $("#homewrapper").hide()
      break;
    case "achievements":
      $("#achievementwrapper").hide()
      break;
    case "boxes":
      $("#unboxingwrapper").hide()
      break;
    case "tradeups":
      $("#tradeupswrapper").hide()
        break;
    case "settings":
      $("#settingswrapper").hide()
      break;
    case "jackpot":
      $("#jpwrapper").hide()
      break;
    case "profile":
      $("#profilewrapper").hide()
      break;
    default:

  }
}
function hidealltabs() {
  $("#homewrapper").hide()
  $("#levelwrapper").hide()
  $("#unboxingwrapper").hide()
  $("#tradeupswrapper").hide()
  $("#settingswrapper").hide()
  $("#jpwrapper").hide()
  $("#profilewrapper").hide()
  $("#achievementwrapper").hide()
}
