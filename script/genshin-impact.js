window.onload = function () {
  const rotating = document.getElementById("rotating");
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const detailed = document.getElementsByClassName("detailde");
  const Detail_page = document.getElementsByClassName("Detail_page");
  const fork = document.getElementsByClassName("fork");
  const detail = document.getElementsByClassName("detail");
  const mainli = document.querySelectorAll(".main li");
  let mark = 0;
  let count = 0;
  let control = false;
  let state = true;
  function purge() {
    rotating.children[0].style.opacity = 0;
    rotating.children[1].style.opacity = 0;
    rotating.children[2].style.opacity = 0;
    rotating.children[3].style.opacity = 0;
    rotating.children[4].style.opacity = 0;
    rotating.children[5].style.opacity = 0;
    rotating.children[mark].style.opacity = 1;
  }

  left.addEventListener("click", function () {
    mark = mark - 1;
    if (mark === -1) {
      mark = 5;
    }
    purge();
  });
  right.addEventListener("click", function () {
    mark = mark + 1;
    if (mark === 6) {
      mark = 0;
    }
    purge();
  });
  console.log(detail);
  for (var i = 0; i < mainli.length; i++) {
    mainli[i].index = i;
    mainli[i].addEventListener("click", function () {
      detail[count].style.height = 0 + "dvh";
      detail[this.index].style.height = 100 + "dvh";
      detail[this.index].scrollIntoView({ behavior: "smooth" });
      count = this.index;
      control = true;
    });
  }
  for (let i = 0; i < detailed.length; i++) {
    detailed[i] = this;
    detailed[i].addEventListener("click", function () {
      console.log(Detail_page[i]);
      Detail_page[i].style.display = "flex";
      control = false;
    });
  }
  for (let i = 0; i < fork.length; i++) {
    fork[i] = this;
    fork[i].addEventListener("click", function () {
      Detail_page[i].style.display = "none";
      document.body.style.overflow = "auto";
      control = true;
    });
  }
  function scroll() {
    state = true;
  }
  function stopfunc(e) {
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
  }
  for (let i = 0; i < detail.length; i++) {
    detail[i] = this;
    detail[i].addEventListener("click", function (e) {
      stopfunc(e);
      detail[i].style.height = 0 + "dvh";
      detail[i].style.padding = 0;
      control = false;
    });
    detailed[i].addEventListener("click", function (e) {
      stopfunc(e);
      Detail_page[i].style.display = "flex";
      control = false;
    });
  }
};
