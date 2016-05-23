//Created by JDude420

/* _/﹋\_ 
     (҂`_´) 
      <,︻╦╤─ ҉ - - 
    _/﹋\_
*/

//VERSION CHECK SECTION
/* **still being edited**
var updatelog = v0.0;
function updateScript() {
	try {
		var builder = new android.app.AlertDialog.Builder(ctx);
		builder.setTitle("New version available!");
		builder.setMessage("An update to CMD Set was found!\nWould you like to download it now?\nCurrent version: " + updatelog + "\nNew version: " + newVersion);
		builder.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
			onClick: function(par1) {
				dialog.dismiss();
			}
		});
		builder.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
			onClick: function(par1) {
				var ru  = new java.lang.Runnable({ run: function() {
					try {
						var u = new java.net.URL("https://raw.githubusercontent.com/Connor4898/ModPE-Scripts/master/SPC/SPCPE.js");
						var c = u.openConnection();
						c.setRequestMethod("GET");
						c.setDoOutput(true);
						c.connect();
						c.getContentLength();
						var input = c.getInputStream();
						var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
						var bytesRead = 0;
						while((bytesRead = input.read(contents)) != -1) { 
							newScript += new java.lang.String(contents, 0, bytesRead);			   
						}
						var patchesFolder = ctx.getDir("modscripts", 0);
						var scriptFile = new java.io.File(patchesFolder, "SPCPE.js");
						var printWriter = new java.io.PrintWriter(scriptFile);
						printWriter.write(newScript);
						printWriter.flush();
						printWriter.close();
						try {
							net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, false);
							net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, true);
							msg("Updated and enabled!");
						}
						catch(e) {
							errorMsg("Line 1255: " + e);
						}
					}
					catch(e) {
						errorMsg("Line 1259: " + e);
					}
				}});
				var th = new java.lang.Thread(ru);
				th.start();
			}
		});
		var dialog = builder.create();
		dialog.show()
	}
	catch(e) {
		errorMsg("Line 1270: " + e);
	}
}
*/
//VERSION CHECK END

/* _/﹋\_ 
     (҂`_´) 
      <,︻╦╤─ ҉ - - 
    _/﹋\_
*/

//COMMAND SECTION
function procCmd(cmnd){
  var cmd = cmnd.toLowerCase().split(" ");
  if(cmd[0]=="help"){
    if(parseInt(cmd[1])){
      if(cmd[1]=="1"){
        msg(">>Showing help page<<pg1>>");
        helpHelp();
        deathHelp();
        healthHelp();
        giveHelp();
      }else if(cmd[1]=="2"){
        msg(">>Showing help page<<pg2>>");
        evalHelp();
      }
    }else{
      msg("That isn't a page, what are you trying to do?");
    }
  }else if(cmd[0]=="give"){
    var id=cmd[1].split(":");
    if(cmd[1]!=null || cmd[2]!=null){
      if(parseInt(cmd[1])){
        if(id[1]!=null){
          Player.addItemInventory(parseInt(id[0]), parseInt(cmd[2]), parseInt(id[1]));
          msg("Given "+cmd[2]+" of "+id[0]+":"+id[1]);
        }else{
          Player.addItemInventory(parseInt(id[0]), parseInt(cmd[2]), 0);
          msg("Given "+cmd[2]+" of "+id[0]+":0");
        }
      }else{
        msg("Please supply an integer for the itemId");
      }
    }else{
    msg("Not enough parameters");
    }
  }else if(cmd[0]=="sethealth" || cmd[0]=="health"){
    if(Level.getGameMode()==0){
      if(parseInt(cmd[1])){
        if(cmd[1]!=null && cmd[1]<=20){
          Player.setHealth(cmd[1]);
          msg("Your health was set to "+parseInt(cmd[1]));
        }else{
          msg("Please use an integer under 20");
        }
      }else{
        msg("Do you even know your numbers? You kinda need a number here.");
      }
    }else{
      msg("Your invincible! What's the point?");
    }
  }else if(cmd[0]=="die" || cmd[0]=="kill" || cmd[0]=="suicide"){
    if(Level.getGameMode()==0){
      msg("I'm sorry about this....");
      Player.setHealth(0);
    }else{
      msg("Should I remind you? YOUR INVINCIBLE!");
    }
  }else if(cmd[0]=="eval"){
    var evalParams = cmd[1];
    eval(evalParams);
  }else{ 
    msg("That command, "+cmd[0]+" ,does not exist on this mod");
}
}

//COMMAND END

/* _/﹋\_ 
     (҂`_´) 
      <,︻╦╤─ ҉ - - 
    _/﹋\_
*/

//HELP PAGES
function helpTip(c,i,p,e){
  msg("§e>> §a"+c+"§b: "+p+"§2 "+i+"§f EX: /"+c+" "+e);
}
function giveHelp(){helpTip("give","Give yourself an item, you deserve it. (not really)","<itemid:itemData> <amount>","5:1 5 (gives 5 spruce planks)");}
function helpHelp(){helpTip("help", "Shows the help page.","<page>", "1");
}
function healthHelp(){helpTip("sethealth","You get to choose your health","<health>","18 (your only missing one heart!)");}
function deathHelp(){helpTip("die","Commit suicide!","","");}
function evalHelp(){helpTip("eval","Run a ModPE source code. (for use of modders, use /evalhelp for more info)","<evalMsg>",'clientMessage("Wassup") (please note that the last eval has no semicolon)');}
//HELP PAGES END

/* _/﹋\_ 
     (҂`_´) 
      <,︻╦╤─ ҉ - - 
    _/﹋\_
*/

//WEIRD STUFF
function newLevel(){
  msg("thx 4 getting my mod lol");
}
function msg(m){
  clientMessage("§a§o[§fCMD§a]§r§b "+m);
}
