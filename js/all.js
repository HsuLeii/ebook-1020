var word = document.querySelector('.btn-word');
var box = document.querySelector('.word-area');
var arrow = document.querySelector('.arrow')
var sound = document.querySelector('.sound-img');
var magnifier = document.querySelector('.btn-magnifier');
var font = document.querySelector('.btn-font');
var favorite = document.querySelector('.btn-favorite');
var record = document.querySelector('.btn-record');
var speak = document.querySelector('.btn-speak');
var verbatim = document.querySelector('.btn-verbatim');
var screen = document.querySelector('.btn-screen');
var play = document.querySelector('.btn-play');
var book = document.querySelector('.book-page');
var speaking = document.querySelector('.speak-menu-container');
var enlarge = document.querySelector('.magnifier-menu-container');
var text = document.querySelector('.font-menu-container');
var read = document.querySelector('.read-menu-container');
var vocabulary = document.querySelector('.word-menu-container');
var page = document.querySelector('.book-page');
var playarea = document.querySelector('.play-area');

$(play).hide();
$("#word-id").click(function() {
  box.classList.toggle("open");
  book.classList.toggle("move");
  page.classList.remove("screen");
});
$("#read-id").click(function() {
  $(play).toggle();
  $('.sound-line').toggleClass("grey");
  if ($('.sound-img').prop('disabled')) {
    $('.sound-img').prop('disabled',false);
  }else{
    $('.sound-img').prop('disabled',true);
  }
  if ($('.btn-speak').prop('disabled')) {
    $('.btn-speak').prop('disabled',false);
  }else{
    $('.btn-speak').prop('disabled',true);
  }
});

$("#pinyin-id").change(function () {
  if ($(this).is(":checked")) {
    $(".text p > ruby > rt").show();
    $(".text > .article > p > ruby > rt").show();
  } else {
    $(".text p > ruby > rt").hide();
    $(".text > .article > p > ruby > rt").hide();
  }
});
$("#text-id").change(function () {
  if ($(this).is(":checked")) {
    $(".text").show();
  } else {
    $(".text").hide();
  }
});

$(function () {
  var templatetextwidth = $(".book-page-bg > img").width();
  $(".text").css({
    "width": templatetextwidth
  });
  var templatetextheight = $(".book-page-bg > img").height();
  $(".text").css({
    "height": templatetextheight
  });
  var tworightbookbg = $(".two-right-book-page-bg").height();
  $(".two-right-text").css({
    "height": tworightbookbg
  });
  $(".text.two-right-text").css({
    "max-width": "45%"
  });
  var halftextwidth = $(".book-page-bg").width();
  $(".text").css({"max-width": halftextwidth});
  var textheight = $(".a2-2-book-page-bg > img").height() / 2;
  $(".a2-2-text").css({"max-height": textheight});
});

word.addEventListener('click', function () {
  // this.classList.toggle("end-word");
  vocabulary.classList.toggle("open");
  speaking.classList.remove("open");
  enlarge.classList.remove("open");
  read.classList.remove("open");
  text.classList.remove("open");
});
arrow.addEventListener('click', function () {
  box.classList.toggle("open");
  book.classList.toggle("move");
});
sound.addEventListener('click', function () {
  this.classList.toggle("mute");
});
verbatim.addEventListener('click', function () {
  read.classList.toggle("open");
  enlarge.classList.remove("open");
  speaking.classList.remove("open");
  enlarge.classList.remove("open");
  text.classList.remove("open");
  vocabulary.classList.remove("open");
});
speak.addEventListener('click', function () {
  speaking.classList.toggle("open");
  page.classList.remove("screen");
  text.classList.remove("open");
  enlarge.classList.remove("open");
  read.classList.remove("open");
  vocabulary.classList.remove("open");
});
magnifier.addEventListener('click', function () {
  enlarge.classList.toggle("open");
  page.classList.remove("screen");
  speaking.classList.remove("open");
  text.classList.remove("open");
  read.classList.remove("open");
  vocabulary.classList.remove("open");
});
font.addEventListener('click', function () {
  text.classList.toggle("open");
  page.classList.remove("screen");
  speaking.classList.remove("open");
  enlarge.classList.remove("open");
  read.classList.remove("open");
  vocabulary.classList.remove("open");
});
screen.addEventListener('click', function () {
  this.classList.toggle("end-screen");
  box.classList.remove("open");
  document.getElementById("word-id").checked = false;
  book.classList.remove("move");
  if (page.classList.contains('screen')) {
    page.classList.remove('screen')
  } else {
    page.classList.add('screen')
  }
});
play.addEventListener('click', function () {
  this.classList.toggle("pause");
});

favorite.addEventListener('click', function () {
  this.classList.toggle("click");
});
if ($(window).width() < 768) {
  $("#text-id").change(function () {
    if ($(this).is(":checked")) {
      $(".a2-2-text p").show();
      $(".book-page-img").css("justify-content", "center");
    } else {
      $(".a2-2-text p").hide();
      $(".book-page-img").css("justify-content", "center");
    }
  });
} else if ($(window).width() > 768) {
  var textwidth = $(".book-page-bg > img").width();
  $(".text").css({
    "max-width": textwidth
  });
  var textheight = $(".a2-2-book-page-bg > img").height();
  $(".a2-2-text").css({
    "height": textheight
  });
}

