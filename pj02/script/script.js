
var modal = document.getElementById("myModal");

var btn = document.getElementById("openModalBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function topFunction() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}


window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block"; 
  } else {
      topBtn.style.display = "none"; 
  }
}
