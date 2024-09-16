function cases(a){
  switch (a) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":     
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
  }
}
document.addEventListener("click",function(event){
  var c=event.target.classList[0];
  cases(c);
  document.querySelector("."+c).classList.add("pressed");
    setTimeout(function(){
      document.querySelector("."+c).classList.remove("pressed");  
    },100);
})
document.addEventListener("keydown", function (event) {
    var b=event.key;
    cases(b);
    document.querySelector("."+b).classList.add("pressed");
    setTimeout(function(){
      document.querySelector("."+b).classList.remove("pressed");  
    },100);
  });