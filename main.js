window.onscroll = function () {
  var el = document.getElementsByClassName("header")[0];
  var className = "small";
  if (el.classList) {
    if (window.scrollY > 10) el.classList.add(className);
    else el.classList.remove(className);
  }
};

$(function () {
  // For card rotation
  $(".btn-rotate").click(function () {
    $(".card-front").toggleClass(" rotate-card-front");
    $(".card-back").toggleClass(" rotate-card-back");
  });
});
