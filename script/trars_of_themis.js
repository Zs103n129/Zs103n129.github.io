// wheelturnpage(2);

window.onload = function () {
  const information = document.getElementById("information");
  const left = document.getElementsByClassName("left")[0];
  const right = document.getElementsByClassName("right")[0];
  let mark = 0;

  function revise() {
    if (mark == -1) {
      mark = 4;
    }
    if (mark == 5) {
      mark = 0;
    }
  }

  function initilize() {
    information.children[0].id = "";
    information.children[1].id = "";
    information.children[2].id = "";
    information.children[3].id = "";
    information.children[4].id = "";
  }

  function cut() {
    initilize();
    revise();
    information.children[mark].id = "center";
    mark = mark - 1;
    revise();
    information.children[mark].id = "left";
    mark = mark + 1;
    revise();
    mark = mark + 1;
    revise();
    information.children[mark].id = "right";
    mark = mark - 1;
    revise();
  }

  left.addEventListener("click", function () {
    mark = mark - 1;
    cut();
  });
  right.addEventListener("click", function () {
    mark = mark + 1;
    cut();
  });
};
