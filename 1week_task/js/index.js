$(function () {
  //スクロール時の処理
  $("a[href*='#']:not([href='#'])").click(function (e) {
    e.preventDefault();
    let target = $($(this).attr("href")).offset().top;
    $("html,body").animate({ scrollTop: target }, "slow");
  });

  //コンテンツ切り替えの処理
  $('.service-contents p[class != "service-contents-web"]').hide();
  $(".service-list li").click(function () {
    $(".service-contents p").hide();
    $($(this).attr("href")).show();
  });
});
