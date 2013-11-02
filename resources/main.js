var request = new XMLHttpRequest();
request.open("Get", 'resources/model.json', false);
request.onreadystatechange = function() {
  if(request.readystate = 3) {
    document.getElementsByClassName("loading").style.display = "block";
  }
  if(request.readystate = 4) {
    document.getElementsByClassName("loading").style.display = "none";
  }
}
request.send(null);
