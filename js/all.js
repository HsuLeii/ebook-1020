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
var page = document.querySelector('.book-page');
var playarea = document.querySelector('.play-area');


word.addEventListener('click', function() {
    box.classList.toggle("open");
    book.classList.toggle("move");
    page.classList.remove("screen");
    this.classList.toggle("end-word");
  });
arrow.addEventListener('click', function() {
    box.classList.toggle("open");
    book.classList.toggle("move");
  });
sound.addEventListener('click', function() {
    this.classList.toggle("mute");
  });
verbatim.addEventListener('click', function() {
  this.classList.toggle("end-verbatim");
});
screen.addEventListener('click', function() {
  this.classList.toggle("end-screen");
  box.classList.remove("open");
  book.classList.remove("move");
  if (page.classList.contains('screen')) {
    page.classList.remove('screen')
  } else {
    page.classList.add('screen')
  }
  
});
play.addEventListener('click', function() {
  this.classList.toggle("pause");
});
speak.addEventListener('click', function() {
  speaking.classList.toggle("open");
  page.classList.remove("screen");
});
magnifier.addEventListener('click', function() {
  enlarge.classList.toggle("open");
  page.classList.remove("screen");
});
font.addEventListener('click', function() {
  text.classList.toggle("open");
  page.classList.remove("screen");
});
favorite.addEventListener('click', function() {
  this.classList.toggle("click");
});
if ($(window).width() < 768) { 
    $(".sound-line").css({"width": "4px" , "height" : "40%" });
    $("#text-id").change(function () {
      if ($(this).is(":checked")) {
          $(".a2-2-text p").show();
          $(".book-page-img").css("justify-content","center");
      } else {
          $(".a2-2-text p").hide();
          $(".book-page-img").css("justify-content","center");
      }
    }); 
    var halftextwidth = $(".book-page-bg > img").width();     
      $(".text").css({"max-width": halftextwidth });  
  }
  else if ($(window).width() > 768) {
    var textwidth = $(".book-page-bg > img").width();     
      $(".text").css({"max-width": textwidth }); 
    var textheight = $(".a2-2-book-page-bg > img").height();     
      $(".a2-2-text").css({"height": textheight }); 
    }
$(function () {
  var templatetextwidth = $(".book-page-bg > img").width();     
      $(".text").css({"width": templatetextwidth });  
      var templatetextheight = $(".book-page-bg > img").height();     
      $(".text").css({"height": templatetextheight }); 
  $("#pinyin-id").change(function () {
      if ($(this).is(":checked")) {
          $(".text p > ruby > rt").show();
      } else {
          $(".text p > ruby > rt").hide();
      }
    });
    $("#text-id").change(function () {
      if ($(this).is(":checked")) {
          $(".text").show();
      } else {
          $(".text").hide();
      }
    });
    });

  