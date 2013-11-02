var loading = document.getElementsByClassName("loading")[0];
var request = new XMLHttpRequest();
request.open("Get", "resources/model.json", false);
request.onreadystatechange = function() {
  if(request.readystate = 3) {
    loading.style.visibility = "block";
  }
  if(request.readystate = 4) {
    loading.style.visibility = "none";
  }
}
request.send(null);
