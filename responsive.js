"use strict";

// Mobile setup
$.fn.responsiveSetup = function (settings) {
  settings = jQuery.extend({
    runMobile: false,
    runDesktop: false,
    breakpoint: 980
  }, settings);

  var onMobile = false;

  var runFunction = function(fn) {
    if (fn) {
      fn.callFunction();
    }
  }

  // launch on load
  if ($(window)[0].innerWidth < settings.breakpoint) {
    runFunction(settings.runMobile);
    onMobile = true;
  }

  // launch on window resize
  $(window).resize(function () {
    var windowSize = $(window)[0].innerWidth;

    if ((windowSize >= settings.breakpoint) && onMobile) {
      runFunction(settings.runDesktop);
      onMobile = false;
    }
    else if ((windowSize < settings.breakpoint) && !onMobile) {
      runFunction(settings.runMobile);
      onMobile = true;
    }
  });
}
