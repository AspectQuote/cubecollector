function Upgrade(name, icon, description, whatitdoes) {
  this.name = name
  this.icon = icon
  this.description = description
  this.dopurpose = whatitdoes
}
allupgrades = []
// upgrading inventory space
allupgrades.push(new Upgrade('Inventory Space Upgrade', 'sprites/upgradeicons/', 'Increase max inventory slots by 50', function(){
  if (user.maxinventory < 400) {
    user.maxinventory += 50
  }
}))
// upgrading case spin speed
allupgrades.push(new Upgrade('Case Spin Upgrade', 'sprites/upgradeicons/', 'Make boxes animation faster by 0.25 seconds', function(){
  if (user.spinspeed > 4) {
    user.spinspeed -= 0.25
  }
}))
// upgrading money per click
allupgrades.push(new Upgrade('Money Per Click Upgrade', 'sprites/upgradeicons/', 'Get more money per click' ,function(){
  if (user.mpcvariation < 300) {
    user.mpcvariation += 25
  }
}))
// Displaying the purchase and upgrades
function updateskillsdisplay() {
  $("#skillpointsheadersubtext").html(user.skillpoints+' Skill Points To Spend')
  $("#skillpointsmain").html('')
  for (var i = 0; i < allupgrades.length; i++) {
    $("#skillpointsmain").append("<div id='upgradedisplay"+i+"' style='padding: 5px; margin: 5px; border-radius: 3px; border: 1px solid black; display: flex;'><div style='width: 80%;'><div id='upgradedisplayheader"+i+"' style='font-weight: bold;'>"+allupgrades[i].name+"</div><div id='upgradedisplaymain"+i+"' style='font-size: small; font-style: italic; color: #ba7300;'>"+allupgrades[i].description+"</div></div><div id='purchaseupgradebutton"+i+"' style='width: 20%; text-align: center; border-left: 1px solid black; cursor: pointer;'>Purchase Upgrade</div></div>")
  }
  $("#purchaseupgradebutton0").html('Purchase Upgrade <br/><span style="font-size: x-small; color: #ba7300;">('+(((user.maxinventory-200)/50)+1)+' skill point cost)</span>')
  if (((user.maxinventory-200)/50)+1 >= 5) {
    $("#purchaseupgradebutton0").html('Purchase Upgrade <br/><span style="font-size: x-small; color: #ba7300;">MAX LEVEL</span>')
  }
  $("#purchaseupgradebutton0").click(function(){
    if (((user.maxinventory-200)/50)+1 <= user.skillpoints && user.maxinventory < 400) {
      user.skillpoints -= ((user.maxinventory-200)/50)+1
      allupgrades[0].dopurpose()
      savegame()
      updateskillsdisplay()
      updateinventorydisplay()
    } else if (user.maxinventory >= 400) {
      sendusermessage('error', 'Could not purchase upgrade!', 'you have reached maximum inventory space!')
    } else if (((user.maxinventory-200)/50)+1 > user.skillpoints) {
      sendusermessage('error', 'Could not purchase upgrade!', 'you do not have enough skill points!')
    }
  })
  $("#purchaseupgradebutton1").html('Purchase Upgrade <br/><span style="font-size: x-small; color: #ba7300;">('+((Math.abs((user.spinspeed-6))/0.25)+1)+' skill point cost)</span>')
  if ((Math.abs((user.spinspeed-6))/0.25)+1 >= 9) {
    $("#purchaseupgradebutton1").html('Purchase Upgrade <br/><span style="font-size: x-small; color: #ba7300;">MAX LEVEL</span>')
  }
  $("#skillpointsmain").append('<div style="position: relative; padding: 10px; text-align: center;"><div id="resetskillsbutton" style="padding: 10px; background-color: #820000; color: #4a0000; border: 3px solid #4a0000; border-radius: 3px; display: inline-block; width: auto; cursor: pointer;">Refund Skill Points (10% of cash)</div></div>')
  $("#resetskillsbutton").click(function(){
    while (user.maxinventory > 200) {
      user.skillpoints += ((user.maxinventory-200)/50)
      user.maxinventory -= 50
    }
    while (user.spinspeed < 6) {
      user.skillpoints += (Math.abs((user.spinspeed-6))/0.25)
      user.spinspeed += 0.25
    }
    while (user.mpcvariation > 25) {
      user.skillpoints += ((user.mpcvariation-25)/25)
      user.mpcvariation -= 25
    }
    user.money = user.money*0.9
    savegame()
    updatemoneydisplay()
    updateskillsdisplay()
    updateinventorydisplay()
  })
  $("#purchaseupgradebutton1").click(function(){
    if ((Math.abs((user.spinspeed-6))/0.25)+1 <= user.skillpoints && user.spinspeed > 4) {
      user.skillpoints -= (Math.abs((user.spinspeed-6))/0.25)+1
      allupgrades[1].dopurpose()
      savegame()
      updateskillsdisplay()
      $("#entries").css("transition", user.spinspeed+'s')
      $("#entries").css("transition-timing-function", "cubic-bezier(.31,.9985,.31,.9985)")
    } else if (user.spinspeed <= 4) {
      sendusermessage('error', 'Could not purchase upgrade!', 'you have reached fastest spin speed!')
    } else if ((Math.abs((user.spinspeed-6))/0.25)+1 > user.skillpoints) {
      sendusermessage('error', 'Could not purchase upgrade!', 'you do not have enough skill points!')
    }
  })
  $("#purchaseupgradebutton2").html('Purchase Upgrade <br/><span style="font-size: x-small; color: #ba7300;">('+(((user.mpcvariation-25)/25)+1)+' skill point cost)</span>')
  if (((user.mpcvariation-25)/25)+1 >= 12) {
    $("#purchaseupgradebutton2").html('Purchase Upgrade <br/><span style="font-size: x-small; color: #ba7300;">MAX LEVEL</span>')
  }
  $("#purchaseupgradebutton2").click(function(){
    if (((user.mpcvariation-25)/25)+1 <= user.skillpoints && user.mpcvariation < 300) {
      user.skillpoints -= ((user.mpcvariation-25)/25)+1
      allupgrades[2].dopurpose()
      savegame()
      updateskillsdisplay()
    } else if (user.mpcvariation >= 300) {
      sendusermessage('error', 'Could not purchase upgrade!', 'you have reached maximum money per click!')
    } else if (((user.mpcvariation-25)/25)+1 > user.skillpoints) {
      sendusermessage('error', 'Could not purchase upgrade!', 'you do not have enough skill points!')
    }
  })
}
