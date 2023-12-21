//1、找到container下的所有img标签,li标签,左右按钮
window.onload = function () {
  const aImgs = document.querySelectorAll(".under-1 img");
  const aLis = document.querySelectorAll(".under-2 li");
  const btnul = document.getElementById("active");
  const btnLeft = document.querySelector(".under-2 .left");
  const btnRight = document.querySelector(".under-2 .right");
  const span1 = document.querySelector(".span1");
  const span2 = document.querySelector(".span2");
  const span3 = document.querySelector(".span3");
  const word = document.querySelector(".word");
  const word2 = document.querySelector(".word2");
  const word3 = document.querySelector(".word3");
  const un1 = document.querySelector(".un1");
  const un2 = document.querySelector(".un2");
  const un3 = document.querySelector(".un3");
  const un4 = document.querySelector(".un4");
  const un5 = document.querySelector(".un5");
  const un6 = document.querySelector(".un6");
  const un7 = document.querySelector(".un7");
  const un8 = document.querySelector(".un8");
  const un9 = document.querySelector(".un9");
  const de1 = document.querySelector(".de3-2-1");
  const de2 = document.querySelector(".de3-2-2");
  const de3 = document.querySelector(".de3-2-3");
  const de4 = document.querySelector(".de3-2-4");
  const de5 = document.querySelector(".de3-2-5");
  const de6 = document.querySelector(".de3-2-6");
  const de7 = document.querySelector(".de3-2-7");
  const de8 = document.querySelector(".de3-2-8");
  const de9 = document.querySelector(".de3-2-9");
  const un = document.querySelector(".under3-2-1");
  const un3_2 = document.getElementById("un3-2");
  const line = document.querySelector(".line");
  const avatar1 = document.querySelector(".avatar1");
  const avatar2 = document.querySelector(".avatar2");
  const avatar3 = document.querySelector(".avatar3");
  const avatar4 = document.querySelector(".avatar4");
  const avatar5 = document.querySelector(".avatar5");
  const avatar6 = document.querySelector(".avatar6");
  const avatar7 = document.querySelector(".avatar7");
  const avatar8 = document.querySelector(".avatar8");
  const avatar9 = document.querySelector(".avatar9");
  //   var odiv = document.querySelector(".page");
  //   window.addEventListener("resize", function () {
  //     var width = this.document.documentElement.clientWidth;
  //     if (width > 1200) {
  //       odiv.style.width = "1000px";
  //     } else if (width <= 1200 && width > 960) {
  //       odiv.style.width = "800px";
  //     } else if (width <= 960 && width > 768) {
  //       odiv.style.width = "600px";
  //     } else if (width <= 768) {
  //       odiv.style.width = "400px";
  //     }
  //   });

  //点击事件
  //点击按钮图片切换
  let index = 0; //当前图片下标
  let lastIndex = 0;
  let is = aImgs.length;
  let i = aImgs.length; //当前a的下标
  let a = new Array(
    "-2070",
    "-1540",
    "-1020",
    "-470",
    "50",
    "570",
    "1090",
    "1600",
    "2130",
    "2630"
  );
  let b = 0;
  let c = 0;
  let d = -2070;
  //关于米哈游
  span1.onclick = function () {
    word.style.opacity = 1;
    word2.style.opacity = 0;
    word.style.zIndex = 9;
    word2.style.zIndex = 0;
    word3.style.opacity = 0;
    word3.style.zIndex = 0;
    return false;
    // word2.style.ZIndex = 3;
  };
  //发展历程
  span2.onclick = function () {
    word.style.opacity = 0;
    word2.style.opacity = 1;
    word.style.zIndex = 0;
    word2.style.zIndex = 9;
    word3.style.opacity = 0;
    word3.style.zIndex = 0;
    aImgs[index].className = "";
    aImgs[0].className = "on";
    aLis[i].className = "";
    aLis[9].className = "active";
    aLis[10].className = "active1";
    btnul.style.marginLeft = d + "px";
    index = 0;
    i = aImgs.length;
    b = 0;
    return false;
  };
  //荣誉资质
  span3.onclick = function () {
    word.style.opacity = 0;
    word2.style.opacity = 0;
    word.style.zIndex = 0;
    word2.style.zIndex = 0;
    word3.style.opacity = 1;
    word3.style.zIndex = 9;
    return false;
  };

  //右边按钮类似
  btnRight.onclick = function () {
    //记录上一张图片的下标
    if (index == 0) {
      return false;
    } else {
      lastIndex = index;
      is = i;
      aLis[is].className = "";
      //清除上一张图片的样式
      aImgs[lastIndex].className = "";
      index--;
      b--;
      i++;
      if (i != aImgs.length) {
        aLis[i].className = "active";
      }
      //设置当前图片的样式
      aImgs[index].className = "on";
      btnul.style.marginLeft = a[b] + "px";
      btnLeft.style.opacity = 0.5;
      console.log(i);
      if (i == 10 || i == 9) {
        btnRight.style.opacity = 0;
      }
    }
  };
  //左按钮
  btnLeft.onclick = function () {
    aLis[9].className = "";
    aImgs[0].className = "";
    // console.log(element);

    if (index == aImgs.length - 1) {
      btnLeft.style.opacity = 0;
      return false;
    } else {
      //记录上一张图片的下标
      lastIndex = index;
      is = i;
      if (i != aImgs.length) {
        aLis[is].className = "";
      }
      //清除上一张图片的样式
      aImgs[lastIndex].className = "";
      index++;
      b++;
      i--;
      //设置当前图片的样式
      aImgs[index].className = "on";
      aLis[i].className = "active";
      btnul.style.marginLeft = a[b] + "px";
      btnRight.style.opacity = 0.5;
      if (i == 1 || i == 0) {
        btnLeft.style.opacity = 0;
      }
    }
  };
  //点击头像切换图片
  avatar9.onclick = function () {
    aLis[9].className = "";
    aImgs[0].className = "";
    btnul.style.marginLeft = a[1] + "px";
    aImgs[1].className = "on";
    aLis[8].className = "active";
    is = i = 8;
    lastIndex = index = 1;
    b = 1;
    btnRight.style.opacity = 0.5;
    // console.log(b);
  };

  avatar8.onclick = function () {
    aLis[i].className = "";
    aImgs[1].className = "";
    btnul.style.marginLeft = a[2] + "px";
    aImgs[2].className = "on";
    aLis[7].className = "active";
    is = i = 7;
    lastIndex = index = 2;
    b = 2;
  };
  avatar7.onclick = function () {
    aLis[i].className = "";
    aImgs[2].className = "";
    btnul.style.marginLeft = a[3] + "px";
    aImgs[3].className = "on";
    aLis[6].className = "active";
    is = i = 6;
    lastIndex = index = 3;
    b = 3;
  };
  avatar6.onclick = function () {
    aLis[i].className = "";
    aImgs[3].className = "";
    btnul.style.marginLeft = a[4] + "px";
    aImgs[4].className = "on";
    aLis[5].className = "active";
    is = i = 5;
    lastIndex = index = 4;
    b = 4;
  };
  avatar5.onclick = function () {
    aLis[i].className = "";
    aImgs[4].className = "";
    btnul.style.marginLeft = a[5] + "px";
    aImgs[5].className = "on";
    aLis[4].className = "active";
    is = i = 4;
    lastIndex = index = 5;
    b = 5;
  };
  avatar4.onclick = function () {
    aLis[i].className = "";
    aImgs[5].className = "";
    btnul.style.marginLeft = a[6] + "px";
    aImgs[6].className = "on";
    aLis[3].className = "active";
    is = i = 3;
    lastIndex = index = 6;
    b = 6;
  };
  avatar3.onclick = function () {
    aLis[i].className = "";
    aImgs[6].className = "";
    btnul.style.marginLeft = a[7] + "px";
    aImgs[7].className = "on";
    aLis[2].className = "active";
    is = i = 2;
    lastIndex = index = 7;
    b = 7;
  };
  avatar2.onclick = function () {
    aLis[i].className = "";
    aImgs[7].className = "";
    btnul.style.marginLeft = a[8] + "px";
    aImgs[8].className = "on";
    aLis[1].className = "active";
    is = i = 1;
    lastIndex = index = 8;
    b = 8;
  };
  avatar1.onclick = function () {
    aLis[i].className = "";
    aImgs[8].className = "";
    btnul.style.marginLeft = a[9] + "px";
    aImgs[9].className = "on";
    aLis[0].className = "active";
    is = i = 0;
    lastIndex = index = 9;
    b = 9;
    btnLeft.style.opacity = 0;
  };

  //荣誉资质中年份的点击事件
  de1.onclick = function () {
    un1.style.opacity = 1;
    un2.style.opacity = 0;
    un3.style.opacity = 0;
    un4.style.opacity = 0;
    un5.style.opacity = 0;
    un6.style.opacity = 0;
    un7.style.opacity = 0;
    un8.style.opacity = 0;
    un9.style.opacity = 0;
    de1.className = "active2";
    de2.className = "un3-2-1";
    de3.className = "un3-2-1";
    de4.className = "un3-2-1";
    de5.className = "un3-2-1";
    de6.className = "un3-2-1";
    de7.className = "un3-2-1";
    de8.className = "un3-2-1";
    de9.className = "un3-2-1";
    un.style.marginTop = 0 + "px";
    line.style.top = 260 + "px";
    return false;
  };

  de2.onclick = function () {
    un1.style.opacity = 0;
    un2.style.opacity = 1;
    un3.style.opacity = 0;
    un4.style.opacity = 0;
    un5.style.opacity = 0;
    un6.style.opacity = 0;
    un7.style.opacity = 0;
    un8.style.opacity = 0;
    un9.style.opacity = 0;
    de1.className = "un3-2-1";
    de2.className = "active2";
    de3.className = "un3-2-1";
    de4.className = "un3-2-1";
    de5.className = "un3-2-1";
    de6.className = "un3-2-1";
    de7.className = "un3-2-1";
    de8.className = "un3-2-1";
    de9.className = "un3-2-1";
    un3_2.id = "";
    un.style.marginTop = 0 + "px";
    line.style.top = 330 + "px";
    // de2.style.borderleft="2px solid #3778e5";
    return false;
  };

  de3.onclick = function () {
    un1.style.opacity = 0;
    un2.style.opacity = 0;
    un3.style.opacity = 1;
    un4.style.opacity = 0;
    un5.style.opacity = 0;
    un6.style.opacity = 0;
    un7.style.opacity = 0;
    un8.style.opacity = 0;
    un9.style.opacity = 0;
    de1.className = "un3-2-1";
    de2.className = "un3-2-1";
    de3.className = "active2";
    de4.className = "un3-2-1";
    de5.className = "un3-2-1";
    de6.className = "un3-2-1";
    de7.className = "un3-2-1";
    de8.className = "un3-2-1";
    de9.className = "un3-2-1";
    un3_2.id = "";
    line.style.top = 390 + "px";
    un.style.marginTop = 0 + "px";
    return false;
  };

  de4.onclick = function () {
    un1.style.opacity = 0;
    un2.style.opacity = 0;
    un3.style.opacity = 0;
    un4.style.opacity = 1;
    un5.style.opacity = 0;
    un6.style.opacity = 0;
    un7.style.opacity = 0;
    un8.style.opacity = 0;
    un9.style.opacity = 0;
    de1.className = "un3-2-1";
    de2.className = "un3-2-1";
    de3.className = "un3-2-1";
    de4.className = "active2";
    de5.className = "un3-2-1";
    de6.className = "un3-2-1";
    de7.className = "un3-2-1";
    de8.className = "un3-2-1";
    de9.className = "un3-2-1";
    un3_2.id = "";
    line.style.top = 460 + "px";
    un.style.marginTop = 0 + "px";
    return false;
  };

  de5.onclick = function () {
    un1.style.opacity = 0;
    un2.style.opacity = 0;
    un3.style.opacity = 0;
    un4.style.opacity = 0;
    un5.style.opacity = 1;
    un6.style.opacity = 0;
    un7.style.opacity = 0;
    un8.style.opacity = 0;
    un9.style.opacity = 0;
    de1.className = "un3-2-1";
    de2.className = "un3-2-1";
    de3.className = "un3-2-1";
    de4.className = "un3-2-1";
    de5.className = "active2";
    de6.className = "un3-2-1";
    de7.className = "un3-2-1";
    de8.className = "un3-2-1";
    de9.className = "un3-2-1";
    un3_2.id = "";

    if (c < 0) {
      c = 0;
    }
    c = c - 60;
    line.style.top = 460 + "px";
    un.style.marginTop = c + "px";
    return false;
  };

  de6.onclick = function () {
    un1.style.opacity = 0;
    un2.style.opacity = 0;
    un3.style.opacity = 0;
    un4.style.opacity = 0;
    un5.style.opacity = 0;
    un6.style.opacity = 1;
    un7.style.opacity = 0;
    un8.style.opacity = 0;
    un9.style.opacity = 0;
    de1.className = "un3-2-1";
    de2.className = "un3-2-1";
    de3.className = "un3-2-1";
    de4.className = "un3-2-1";
    de5.className = "un3-2-1";
    de6.className = "active2";
    de7.className = "un3-2-1";
    de8.className = "un3-2-1";
    de9.className = "un3-2-1";
    un3_2.id = "";
    if ((c = 75)) {
      c = -50;
    }
    c -= 60;
    line.style.top = 470 + "px";
    un.style.marginTop = c + "px";
    return false;
  };

  de7.onclick = function () {
    un1.style.opacity = 0;
    un2.style.opacity = 0;
    un3.style.opacity = 0;
    un4.style.opacity = 0;
    un5.style.opacity = 0;
    un6.style.opacity = 0;
    un7.style.opacity = 1;
    un8.style.opacity = 0;
    un9.style.opacity = 0;
    de1.className = "un3-2-1";
    de2.className = "un3-2-1";
    de3.className = "un3-2-1";
    de4.className = "un3-2-1";
    de5.className = "un3-2-1";
    de6.className = "un3-2-1";
    de7.className = "active2";
    de8.className = "un3-2-1";
    de9.className = "un3-2-1";
    un3_2.id = "";
    line.style.top = 530 + "px";
    un.style.marginTop = -120 + "px";

    return false;
  };

  de8.onclick = function () {
    un1.style.opacity = 0;
    un2.style.opacity = 0;
    un3.style.opacity = 0;
    un4.style.opacity = 0;
    un5.style.opacity = 0;
    un6.style.opacity = 0;
    un7.style.opacity = 0;
    un8.style.opacity = 1;
    un9.style.opacity = 0;
    de1.className = "un3-2-1";
    de2.className = "un3-2-1";
    de3.className = "un3-2-1";
    de4.className = "un3-2-1";
    de5.className = "un3-2-1";
    de6.className = "un3-2-1";
    de7.className = "un3-2-1";
    de8.className = "active2";
    de9.className = "un3-2-1";
    un3_2.id = "";
    line.style.top = 600 + "px";
    un.style.marginTop = -120 + "px";

    return false;
  };

  de9.onclick = function () {
    un1.style.opacity = 0;
    un2.style.opacity = 0;
    un3.style.opacity = 0;
    un4.style.opacity = 0;
    un5.style.opacity = 0;
    un6.style.opacity = 0;
    un7.style.opacity = 0;
    un8.style.opacity = 0;
    un9.style.opacity = 1;
    de1.className = "un3-2-1";
    de2.className = "un3-2-1";
    de3.className = "un3-2-1";
    de4.className = "un3-2-1";
    de5.className = "un3-2-1";
    de6.className = "un3-2-1";
    de7.className = "un3-2-1";
    de8.className = "un3-2-1";
    de9.className = "active2";
    un3_2.id = "";
    line.style.top = 660 + "px";
    un.style.marginTop = -120 + "px";
    return false;
  };
};
