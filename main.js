$(document).ready(function () {
  $(".loadMore").click(function () {
    $("#gellary_img_container").slideDown(3000);
    $(".loadMore").text("Load Less");
  });
  $(".loadMore").mouseenter(function () {
    $("#gellary_img_container").slideUp(3000);
    $(".loadMore").text("Load More");
  });
  $(".gellary_h").mouseleave(function () {
    $(this).animate({ height: "200px", opacity: "0.5" }, "slow");
    $(this).animate({ width: "200px", opacity: "0.7" }, "slow");
    $(this).animate({ height: "100px", opacity: "0.4" }, "slow");
    $(this).animate({ width: "90%", opacity: "1" }, "slow");
    $(this).animate({ width: "80%", opacity: "1" }, "slow");
    $(this).animate({ height: "100%", opacity: "1" }, "slow");
  });
});
