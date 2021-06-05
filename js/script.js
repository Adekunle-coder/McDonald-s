$(document).ready(function () {
  $(".collapse").on("show.bs.collapse", function () {
    console.log("Hello");
    $(this).$(".ref")
    //   .prev(".ref")
      .find(".accordion-header")
      .find(".fas")
      .removeClass("fa-plus")
      .addClass("fa-minus");
  }).on("hide.bs.collapse", function(){
      $(this).prev(".ref").find(".accordion-header").find(".fas").addClass("fa-plus")
  })
});
