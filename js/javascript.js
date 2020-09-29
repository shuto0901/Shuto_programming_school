'use strict';

// スムーススクロール
$(function(){
$('a[href^="#"]').click(function() {
var speed = 400; // スクロールスピード(ミリ秒)
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$('body,html').animate({scrollTop:position}, speed, 'swing');
return false;
});
});
// スムーススクロール

// Adobe Font
(function(d) {
  var config = {
    kitId: 'znv5pdh',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
// Adobe Font

// モーダルウィンドウ
$(function () {
var URL = location.search;
var popup = $('.popup');
$(window).on('load',function(){
  if(document.URL.match(/modal=show/)) {
    popup.fadeIn(500);
  }
  else{
    popup.hide();
  }
 });
 $(".popup-close , .popup-background , .popup-btn-txt").on("click", function () {
   popup.fadeOut();
  });
});
// モーダルウィンドウ

// ハンバーガーメニュー
jQuery(function ($) {
  $(function () {
    $(".menu-open").on("click", function () {
      if ($(this).hasClass("menu-close")) {
        $(this).removeClass("menu-close");
        $(".h-menu").slideDown(300);
      } else {
        $(this).addClass("menu-close");
        $(".h-menu").slideUp(300);
      }
    });
  });
}); 
jQuery(function ($) {
  $(function () {
    $(".h-menu-close").on("click", function () {
      $(".h-menu").slideUp(300);
      $(".menu-open").addClass("menu-close");              
    });
  });
}); 
jQuery(function ($) {
  $(function () {
    $(".h-menu-btn").on("click", function () {
      $(".h-menu").slideUp(300);
      $(".menu-open").addClass("menu-close");
    });
  });
});
// ハンバーガーメニュー

// よくあるご質問ドロップダウンバー
$(function ($) {
  $(".question-box-lower").css("display", "none");
  $(".question-box-upper").on("click", function () {
    $(".question-box-upper").not(this).next().slideUp(300);
    $(this).next().slideToggle(300);

    var openBtn = $(this).find('.question-open');
    $(".question-open").not(openBtn).addClass("question-open-btn");
    $(openBtn).toggleClass("question-open-btn");
  });
});    
// よくあるご質問ドロップダウンバー
   
// 追従ボタン
$(function () {
  var topBtn = $('.following , .footer-box');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      topBtn.fadeIn();
    } else {      
      topBtn.fadeOut();
    };
  });
});
// 追従ボタン
