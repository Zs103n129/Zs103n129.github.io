window.onload = function () {
  const slide = document.querySelector(".slide");
  const handoff = document.querySelectorAll(".slide>div");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const play = document.querySelector(".play");
  const video = document.querySelector(".play>video");
  const revolve_li = document.querySelectorAll(".revolve>ul>li");
  const left_li = document.querySelectorAll(".left_fig>ul>li");
  const left_fig = document.querySelectorAll(".fig");
  const img_2 = document.querySelectorAll(".img_2");
  var plays = [
    "https://webstatic.mihoyo.com/upload/op-public/2023/08/29/6e5f330bbcc46fe632b7a3dd9060c9ac_2623578194820193004.mp4",
    "https://webstatic.mihoyo.com/upload/op-public/2023/08/28/727ab56d04dc3fae9e76c9df89be4251_8491263498741610672.mp4",
    "https://webstatic.mihoyo.com/upload/op-public/2023/09/15/b814596909d8ddd1bcd18bb03752c10d_4393572157189920039.mp4",
    "https://fastcdn.mihoyo.com/content-v2/hkrpg/113217/43419ae914a630c1dc66be25346ce9b7_7585097047891204930.mp4",
    "https://fastcdn.mihoyo.com/content-v2/hkrpg/113270/6183b248a23a9fd4242e1d6c870a8fce_360160954937394707.mp4",
    "https://fastcdn.mihoyo.com/content-v2/hkrpg/113438/9d22d4271e2408c2fe1214dae7384c3c_6710916992839989833.mp4",
    "https://fastcdn.mihoyo.com/content-v2/hkrpg/113518/0dc84d6c770afa4eb12b4cf0bc1e99bb_9141716134687949506.mp4",
    "https://fastcdn.mihoyo.com/content-v2/hkrpg/114067/c6cad555a61632258a7e35d41139659c_3530408783393477126.mp4",
    "https://webstatic.mihoyo.com/upload/op-public/2023/08/07/5d5585cd0196144b443546c6b58040c6_3811021075406375920.mp4",
    "https://webstatic.mihoyo.com/upload/op-public/2023/08/18/a2d7cb8bde0812cb577e0d6760ee4ba2_5911985359501523885.mp4",
  ];
  var transform = ["65", "90", "115"];
  let next = 3;
  let last = 0;
  let distance = 0; //移动的距离
  let count = 0; //记录被点击了几次
  let fig = 0;
  let video_count = true;

  wheelturnpage(2);

  //自动轮播、手动轮播
  var timing = setInterval(function () {
    right.click();
  }, 2500);
  function display() {
    left.style.display = "block";
    right.style.display = "block";
    clearInterval(timing);
    timing = null;
  }
  slide.addEventListener("mouseenter", function () {
    display();
  });
  left.addEventListener("mouseenter", function () {
    display();
  });
  right.addEventListener("mouseenter", function () {
    display();
  });
  slide.addEventListener("mouseleave", function () {
    left.style.display = "none";
    right.style.display = "none";
    if (video_count) {
      timing = setInterval(function () {
        right.click();
      }, 2500);
    }
  });
  function handoff_classname() {
    handoff[0].className = "";
    handoff[1].className = "";
    handoff[2].className = "";
    handoff[3].className = "";
    handoff[4].className = "";
    handoff[5].className = "";
    handoff[6].className = "";
    handoff[7].className = "";
    handoff[8].className = "";
    handoff[9].className = "";
    handoff[10].className = "";
    handoff[11].className = "";
    handoff[12].className = "";
    handoff[13].className = "";
    handoff[14].className = "";
    handoff[15].className = "";
    handoff[next].className = "block";
  }
  function img_2_display() {
    img_2[0].style.display = "none";
    img_2[1].style.display = "none";
    img_2[2].style.display = "none";
    img_2[fig].style.display = "block";
  }
  left.addEventListener("click", function () {
    last = next;
    handoff[last].className = "";
    distance += handoff[next].offsetWidth;
    if (next == 2) {
      next = 12;
      distance = -3592;
      count = 10;
    }
    next--;
    count--;
    handoff_classname();
    slide.style.translate = distance + "px";
    video.src = plays[count];
  });
  right.addEventListener("click", function () {
    distance -= handoff[next].offsetWidth;
    if (next == 13) {
      next = 3;
      distance = 0;
      count = 0;
    }
    next++;
    count++;
    handoff_classname();
    slide.style.translate = distance + "px";
    video.src = plays[count];
  });
  //点击播放视频
  for (let i = 0; i < handoff.length; i++) {
    handoff[i] = this;
    handoff[i].addEventListener("click", function () {
      play.style.display = "flex";
      video_count = false;
      handoff[i].focus();
      play.children[0].play();
      clearInterval(timing);
      timing = null;
    });
  }
  play.addEventListener("click", function () {
    play.style.display = "none";
    play.children[0].pause();
    timing = setInterval(function () {
      right.click();
    }, 2500);
  });
  //点击切换图片
  function left_li_display() {
    left_li[0].style.display = "none";
    left_li[1].style.display = "none";
    left_li[2].style.display = "none";
    left_li[fig].style.display = "block";
  }
  function left_fig_right() {
    left_fig[0].style.display = "none";
    left_fig[0].style.left = -100 + "dvw";
    left_fig[1].style.display = "none";
    left_fig[1].style.left = -100 + "dvw";
    left_fig[2].style.display = "none";
    left_fig[2].style.left = -100 + "dvw";
    left_fig[fig].style.display = "block";
    left_fig[fig].style.left = 0 + "dvw";
  }
  for (let i = 0; i < revolve_li.length; i++) {
    revolve_li[i] = this;
    revolve_li[i].addEventListener("click", function () {
      fig = i;

      left_li_display();
      img_2_display();
      left_fig[i].style.left = -100 + "dvw";
      if (i == 0) {
        revolve_li[0].style.transform = "rotate(" + transform[1] + "deg)";
        revolve_li[1].style.transform = "rotate(" + transform[2] + "deg)";
        revolve_li[2].style.transform = "rotate(" + transform[0] + "deg)";
      }
      if (i == 2) {
        revolve_li[0].style.transform = "rotate(" + transform[2] + "deg)";
        revolve_li[1].style.transform = "rotate(" + transform[0] + "deg)";
        revolve_li[2].style.transform = "rotate(" + transform[1] + "deg)";
      }
      if (i == 1) {
        revolve_li[1].style.transform = "rotate(" + transform[1] + "deg)";
        revolve_li[0].style.transform = "rotate(" + transform[0] + "deg)";
        revolve_li[2].style.transform = "rotate(" + transform[2] + "deg)";
      }
    });
  }
  for (let i = 0; i < left_li.length; i++) {
    left_li[i] = this;
    left_li[i].addEventListener("click", function () {
      fig = i;
      left_fig_right();
    });
  }
};
