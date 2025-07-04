$(function () {
  //スクロール時の処理
  $("a[href*='#']:not([href='#']):not(.js-tab-link)").click(function (e) {
    e.preventDefault();
    let target = $($(this).attr("href")).offset().top;
    $("html,body").animate({ scrollTop: target }, "slow");
  });

  //コンテンツ切り替えの処理
  $('.service-contents p[class != "service-contents-web"]').hide();
  $(".js-tab-link").click(function (e) {
    e.preventDefault();
    $(".service-contents p").hide();
    $($(this).attr("href")).show();
  });
});
