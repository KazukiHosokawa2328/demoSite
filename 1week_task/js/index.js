$(function () {
  //スクロール時の処理
  $("a[href^='#']:not([href='#']):not(.js-tab-link)").click(function (e) {
    e.preventDefault();
    let target = $($(this).attr("href")).offset().top;
    $("html,body").animate({ scrollTop: target - 53 }, "slow");
  });

  //コンテンツ切り替えの処理
  $('.service-contents p[class != "service-contents-web"]').hide();
  $(".js-tab-link").click(function (e) {
    e.preventDefault();
    $(".service-contents p").hide();
    $($(this).attr("href")).show();
    $("li.service-item").removeClass("selected");
    $(this).parent().addClass("selected");
  });

  //お問い合わせ
  const pref = ["北海道", "青森県", "岩手県"];
  const cityData = {
    北海道: [
      "旭川市",
      "室蘭市",
      "釧路市",
      "帯広市",
      "北見市",
      "夕張市",
      "岩見沢市",
      "網走市",
      "留萌市",
      "苫小牧市",
      "稚内市",
      "美唄市",
      "芦別市",
      "江別市",
      "赤平市",
      "紋別市",
      "士別市",
      "名寄市",
      "三笠市",
      "根室市",
      "千歳市",
      "滝川市",
      "砂川市",
      "歌志内市",
      "深川市",
      "富良野市",
      "登別市",
      "恵庭市",
      "伊達市",
      "北広島市",
      "石狩市",
      "北斗市",
    ],
    青森県: [
      "青森市",
      "弘前市",
      "八戸市",
      "黒石市",
      "五所川原市",
      "十和田市",
      "三沢市",
      "むつ市",
      "つがる市",
      "平川市",
    ],
    岩手県: [
      "盛岡市",
      "宮古市",
      "大船渡市",
      "花巻市",
      "北上市",
      "久慈市",
      "遠野市",
      "一関市",
      "陸前高田市",
      "釜石市",
      "二戸市",
      "八幡平市",
      "奥州市",
      "滝沢市",
    ],
  };

  //都道府県を追加
  pref.forEach(function (element) {
    $("select[name='pref']").append(
      `<option value=${element}>${element}</option>`
    );
  });
  //都道府県に対応した市を追加
  $("select[name='pref']").on("change", function () {
    $(".pref-warn").hide();
    $(".city-warn").hide();
    const selectedPref = $(this).val();
    const citySelect = $("select[name='city']");
    citySelect
      .empty()
      .append('<option value="city-none" selected disabled>---</option>');

    if (cityData[selectedPref]) {
      cityData[selectedPref].forEach(function (city) {
        citySelect.append(`<option value=${city}>${city}</option>`);
      });
    }
  });

  //ハンバーガーメニューの開閉
  $("#js-button-drawer").on("click", function () {
    $(this).toggleClass("active");
    $(".drawer").slideToggle("fast");
    $("body").toggleClass("is-fixed");
  });
  //ハンバーガーメニュー押下時閉じる
  $(".header-nav-drawer").on("click", function () {
    $(".drawer").slideUp("fast");
    $("#js-button-drawer").removeClass("active");
    $("body").removeClass("is-fixed");
  });

  //セレクトにval空なら送信させない＆エラーメッセージ出す
  // $(".pref-warn, .city-warn").hide();

  // $("form").submit(function () {
  //   let sendFrag = true;
  //   if ($("select[name='pref']").val() === "pref-none") {
  //     $(".pref-warn").show();
  //     sendFrag = false;
  //   } else {
  //     $(".pref-warn").hide();
  //   }
  //   if ($("select[name='city']").val() === "city-none") {
  //     $(".city-warn").show();
  //     sendFrag = false;
  //   } else {
  //     $(".city-warn").hide();
  //   }
  //   if (sendFrag == false) {
  //     return false;
  //   }
  // });
});
