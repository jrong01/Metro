window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "10px 10px";
	document.getElementById("navbar").style.backgroundColor = "lightgray";
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
	document.getElementById("navbar").style.backgroundColor = "rgba(19, 113, 130, 0.30)";
  }
}