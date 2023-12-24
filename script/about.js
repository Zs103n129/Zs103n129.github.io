window.onload = function () {
  const column = document.querySelectorAll(".column>div");
  const content = document.querySelectorAll(".content>ul>li");
  const fig_img = document.querySelectorAll(".fig>img");
  const box_ul = document.querySelector(".box>ul");
  const box_li = document.querySelectorAll(".box>ul>li");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const honor_li = document.querySelectorAll(".honor>ul>li");
  const year_p = document.querySelectorAll(".year>ul>li>p");
  const line = document.querySelector(".line");
  let number = 0;
  let move_distance = 20;
  let past = 0;
  let past_i=0;
  let difference = 0;
  let color_subscript = 0;
  let box_li_width = 260;
  let year_li_height = 65;
  let year_li_top = 13;
  let subscript = fig_img.length;
  function content_opacity() {
    content[0].style.display = "none";
    content[1].style.display = "none";
    content[2].style.display = "none";
  }
  //切换页面
  for (let i = 0; i < column.length; i++) {
    column[i] = this;
    column[i].addEventListener("click", function () {
      if(past_i!=i){
        content_opacity();
        content[i].style.display = "block";
        content[i].style.poition = "relative";
        color_subscript = 0;
        move_distance=20;
        number=0;
        fig_img_opacity();
        year_p_color();
        honor_li_display();
        line.style.top = 0;
        box_ul.style.left=0;
        year_li_top=13;
        difference = 0;
        past = 0;
        right.style.display="none";
      }
      past_i=i;
    });
  }
  function fig_img_opacity() {
    fig_img[0].style.display = "none";
    fig_img[1].style.display = "none";
    fig_img[2].style.display = "none";
    fig_img[3].style.display = "none";
    fig_img[4].style.display = "none";
    fig_img[5].style.display = "none";
    fig_img[6].style.display = "none";
    fig_img[7].style.display = "none";
    fig_img[8].style.display = "none";
    fig_img[9].style.display = "none";
    fig_img[number].style.display = "block";
  }
  function left_move() {
    move_distance = move_distance + box_li_width;
    box_ul.style.left = move_distance + "px";
  }
  function right_move() {
    move_distance = move_distance - box_li_width;
    box_ul.style.left = move_distance + "px";
  }
  function above_move() {
    year_li_top = year_li_top + year_li_height;
    line.style.top = year_li_top + "px";
  }
  function under_move() {
    year_li_top = year_li_top - year_li_height;
    line.style.top = year_li_top + "px";
  }
  function year_p_color() {
    year_p[0].style.color = "#676b73";
    year_p[1].style.color = "#676b73";
    year_p[2].style.color = "#676b73";
    year_p[3].style.color = "#676b73";
    year_p[4].style.color = "#676b73";
    year_p[5].style.color = "#676b73";
    year_p[6].style.color = "#676b73";
    year_p[7].style.color = "#676b73";
    year_p[8].style.color = "#676b73";
    year_p[color_subscript].style.color = "#3778e5";
  }
  function honor_li_display() {
    honor_li[0].style.display = "none";
    honor_li[1].style.display = "none";
    honor_li[2].style.display = "none";
    honor_li[3].style.display = "none";
    honor_li[4].style.display = "none";
    honor_li[5].style.display = "none";
    honor_li[6].style.display = "none";
    honor_li[7].style.display = "none";
    honor_li[8].style.display = "none";
    honor_li[color_subscript].style.display = "block";
  }
  //左按钮
  left.addEventListener("click", function () {
    number++;
    past++;
    if (number != 0) {
      right.style.display = "block";
    }
    if (number == 9) {
      fig_img_opacity();
      left_move();
      left.style.display = "none";
      return;
    }
    subscript--;
    fig_img_opacity();
    left_move();
  });
  //右按钮
  right.addEventListener("click", function () {
    if (number != 10) {
      left.style.display = "block";
    }
    number--;
    past--;
    if (number == 0) {
      right.style.display = "none";
    }
    subscript++;
    fig_img_opacity();
    right_move();
  });
  //点击头像切换图片
  for (let i = 0; i < box_li.length; i++) {
    box_li[i] = this;
    box_li[i].addEventListener("click", function () {
      number = 9 - i;
      difference = number - past;
      fig_img_opacity();
      if (difference != 0) {
        if (number > past) {
          left_move();
        } else {
          right_move();
        }
      }
      if (difference > 1) {
        if (number > past) {
          move_distance = move_distance + (box_li_width + box_li_width) - 260;
          box_ul.style.left = move_distance + "px";
        }
      }
      past = number;
      if (i == 8) {
        right.style.display = "block";
      }
    });
  }
  for (let i = 0; i < year_p.length; i++) {
    year_p[i] = this;
    year_p[i].addEventListener("click", function () {
      color_subscript = i;
      difference = Math.abs(color_subscript - past);
      if (color_subscript > past) {
        for (let g = 0; g < difference; g++) {
          above_move();
        }
      } else {
        for (g = 0; g < difference; g++) {
          under_move();
        }
      }
      past = color_subscript;
      year_p_color();
      honor_li_display();
    });
  }
};
