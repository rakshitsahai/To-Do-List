var count = 0;
var close = document.getElementsByClassName("close");
var i;
var displayCount = document.getElementById("displayCount");

function newElement() {

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if(inputValue === '') {
    alert("Can't create blank task");
  } 
  else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for(i = 0; i < close.length; i++) {

    close[i].onclick = function() {

      var div = this.parentElement;
      div.style.display = "none";

    }

  }

  count++;
  displayCount.innerHTML = count;
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if(ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    count++;
    displayCount.innerHTML = count;
  }
}, false);

for(i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  	
    var div = this.parentElement;
    div.style.display = "none";
  }
}

myUL.onclick = function(){
	count--;
    displayCount.innerHTML = count;
}