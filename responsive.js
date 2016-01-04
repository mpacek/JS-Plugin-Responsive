"use strict";

// Mobile setup
$.fn.responsiveSetup = function (settings) {
  settings = jQuery.extend({
    callFunctionMobile: false,
    callFunctionDesktop: false,
    breakpoint: 980
  }, settings);

  var onMobile = false;

  // launch on load
  if ($(window)[0].innerWidth < settings.breakpoint) {
    settings.callFunctionMobile && settings.callFunctionMobile();
    onMobile = true;
  }

  // launch on window resize
  $(window).resize(function () {
    var windowSize = $(window)[0].innerWidth;

    if ((windowSize >= settings.breakpoint) && onMobile) {
      settings.callFunctionDesktop && settings.callFunctionDesktop();
      onMobile = false;
    }
    else if ((windowSize < settings.breakpoint) && !onMobile) {
      settings.callFunctionMobile && settings.callFunctionMobile();
      onMobile = true;
    }
  });
}
