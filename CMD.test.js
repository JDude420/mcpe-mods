//Created by JDude420
var blockIds = [];
var itemIds = [];

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
var cmd = cmnd.split(" ");
if(cmd[0]=="help"){
if(cmd[1]=="1"){
msg(">>Showing help page<<pg1>>");
helpTip("help", "Shows the help page.","<page>", " 1");
}
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
msg("§e>> §a"+c+"§b: "+p+"§2 " +i+"§f "+e);
}
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
clientMessage("§a§o[§fCMD§a]§r "+m);
}
