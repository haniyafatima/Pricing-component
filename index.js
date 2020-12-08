var input = false;
function toggle(){
if(!input){
  input = true;
  document.querySelectorAll("h1")[0].innerHTML = "$199.99";
  document.querySelectorAll("h1")[0].classList.add="div-color"
    document.querySelectorAll("h1")[1].innerHTML = "$249.99";
  document.querySelectorAll("h1")[2].innerHTML = "$399.99";
}else{
  input = false;
  document.querySelectorAll("h1")[0].innerHTML = "$19.99";
  document.querySelectorAll("h1")[1].innerHTML = "$24.99";
  document.querySelectorAll("h1")[2].innerHTML = "$39.99";
}
}
