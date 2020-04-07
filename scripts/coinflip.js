function Coinflip(edgeside, faceside) {
  this.edgeside = edgeside
  this.faceside = faceside
  this.cfid = cfid
  this.countdown = 0
  this.winningside = {image: "sprites/coinflip/cfmiddleidle.png"}
  cfid++
}
cfid = 0
allcoinflips = []
maxcoinflips = 6
function updatecoinflipdisplay() {
  $("#cfdisplays").html('')
  $("#coinflipscount").html(allcoinflips.length+"/"+maxcoinflips+" coinflips up")
  for(i=0; i < allcoinflips.length; i++) {
    $("#cfdisplays").append("<div id='cfgame"+i+"' class='cfgamesdisplay' style='border-radius: 5px; background-image: linear-gradient(-90deg, #389ACD, #CD38B6); box-shadow: 3px 5px 8px black; width: 100%; margin-top: 10px; margin-bottom: 10px; background-color: #303036; display: flex;'></div>")
    if(allcoinflips[i].edgeside != false) {
      $("#cfgame"+i).append("<div class='edgeside' style='width: 40%; padding: 10px; display: flex;'><img id='edgesidepfp"+i+"' src='"+allcoinflips[i].edgeside.pfp+"' style='height: 64px; border-radius: 50%; border: 4px solid #389ACD;' /><div style='vertical-align: middle;'><span id='coinflipedgesidename"+i+"'>"+allcoinflips[i].edgeside.name+"</span><br/><span style='font-size: x-small; color: white; font-style: italics; margin-left: 7px;'>$"+valuesadded(allcoinflips[i].edgeside.betitems)/100+"</span><br/><span style='margin-left: 10px;' id='edgesideimgs"+i+"'></span></div></div>")
      addimagestoelement(allcoinflips[i].edgeside.betitems, "#edgesideimgs"+i)
      $("#edgesidepfp"+i).css("width", $("#edgesidepfp"+i).css("height"))
    } else {
      $("#cfgame"+i).append("<div class='edgeside' style='width: 40%; padding: 10px; display: flex;'><img id='edgesidepfp"+i+"' src='sprites/coinflip/edgeside.png' style='height: 64px; border-radius: 50%; border: 4px solid #389ACD;' /><div style='vertical-align: middle;'><span id='joincf"+i+"button' style='cursor: pointer;'>"+getcfjointext(i)+"</span><br/><span style='font-size: x-small; color: white; font-style: italics; margin-left: 7px;'>$0</span><br/><span style='margin-left: 10px;' id='edgesideimgs"+i+"'></span></div></div>")
      $("#edgesidepfp"+i).css("width", $("#edgesidepfp"+i).css("height"))
    }
    $("#cfgame"+i).append(  "<div class='cfmiddle' style=' text-align: center; vertical-align: center; width: 20%; border-left: 1px solid black; border-right: 1px solid black;'><img id='cfmiddle"+i+"' src='"+allcoinflips[i].winningside.image+"' style='height: 64px; width: 64px; margin: auto; border: 3px solid #6648b1; border-radius: 50%;' /><br/><span id='cfcountdown"+i+"' style='font-size: x-small; color: #6648b1;'>"+allcoinflips[i].countdown+"</span></div>")
    if(allcoinflips[i].faceside != false) {
      $("#cfgame"+i).append("<div class='faceside' style='width: 40%; padding: 10px; display: flex;'><img id='facesidepfp"+i+"' src='"+allcoinflips[i].faceside.pfp+"' style='height: 64px; border-radius: 50%; border: 4px solid #CD38B6;' /><div style='vertical-align: middle;'><span id='coinflipfacesidename"+i+"'>"+allcoinflips[i].faceside.name+"</span><br/><span style='font-size: x-small; color: white; font-style: italics; margin-left: 7px;'>$"+valuesadded(allcoinflips[i].faceside.betitems)/100+"</span><br/><span style='margin-left: 10px;' id='facesideimgs"+i+"'></span></div></div>")
      addimagestoelement(allcoinflips[i].faceside.betitems, "#facesideimgs"+i)
      $("#facesidepfp"+i).css("width", $("#facesidepfp"+i).css("height"))
    } else {
      $("#cfgame"+i).append("<div class='faceside' style='width: 40%; padding: 10px; display: flex;'><img id='facesidepfp"+i+"' src='sprites/coinflip/faceside.png' style='height: 64px; border-radius: 50%; border: 4px solid #CD38B6;' /><div style='vertical-align: middle;'><span id='joincf"+i+"button' style='cursor: pointer;'>"+getcfjointext(i)+"</span><br/><span style='font-size: x-small; color: white; font-style: italics; margin-left: 7px;'>$0</span><br/><span style='margin-left: 10px;' id='facesideimgs"+i+"'></span></div></div>")
      $("#facesidepfp"+i).css("width", $("#facesidepfp"+i).css("height"))
    }
    if (allcoinflips[i].winningside.name != undefined) {
      if(allcoinflips[i].winningside.name == allcoinflips[i].faceside.name) {
        $("#coinflipfacesidename"+i).css('text-shadow',"0px 0px 4px white")
      } else if(allcoinflips[i].winningside.name == allcoinflips[i].edgeside.name) {
        $("#coinflipedgesidename"+i).css('text-shadow',"0px 0px 4px white")
      } else {
        console.log('invalid winner!')
      }
    }
    createjoincfbutton(i)
    if (allcoinflips[i].winningside.image == undefined) {
      allcoinflips.splice(i, 1)
    }
  }
}
function getcfjointext(cfindex) {
  if(allcoinflips[cfindex].faceside == false) {
    if (allcoinflips[cfindex].edgeside.name == user.name) {
      return 'Cancel Coinflip?'
    } else {
      return 'Join Coinflip?'
    }
  } else if (allcoinflips[cfindex].edgeside == false){
    if (allcoinflips[cfindex].faceside.name == user.name) {
      return 'Cancel Coinflip?'
    } else {
      return 'Join Coinflip?'
    }
  }
}
valtotal = 0
function valuesadded(array) {
  valtotal = 0
  for(e = 0; e < array.length; e++) {
    valtotal += array[e].cube.price || 0
  }
  return valtotal
}
function randomcfside() {
  if (randomnumber(2) == 1) {
    return 'edgeside'
  } else {
    return 'faceside'
  }
}
function addimagestoelement(array, element) {
  for(y = 0; y < array.length; y++) {
    $(element).append("<img src='"+array[y].cube.image+"' title='"+array[y].cube.name+"' style='cursor: pointer; height: 22px; width: 22px;' />")
  }
}
function createcf(name, items, side, pfp) {
  if(cfitems.length <= 10) {
    if (allcoinflips.length < maxcoinflips) {
      if (side == 'edgeside') {
        allcoinflips.push(new Coinflip({name: name, betitems: items, pfp: pfp}, false))
        console.log({name: name, betitems: items, pfp: pfp})
      } else if (side == 'faceside') {
        allcoinflips.push(new Coinflip(false, {name: name, betitems: items, pfp: pfp}))
        console.log({name: name, betitems: items, pfp: pfp})
      }
      updatecoinflipdisplay()
    }
  }
}
targetvalue = 0
bet = []
possiblecubes = []
function getbotcfitems(makingorjoining, cfindex) {
  if (makingorjoining == 'making') {
    randombetdeviation = randomnumber(5) // keeping it interesting
    targetvalue = getaverageinventoryvalue()*(6+randombetdeviation)
    bet = []
    betamount = randomnumber(3)+3
    possiblecubes = allcubes.filter(cube => cube.price <= (targetvalue/betamount)*1.10 && cube.price >= (targetvalue/betamount)*0.9)
    while (valuesadded(bet) < targetvalue*0.9) {
      bet.push({cube: new Immutablecube(possiblecubes[randomarray(possiblecubes.length)]), prefix: false})
    }
    if (valuesadded(bet) > targetvalue*1.1) {
      bet.pop()
    }
    if (valuesadded(bet) < targetvalue*0.9 || valuesadded(bet) > targetvalue*1.1) {
      addbetfixer()
    }
  } else if (makingorjoining == 'joining') {
    if (allcoinflips[cfindex].faceside != false) {
      targetvalue = valuesadded(allcoinflips[cfindex].faceside.betitems)
      bet = []
      betamount = allcoinflips[cfindex].faceside.betitems.length+randomnumber(4)-2
      if (betamount <= 0) {
        betamount = 1
      }
      if (betamount > 10) {
        betamount = 10
      }
      possiblecubes = allcubes.filter(cube => cube.price <= (targetvalue/betamount)*1.10 && cube.price >= (targetvalue/betamount)*0.9)
      while (valuesadded(bet) < targetvalue*0.9) {
        bet.push({cube: new Immutablecube(possiblecubes[randomarray(possiblecubes.length)]), prefix: false})
      }
      if (valuesadded(bet) > targetvalue*1.1) {
        bet.pop()
      }
      if (valuesadded(bet) < targetvalue*0.9 || valuesadded(bet) > targetvalue*1.1) {
        addbetfixer()
      }
    } else if (allcoinflips[cfindex].edgeside != false) {
      targetvalue = valuesadded(allcoinflips[cfindex].edgeside.betitems)
      bet = []
      betamount = allcoinflips[cfindex].edgeside.betitems.length+randomnumber(4)-2
      if (betamount <= 0) {
        betamount = 1
      }
      if (betamount > 10) {
        betamount = 10
      }
      possiblecubes = allcubes.filter(cube => cube.price <= (targetvalue/betamount)*1.10 && cube.price >= (targetvalue/betamount)*0.9)
      while (valuesadded(bet) < targetvalue*0.9) {
        bet.push({cube: new Immutablecube(possiblecubes[randomarray(possiblecubes.length)]), prefix: false})
      }
      if (valuesadded(bet) > targetvalue*1.1) {
        bet.pop()
      }
      if (valuesadded(bet) < targetvalue*0.9 || valuesadded(bet) > targetvalue*1.1) {
        addbetfixer()
      }
    } else {
      console.log('side invalid!')
    }
  }
  if (bet.length == 0) {
    console.log('error! coinflip item retrieval failed!')
  }
}
function joincf(name, items, cfindex, pfp) {
  if(cfitems.length <= 10) {
    if (allcoinflips[cfindex].edgeside == false) {
      allcoinflips[cfindex].edgeside = {name: name, betitems: items, pfp: pfp}
      triggercfcountdown(cfindex)
    } else if (allcoinflips[cfindex].faceside == false) {
      allcoinflips[cfindex].faceside = {name: name, betitems: items, pfp: pfp}
      triggercfcountdown(cfindex)
    } else {
      console.log('error! coinflip is unjoinable!')
    }
    savegame()
  }
}
function addbetfixer() {
  if (valuesadded(bet) < targetvalue*0.9) {
    bet.push({cube: new Immutablecube(allcubes.filter(cube => cube.price >= valuesadded(bet)-(targetvalue*0.9) && cube.price <= valuesadded(bet)-(targetvalue*1.1))), prefix: false})
    addbetfixer()
  } else if (valuesadded(bet) > targetvalue*1.1) {
    bet.pop()
    addbetfixer()
  } else if (valuesadded(bet) > targetvalue*0.9 && valuesadded(bet) < targetvalue*1.1) {
    console.log('cf bet fixed!')
  } else {
    console.log('error! bet is invalid! cubes could not be found!')
  }
}
function triggercfcountdown(cfindex) {
  allcoinflips[cfindex].countdown = 10
  countingdowncoinflips.push(allcoinflips[cfindex].cfid)
  updatecoinflipdisplay()
}
countingdowncoinflips = []
window.setInterval(function() {
  for (i=0; i < countingdowncoinflips.length; i++) {
    for (t=0; t < allcoinflips.length; t++) {
      if (allcoinflips[t].cfid == countingdowncoinflips[i]) {
        allcoinflips[t].countdown--
      }
      if (allcoinflips[t].countdown <= -1) {
        countingdowncoinflips.splice(countingdowncoinflips.indexOf(allcoinflips[t].cfid), 1)
        allcoinflips[t].countdown = 0
        flipthecoin(t)
      }
    }
  }
  updatecoinflipdisplay()
}, 1000)
function flipthecoin(cfindex) {
  window.setTimeout(function(){
    allcoinflips[cfindex].winningside = randomcfside()
    if (allcoinflips[cfindex].winningside == 'edgeside') {
      allcoinflips[cfindex].winningside = allcoinflips[cfindex].edgeside
      $("#cfmiddle"+cfindex).attr('src', "sprites/coinflip/edgeside.png")
      allcoinflips[cfindex].winningside.image = "sprites/coinflip/edgeside.png"
      $("#cfcountdown"+cfindex).html('GAME OVER - EDGE SIDE WINS')
      allcoinflips[cfindex].countdown = 'GAME OVER - EDGE SIDE WINS'
      $("#coinflipedgesidename"+cfindex).css('text-shadow',"0px 0px 4px white")
    } else if (allcoinflips[cfindex].winningside == 'faceside') {
      allcoinflips[cfindex].winningside = allcoinflips[cfindex].faceside
      $("#cfmiddle"+cfindex).attr('src', "sprites/coinflip/faceside.png")
      allcoinflips[cfindex].winningside.image = "sprites/coinflip/faceside.png"
      $("#cfcountdown"+cfindex).html('GAME OVER - FACE SIDE WINS')
      allcoinflips[cfindex].countdown = 'GAME OVER - FACE SIDE WINS'
      $("#coinflipfacesidename"+cfindex).css('text-shadow',"0px 0px 4px white")
    } else {
      console.log('invalid winning side!')
    }
    if (allcoinflips[cfindex].winningside.name == user.name) {
      for (i=0; i < allcoinflips[cfindex].faceside.betitems.length; i++) {
        user.inventory.push(allcoinflips[cfindex].faceside.betitems[i])
      }
      for (i=0; i < allcoinflips[cfindex].edgeside.betitems.length; i++) {
        user.inventory.push(allcoinflips[cfindex].edgeside.betitems[i])
      }
      user.stats.cfswon++
    }
    updateinventorydisplay()
    checkforachievements("quest")
    savegame()
    cfindex = allcoinflips[cfindex].cfid
    window.setTimeout(function() {
      allcoinflips = allcoinflips.filter(coinflip => coinflip.winningside.name == undefined)
    }, 5000)
  }, 500)
}
cfitems = []
function deposititemforcf(index){
  cfitems.push(user.inventory[index])
  user.inventory.splice(index, 1)
  updateinventorydisplay()
  updatecfdepositdisplay()
}
function updatecfdepositdisplay() {
  $("#createcfitemsdisplay").html('')
  for (i=0; i < cfitems.length; i++) {
    $("#createcfitemsdisplay").append("<img id='cfdepositicon"+i+"' src='"+cfitems[i].cube.image+"' style='cursor: pointer; height: 28px; width: 28px; margin-left: 5px; padding: 2px; border: 1px solid "+returnraritycolor(cfitems[i].cube.rarity)+"; border-radius: 3px;' title='"+cfitems[i].cube.name+"'/>")
    createremovablecfitem(i)
  }
  if (joiningcf == true) {
    if (allcoinflips[cftojoin].edgeside == false) {
      if (valuesadded(cfitems) >= valuesadded(allcoinflips[cftojoin].faceside.betitems)*0.95 && valuesadded(cfitems) <= valuesadded(allcoinflips[cftojoin].faceside.betitems)*1.05) {
        $("#targetcfbetdisplay").html('<span style="color: #00661b;">$'+(valuesadded(allcoinflips[cftojoin].faceside.betitems)/100)*0.95+" - $"+(valuesadded(allcoinflips[cftojoin].faceside.betitems)/100)*1.05+"</span>")
      } else {
        $("#targetcfbetdisplay").html('<span style="color: #7d0b0b;">$'+(valuesadded(allcoinflips[cftojoin].faceside.betitems)/100)*0.95+" - $"+(valuesadded(allcoinflips[cftojoin].faceside.betitems)/100)*1.05+"</span>")
      }
    } else if (allcoinflips[cftojoin].faceside == false) {
      if (valuesadded(cfitems) >= valuesadded(allcoinflips[cftojoin].edgeside.betitems)*0.95 && valuesadded(cfitems) <= valuesadded(allcoinflips[cftojoin].edgeside.betitems)*1.05) {
        $("#targetcfbetdisplay").html('<span style="color: #00661b;">$'+(valuesadded(allcoinflips[cftojoin].edgeside.betitems)/100)*0.95+" - $"+(valuesadded(allcoinflips[cftojoin].edgeside.betitems)/100)*1.05+"</span>")
      } else {
        $("#targetcfbetdisplay").html('<span style="color: #7d0b0b;">$'+(valuesadded(allcoinflips[cftojoin].edgeside.betitems)/100)*0.95+" - $"+(valuesadded(allcoinflips[cftojoin].edgeside.betitems)/100)*1.05+"</span>")
      }
    }
  } else {
    $("#targetcfbetdisplay").html('<span style="color: #00661b;">$'+(valuesadded(cfitems)/100)*0.95+" - $"+(valuesadded(cfitems)/100)*1.05+"</span>")
  }
  $("#createcfitemvalue").html('$'+valuesadded(cfitems)/100)
}
selectedcfside = false
function updatecfselectedsidedisplay() {
  if(selectedcfside == 'edgeside') {
    $("#edgesideselection").attr("style", "transition: 0.25s; filter: drop-shadow(0px 0px 4px #CD38B6) drop-shadow(0px 0px 4px #CD38B6); height: 96px; width: 96px;")
    $("#facesideselection").attr("style", "height: 96px; width: 96px;")
  } else if (selectedcfside == 'faceside') {
    $("#facesideselection").attr("style", "transition: 0.25s; filter: drop-shadow(0px 0px 4px #389ACD) drop-shadow(0px 0px 4px #389ACD); height: 96px; width: 96px;")
    $("#edgesideselection").attr("style", "height: 96px; width: 96px;")
  } else {
    $("#edgesideselection").attr("style", "height: 96px; width: 96px;")
    $("#facesideselection").attr("style", "height: 96px; width: 96px;")
  }
}
function createremovablecfitem(e) {
  $("#cfdepositicon"+i).click(function(){
      user.inventory.push(cfitems[e])
      cfitems.splice(e, 1)
      updatecfdepositdisplay()
      updateinventorydisplay()
      savegame()
  })
}
function displaycfoverlay(whatmenu, side, cfindex) {
  $("#createcfcontainer").show()
  $("#cfdisplays").hide()
  if (whatmenu == 'makingcf') {
    joiningcf = false
    $("#createcfheader").html('Create Coinflip<div id="cfoverlayclosebutton" style="position: absolute; top: 0; right: 0; color: #1C1C1C; cursor: pointer; height: 16px; width: 16px;">x</div>')
    $("#cfoverlayclosebutton").click(function(){
      hidecfoverlay()
    })
    updatecfoverlaycompletebutton(whatmenu)
  } else if (whatmenu == 'joiningcf') {
    joiningcf = true
    $("#createcfheader").html('Join Coinflip<div id="cfoverlayclosebutton" style="position: absolute; top: 0; right: 0; color: #1C1C1C; cursor: pointer; height: 16px; width: 16px;">x</div>')
    $("#cfoverlayclosebutton").click(function(){
      hidecfoverlay()
    })
    updatecfoverlaycompletebutton(whatmenu)
  } else {
    console.log('invalid menu type!')
  }
}
function finishmakingcf() {
  if (selectedcfside == 'edgeside' || selectedcfside == 'faceside') {
    if (valuesadded(cfitems) > 0) {
      if (allcoinflips.length < maxcoinflips) {
        createcf(user.name, cfitems, selectedcfside, user.pfp)
        selectedcfside = false
        cfitems = []
        updatecfdepositdisplay()
        updatecfselectedsidedisplay()
        hidecfoverlay()
        savegame()
      } else {
        sendusermessage('error', 'Could not create Coinflip!', 'coinflip limit reached!')
      }
    } else {
      sendusermessage('error', 'Could not create Coinflip!', 'please add more items to your deposit!')
    }
  } else {
    sendusermessage('error', 'Could not create Coinflip!', 'please select a side to join!')
  }
}
function updatecfoverlaycompletebutton(menutype, cfindex) {
  if(menutype == 'makingcf') {
    $("#completecfoverlaybutton").unbind()
    $("#completecfoverlaybutton").click(function(){
      finishmakingcf()
    })
  } else if(menutype == 'joiningcf') {
      $("#completecfoverlaybutton").unbind()
      $("#completecfoverlaybutton").click(function(){
        if(cfitems.length <= 10) {
      finishjoiningcf()
    }
    })
  } else {
    console.log('invalid menu type!')
  }
}
function hidecfoverlay() {
  $("#createcfcontainer").hide()
  $("#cfdisplays").show()
}
$("#cffooter").click(function(){
  displaycfoverlay('makingcf')
})
$("#edgesideselection").click(function(){
  if (joiningcf == false) {
    selectedcfside = 'edgeside'
    updatecfselectedsidedisplay()
  }
})
$("#facesideselection").click(function(){
  if (joiningcf == false) {
    selectedcfside = 'faceside'
    updatecfselectedsidedisplay()
  }
})
$("#cfoverlayclosebutton").click(function(){
  hidecfoverlay()
})
// cf presets
function botmakecf() {
  getbotcfitems('making')
  randombot = allbots[randomarray(allbots.length)]
  while (allcoinflips.filter(coinflip => randombot.name == coinflip.faceside.name || randombot.name == coinflip.edgeside.name).length >= 1) {
    randombot = allbots[randomarray(allbots.length)]
  }
  if (bet.length > 0) {
    createcf(randombot.name, bet, randomcfside(), "sprites/coinflip/botpfp.png")
  } else {
    console.log('couldnt make cf!')
  }
  savegame()
}
function botjoinrandomcf() {
  randomcfindex = allcoinflips.indexOf(allcoinflips.filter(coinflip => coinflip.faceside == false || coinflip.edgeside == false)[randomarray(allcoinflips.filter(coinflip => coinflip.faceside == false || coinflip.edgeside == false).length)])
  randombot = allbots[randomarray(allbots.length)]
  getbotcfitems('joining', randomcfindex)
  joincf(randombot.name, bet, randomcfindex, "sprites/coinflip/botpfp.png")
  updatecoinflipdisplay()
  if (allcoinflips[randomcfindex].edgeside.name == user.name) {
    sendusermessage('alert', 'Someone joined your coinflip!', randombot.name+' joined your coinflip!')
  } else if (allcoinflips[randomcfindex].faceside.name == user.name) {
    sendusermessage('alert', 'Someone joined your coinflip!', randombot.name+' joined your coinflip!')
  }
}
// joining cf
function finishjoiningcf() {
  if(cfitems.length <= 10) {
  if (selectedcfside == 'edgeside') {
    if (valuesadded(cfitems) >= valuesadded(allcoinflips[cftojoin].faceside.betitems)*0.95) {
      if (valuesadded(cfitems) <= valuesadded(allcoinflips[cftojoin].faceside.betitems)*1.05) {
        if (allcoinflips[cftojoin].edgeside == false) {
          joincf(user.name, cfitems, cftojoin, user.pfp)
          selectedcfside = false
          cfitems = []
          updatecfdepositdisplay()
          updatecfselectedsidedisplay()
          hidecfoverlay()
          savegame()
        } else {sendusermessage('error', 'Could not join Coinflip!', 'Coinflip has already been joined!')}
      } else {sendusermessage('error', 'Could not join Coinflip!', 'Remove some item value to join!')}
    } else {sendusermessage('error', 'Could not join Coinflip!', 'Add more item value to join!')}
  }
  if (selectedcfside == 'faceside') {
    if (valuesadded(cfitems) >= valuesadded(allcoinflips[cftojoin].edgeside.betitems)*0.95) {
      if (valuesadded(cfitems) <= valuesadded(allcoinflips[cftojoin].edgeside.betitems)*1.05) {
        if (allcoinflips[cftojoin].faceside == false) {
          joincf(user.name, cfitems, cftojoin, user.pfp)
          hidecfoverlay()
          selectedcfside = false
          cfitems = []
          updatecfdepositdisplay()
          updatecfselectedsidedisplay()
          hidecfoverlay()
          savegame()
        } else {sendusermessage('error', 'Could not join Coinflip!', 'Coinflip has already been joined!')}
      } else {sendusermessage('error', 'Could not join Coinflip!', 'Remove some item value to join!')}
    } else {sendusermessage('error', 'Could not join Coinflip!', 'Add more item value to join!')}
  }
} else {sendusermessage('error', 'Could not join coinflip!', 'remove items until you have 10 deposited!')}
}
function createjoincfbutton(index) {
  $("#joincf"+index+"button").click(function(){
    if (allcoinflips[index].edgeside == false && allcoinflips[index].faceside.name != user.name) {
      selectedcfside = 'edgeside'
      displaycfoverlay('joiningcf', 'edgeside', index)
      updatecfselectedsidedisplay()
      cftojoin = index
      updatecfdepositdisplay()
    } else if (allcoinflips[index].faceside == false && allcoinflips[index].edgeside.name != user.name) {
      selectedcfside = 'faceside'
      displaycfoverlay('joiningcf', 'faceside', index)
      updatecfselectedsidedisplay()
      cftojoin = index
      updatecfdepositdisplay()
    } else if (allcoinflips[index].faceside == false && allcoinflips[index].edgeside == false) {
      console.log('side invalid!')
    } else if (allcoinflips[index].edgeside.name != user.name || allcoinflips[index].faceside.name != user.name) {
      sendusermessage('alert', 'Cancelling Coinflip..','')
      if (allcoinflips[index].edgeside.name == user.name) {
        for (var i = 0; i < allcoinflips[index].edgeside.betitems.length; i++) {
          user.inventory.push(allcoinflips[index].edgeside.betitems[i])
        }
        updateinventorydisplay()
        savegame()
        allcoinflips.splice(index, 1)
      } else if (allcoinflips[index].faceside.name == user.name) {
        for (var i = 0; i < allcoinflips[index].faceside.betitems.length; i++) {
          user.inventory.push(allcoinflips[index].faceside.betitems[i])
        }
        allcoinflips.splice(index, 1)
        updateinventorydisplay()
        savegame()
      }
    }
  })
}
window.setInterval(function(){
  if(randomnumber(100) == 1) {
    if(randomnumber(3)+allcoinflips.filter(coinflip => coinflip.edgeside.name == user.name || coinflip.faceside.name == user.name).length >= 3) {
      botjoinrandomcf()
    } else {
      botmakecf()
    }
  }
}, 1000)
