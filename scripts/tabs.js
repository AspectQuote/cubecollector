currenttab = "home"
function updatetabdisplay(tab) {
  switch (tab) {
    case "home":
      $("#homewrapper").show()
      $("#tradeupswrapper").hide()
      $("#levelwrapper").hide()
      $("#unboxingwrapper").hide()
      $("#settingswrapper").hide()
      break;
    case "levels":
      $("#levelwrapper").show()
      $("#homewrapper").hide()
      $("#unboxingwrapper").hide()
      $("#tradeupswrapper").hide()
      $("#settingswrapper").hide()
      break;
    case "boxes":
      $("#unboxingwrapper").show()
      $("#tradeupswrapper").hide()
      $("#levelwrapper").hide()
      $("#homewrapper").hide()
      $("#settingswrapper").hide()
      break;
    case "tradeups":
      $("#tradeupswrapper").show()
      $("#levelwrapper").hide()
      $("#homewrapper").hide()
      $("#unboxingwrapper").hide()
      $("#settingswrapper").hide()
        break;
    case "settings":
      $("#settingswrapper").show()
      $("#tradeupswrapper").hide()
      $("#levelwrapper").hide()
      $("#homewrapper").hide()
      $("#unboxingwrapper").hide()
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
