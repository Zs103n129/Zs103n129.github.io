window.onload = function () {
  const genshin_impact = document.getElementById("genshin_impact");
  const honkai_impact_3rd = document.getElementById("honkai_impact_3rd");
  const honkai_star_rail = document.getElementById("honkai_star_rail");
  const tears_of_themis = document.getElementById("tears_of_themis");
  const honkai_gakuen_2 = document.getElementById("honkai_gakuen_2");
  const n0va_desktop = document.getElementById("n0va_desktop");

  const genshin_impact_bc = document.getElementById("genshin_impact_bc");
  const honkai_impact_3rd_bc = document.getElementById("honkai_impact_3rd_bc");
  const honkai_star_rail_bc = document.getElementById("honkai_star_rail_bc");
  const tears_of_themis_bc = document.getElementById("tears_of_themis_bc");
  const honkai_gakuen_2_bc = document.getElementById("honkai_gakuen_2_bc");
  const n0va_desktop_bc = document.getElementById("n0va_desktop_bc");

  // genshin_impact.onclick=function(){
  //     genshin_impact.style.opacity=1;
  //     honkai_impact_3rd.style.opacity=0;
  //     honkai_star_rail.style.opacity=0;
  //     tears_of_themis.style.opacity=0;
  //     honkai_gakuen_2.style.opacity=0;
  //     n0va_desktop.style.opacity=0;
  // }

  function switchPages() {
    genshin_impact_bc.style.opacity = 0;
    honkai_impact_3rd_bc.style.opacity = 0;
    honkai_star_rail_bc.style.opacity = 0;
    tears_of_themis_bc.style.opacity = 0;
    honkai_gakuen_2_bc.style.opacity = 0;
    n0va_desktop_bc.style.opacity = 0;

    genshin_impact_bc.style.zIndex = 0;
    honkai_impact_3rd_bc.style.zIndex = 0;
    honkai_star_rail_bc.style.zIndex = 0;
    tears_of_themis_bc.style.zIndex = 0;
    honkai_gakuen_2_bc.style.zIndex = 0;
    n0va_desktop_bc.style.zIndex = 0;

    genshin_impact.children[1].style.borderBottom = 0;
    honkai_impact_3rd.children[1].style.borderBottom = 0;
    honkai_star_rail.children[1].style.borderBottom = 0;
    tears_of_themis.children[1].style.borderBottom = 0;
    honkai_gakuen_2.children[1].style.borderBottom = 0;
    n0va_desktop.children[1].style.borderBottom = 0;
  }

  genshin_impact.addEventListener("click", function () {
    switchPages();
    genshin_impact.children[1].style.borderBottom = "#000 solid 2px";
    genshin_impact_bc.style.opacity = 1;
    genshin_impact_bc.style.zIndex = 8;
  });

  honkai_impact_3rd.addEventListener("click", function () {
    switchPages();
    honkai_impact_3rd.children[1].style.borderBottom = "#000 solid 2px";
    honkai_impact_3rd_bc.style.opacity = 1;
    honkai_impact_3rd_bc.style.zIndex = 8;
  });

  honkai_star_rail.addEventListener("click", function () {
    switchPages();
    honkai_star_rail.children[1].style.borderBottom = "#000 solid 2px";
    honkai_star_rail_bc.style.opacity = 1;
    honkai_star_rail_bc.style.zIndex = 8;
  });

  tears_of_themis.addEventListener("click", function () {
    switchPages();
    tears_of_themis.children[1].style.borderBottom = "#000 solid 2px";
    tears_of_themis_bc.style.opacity = 1;
    tears_of_themis_bc.style.zIndex = 8;
  });

  honkai_gakuen_2.addEventListener("click", function () {
    switchPages();
    honkai_gakuen_2.children[1].style.borderBottom = "#000 solid 2px";
    honkai_gakuen_2_bc.style.opacity = 1;
    honkai_gakuen_2_bc.style.zIndex = 8;
  });

  n0va_desktop.addEventListener("click", function () {
    switchPages();
    n0va_desktop.children[1].style.borderBottom = "#000 solid 2px";
    n0va_desktop_bc.style.opacity = 1;
    n0va_desktop_bc.style.zIndex = 8;
  });

  const genshinimpact_p = document.getElementById("play-genshinimpact");
  const honkai3rd_p = document.getElementById("play_honkai3rd");
  const honkaistar_p = document.getElementById("play_honkaistar");
  const tearsofthemis_p = document.getElementById("play_tearsofthemis");
  const honkai2rd_p = document.getElementById("play_honkai2rd");
  const N0vedesktop_p = document.getElementById("play_N0vedesktop");

  const genshinimpact_pb = document.getElementById("playbutton-genshinimpact");
  const honkai3rd_pb = document.getElementById("playbutton_honkai3rd");
  const honkaistar_pb = document.getElementById("playbutton-honkaistar");
  const tearsofthemis_pb = document.getElementById("playbutton-tearsofthemis");
  // const honkai2rd_pb = document.getElementById("playbutton-honkai2rd");
  // const N0vedesktop_pb = document.getElementById("playbutton-N0vedesktop");

  genshinimpact_pb.addEventListener("click", function () {
    genshinimpact_p.style.display = "flex";
    genshinimpact_p.children[0].play();
  });

  genshinimpact_p.addEventListener("click", function () {
    genshinimpact_p.style.display = "none";
    genshinimpact_p.children[0].pause();
  });

  honkai3rd_pb.addEventListener("click", function () {
    honkai3rd_p.style.display = "flex";
    honkai3rd_p.children[0].play();
  });

  honkai3rd_p.addEventListener("click", function () {
    honkai3rd_p.style.display = "none";
    honkai3rd_p.children[0].pause();
  });

  honkaistar_pb.addEventListener("click", function () {
    honkaistar_p.style.display = "flex";
    honkaistar_p.children[0].play();
  });

  honkaistar_p.addEventListener("click", function () {
    honkaistar_p.style.display = "none";
    honkaistar_p.children[0].pause();
  });

  tearsofthemis_pb.addEventListener("click", function () {
    tearsofthemis_p.style.display = "flex";
    tearsofthemis_p.children[0].play();
  });

  tearsofthemis_p.addEventListener("click", function () {
    tearsofthemis_p.style.display = "none";
    tearsofthemis_p.children[0].pause();
  });
};
