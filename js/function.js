$(window).scroll(function (event) {
  if ($(document).scrollTop() > 200) {
    $("#navbar").addClass("shrink");
    $("#scrollToTop-btn").addClass("show");
  } else {
    $("#navbar").removeClass("shrink");
    $("#scrollToTop-btn").removeClass("show");
  }
  if (
    window.innerHeight + window.pageYOffset >=
    ((document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight)
  ) {
    $("#scrollToBottom-btn").removeClass("show");
  } else {
    $("#scrollToBottom-btn").addClass("show");
  }
  const myScrollspy = document.getElementById("myScrollspy-box");
  if (myScrollspy !== null) {
    const sticky = myScrollspy.offsetTop;
    var scrolled_val = window.scrollY;
    if (scrolled_val >= 400) {
      myScrollspy.classList.add("sticky");
    } else {
      myScrollspy.classList.remove("sticky");
    }
  }
});


