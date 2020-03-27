getusernameinput = function(){return document.getElementById('usernameinput').value}
$("#usernameinput").on('keypress',function(e) {
    if(e.which == 13 && userinjp == false) {
        user.name = getusernameinput()
        savegame()
        $("#currentusername").html("Username: " + user.name)
        updateprofiledisplay()
    }
});
getsellbelowinput = function(){return document.getElementById('sellbelowinput').value}
$("#sellbelowinput").on('keypress',function(e) {
    if(e.which == 13 && userinjp == false) {
        user.sellbelowprice = JSON.parse(getsellbelowinput())
        savegame()
        $("#inventoryselling").html("Sell Below $" + (user.sellbelowprice/100).toLocaleString())
        $("#inventoryselling").unbind()
        $("#inventoryselling").click(function(){
          sellallbelow(user.sellbelowprice)
        })
    }
});
function sellallbelow(price) {
  for (var i = 0; i < user.inventory.length; i++) {
    if(user.inventory[user.inventory.length-i-1].cube.price < user.sellbelowprice) {
      user.money += user.inventory[user.inventory.length-i-1].cube.price
      user.inventory.splice(user.inventory.length-i-1, 1)
    }
    if(user.inventory.filter(cube => cube.cube.price < price).length >= 1) {
      sellallbelow(price)
    }
  }
  updateinventorydisplay()
  updatemoneydisplay()
  savegame()
}
getpfpinput = function(){return document.getElementById('pfpinput').value}
$("#pfpinput").on('keypress',function(e) {
    if(e.which == 13) {
        user.pfp = getpfpinput()
        savegame()
        updateprofiledisplay()
    }
});
