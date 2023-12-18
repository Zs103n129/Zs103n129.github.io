window.onload = function () {
  throttle(wheelturnpage(9), 500);
  wheelturnpage(9);

  const finally_b = document.getElementById("finally_educate_buttom");
  const Seele_b = document.getElementById("Seele_buttom");
  const laceration_b = document.getElementById(
    "laceration_sky_meteoric_buttom"
  );
  const Elegy_b = document.getElementById("Elegy_for_sinners_buttom");
  const Nirvana_b = document.getElementById("Nirvana_reborn_buttom");
  const Tragedy_b = document.getElementById("Tragedy_Earthly_buttom");
  const Torch_b = document.getElementById("Torch_Eternal_burning_buttom");
  const Epitaph_b = document.getElementById("Epitaph_of_Apocalis_buttom");
  const Impeccabile_b = document.getElementById("Impeccabile_buttom");
  const Da_Capo_b = document.getElementById("Da_Capo_buttom");

  const finally_play = document.getElementById("finally_educate_play");
  const Seele_play = document.getElementById("Seele_play");
  const laceration_play = document.getElementById(
    "laceration_sky_meteoric_play"
  );
  const Elegy_play = document.getElementById("Elegy_for_sinners_play");
  const Nirvana_play = document.getElementById("Nirvana_reborn_play");
  const Tragedy_play = document.getElementById("Tragedy_Earthly_play");
  const Torch_play = document.getElementById("Torch_Eternal_burning_play");
  const Epitaph_play = document.getElementById("Epitaph_of_Apocalis_play");
  const Impeccabile_play = document.getElementById("Impeccabile_play");
  const Da_Capo_play = document.getElementById("Da_Capo_play");

  finally_b.addEventListener("click", function () {
    finally_play.style.display = "flex";
    finally_play.children[0].play();
  });
  finally_play.addEventListener("click", function () {
    finally_play.style.display = "none";
    finally_play.children[0].pause();
  });
  Seele_b.addEventListener("click", function () {
    Seele_play.style.display = "flex";
    Seele_play.children[0].play();
  });
  Seele_play.addEventListener("click", function () {
    Seele_play.style.display = "none";
    Seele_play.children[0].pause();
  });
  laceration_b.addEventListener("click", function () {
    laceration_play.style.display = "flex";
    laceration_play.children[0].play();
  });
  laceration_play.addEventListener("click", function () {
    laceration_play.style.display = "none";
    laceration_play.children[0].pause();
  });
  Elegy_b.addEventListener("click", function () {
    Elegy_play.style.display = "flex";
    Elegy_play.children[0].play();
  });
  Elegy_play.addEventListener("click", function () {
    Elegy_play.style.display = "none";
    Elegy_play.children[0].pause();
  });
  Nirvana_b.addEventListener("click", function () {
    Nirvana_play.style.display = "flex";
    Nirvana_play.children[0].play();
  });
  Nirvana_play.addEventListener("click", function () {
    Nirvana_play.style.display = "none";
    Nirvana_play.children[0].pause();
  });
  Tragedy_b.addEventListener("click", function () {
    Tragedy_play.style.display = "flex";
    Tragedy_play.children[0].play();
  });
  Tragedy_play.addEventListener("click", function () {
    Tragedy_play.style.display = "none";
    Tragedy_play.children[0].pause();
  });
  Torch_b.addEventListener("click", function () {
    Torch_play.style.display = "flex";
    Torch_play.children[0].play();
  });
  Torch_play.addEventListener("click", function () {
    Torch_play.style.display = "none";
    Torch_play.children[0].pause();
  });
  Epitaph_b.addEventListener("click", function () {
    Epitaph_play.style.display = "flex";
    Epitaph_play.children[0].play();
  });
  Epitaph_play.addEventListener("click", function () {
    Epitaph_play.style.display = "none";
    Epitaph_play.children[0].pause();
  });
  Impeccabile_b.addEventListener("click", function () {
    Impeccabile_play.style.display = "flex";
    Impeccabile_play.children[0].play();
  });
  Impeccabile_play.addEventListener("click", function () {
    Impeccabile_play.style.display = "none";
    Impeccabile_play.children[0].pause();
  });
  Da_Capo_b.addEventListener("click", function () {
    Da_Capo_play.style.display = "flex";
    Da_Capo_play.children[0].play();
  });
  Da_Capo_play.addEventListener("click", function () {
    Da_Capo_play.style.display = "none";
    Da_Capo_play.children[0].pause();
  });
};
