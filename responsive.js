"use strict";

// Mobile setup
$.fn.responsiveSetup = function (settings) {
  settings = jQuery.extend({
    onMobile: '',
    onDesktop: '',
    breakpoint: 980
  }, settings);

  var stateMobile = false;

  // launch
  if ($(window)[0].innerWidth < settings.breakpoint) {
    settings.onMobile.callFunction();
    stateMobile = true;
  }

  // on window resize
  $(window).resize(function () {
    var windowSize = $(window)[0].innerWidth;

    if ((windowSize >= settings.breakpoint) && stateMobile) {
      settings.onDesktop.callFunction();
      stateMobile = false;
    }
    else if ((windowSize < settings.breakpoint) && !stateMobile) {
      settings.onMobile.callFunction();
      stateMobile = true;
    }
    else {
      return;
    }
  });
}
