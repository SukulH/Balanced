

var shapeArray = document.getElementsByClassName("shape")
const mediaQ = window.matchMedia('(orientation:portrait)')
document.onclick= function(event) {

  if (event===undefined) event= window.event;
  var target= 'target' in event? event.target : event.srcElement;

  if (target.classList.contains("shape")){

  for (var i = 0; i<shapeArray.length;i++) {
    if(shapeArray[i] == target){
      if(mediaQ.matches){
        shapeArray[i].className = "selectedShapePotrait"
      }else{
      shapeArray[i].className = "selectedShape"
      }
      i--;
    }else{


      shapeArray[i].style.width = "0"
      shapeArray[i].style.height = "0";
    shapeArray[i].style.opacity = "0";
    shapeArray[i].style.zIndex = "-1";
    }


  }
}else{return;}



};
