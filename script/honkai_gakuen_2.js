window.onload = function () {
  const bg = document.getElementById("bg");
  const showwindow = document.getElementById("showwindow");
  const showbuttons = document.getElementById("showbuttons");
  const cgbox = document.getElementById("cgbox");
  const cgbuttons = document.getElementById("cgbuttons");
  const creact = document.getElementById("creact");

  showbuttons.children[0].addEventListener("click", function () {
    showwindow.style.right = "0%";
    bg.children[0].style.display = "block";
    bg.children[1].style.display = "none";
  });
  showbuttons.children[1].addEventListener("click", function () {
    showwindow.style.right = "100%";
    bg.children[0].style.display = "none";
    bg.children[1].style.display = "block";
  });

  cgbuttons.children[0].addEventListener("click", function () {
    cgbox.style.right = "0%";
    cgbuttons.children[0].style.width = "55%";
    cgbuttons.children[1].style.width = "20%";
  });
  cgbuttons.children[1].addEventListener("click", function () {
    cgbox.style.right = "100%";
    cgbuttons.children[0].style.width = "20%";
    cgbuttons.children[1].style.width = "55%";
  });

  function initialise_creact(){
    creact.children[0].style.display = "block";
    creact.children[1].style.display = "none";
    creact.children[2].style.display = "block";
    creact.children[3].style.display = "none";
    creact.children[4].style.display = "block";
    creact.children[5].style.display = "none";
    creact.children[6].style.display = "block";
    creact.children[7].style.display = "none";
    creact.children[8].style.display = "block";
    creact.children[9].style.display = "none";
    creact.children[10].style.display = "block";
    creact.children[11].style.display = "none";
  }
  creact.children[0].addEventListener("click" ,function(){
    initialise_creact();
    creact.children[0].style.display = "none";
    creact.children[1].style.display = "block";
  })
  creact.children[2].addEventListener("click" ,function(){
    initialise_creact();
    creact.children[2].style.display = "none";
    creact.children[3].style.display = "block";
  })
  creact.children[4].addEventListener("click" ,function(){
    initialise_creact();
    creact.children[4].style.display = "none";
    creact.children[5].style.display = "block";
  })
  creact.children[6].addEventListener("click" ,function(){
    initialise_creact();
    creact.children[6].style.display = "none";
    creact.children[7].style.display = "block";
  })
  creact.children[8].addEventListener("click" ,function(){
    initialise_creact();
    creact.children[8].style.display = "none";
    creact.children[9].style.display = "block";
  })
  creact.children[10].addEventListener("click" ,function(){
    initialise_creact();
    creact.children[10].style.display = "none";
    creact.children[11].style.display = "block";
  })
};
