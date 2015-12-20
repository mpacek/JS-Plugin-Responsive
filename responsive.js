"use strict";

// Mobile setup
$.fn.responsiveSetup = function (settings) {
  settings = jQuery.extend({
    runMobile: '',
    runDesktop: '',
    breakpoint: 980
  }, settings);

  var onMobile = false;

  // launch
  if ($(window)[0].innerWidth < settings.breakpoint) {
    settings.runMobile.callFunction();
    onMobile = true;
  }

  // on window resize
  $(window).resize(function () {
    var windowSize = $(window)[0].innerWidth;

    if ((windowSize >= settings.breakpoint) && onMobile) {
      if (typeof settings.runDesktop === "function") {
        settings.runDesktop.callFunction();
      }
      onMobile = false;
    }
    else if ((windowSize < settings.breakpoint) && !onMobile) {
      if (typeof settings.runMobile === "function") {
        settings.runMobile.callFunction();
      }
      onMobile = true;
    }
  });
}
