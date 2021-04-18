var p1 = Math.floor((Math.random() * 6) + 1);
var p2 = Math.floor((Math.random() * 6) + 1);
if (p1 === p2){
  document.querySelector(".winner").innerHTML = "It's a Draw";
}
else if(p1 > p2){
  document.querySelector(".winner").innerHTML = "Player 1 Win";
}
else {
  document.querySelector(".winner").innerHTML = "Player 2 Win";
}
document.querySelector(".img1").setAttribute("src","images/dice"+p1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+p2+".png");
