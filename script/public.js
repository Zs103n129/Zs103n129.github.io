function wheelturnpage(max) {
  let scrollPosition = 0; // 设置当前滚动位置
  // 监听滚轮事件
  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      // 判断滚轮方向
      scrollPosition++; // 向下滚动，滚动位置加一
    } else {
      scrollPosition--; // 向上滚动，滚动位置减一
    }

    if (scrollPosition > max) {
      scrollPosition = 1;
    } //超出时返回
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }

    let scrollDistance = window.innerHeight * scrollPosition; // 计算要滚动的距离（100vh）
    window.scrollTo(
      // 滚动到指定位置
      {
        top: scrollDistance,
        behavior: "smooth",
      }
    );
  });
  document.removeEventListener("wheel", onscroll);
}
