function newLevel(){
  text("To use lucky block tap it!");
}
Block.defineBlock(36,"LuckyBlock",["",]
function text(m){
  clientMessage("[LB] "+m);
}
function random(min, max) { //inclusive
	return Math.floor(Math.random()*(max+1)+min);
}
