# Responsive v.1.0.0

jQuery helper plugin, can be used to launch scripts on mobile, and desktop. As parameters takes breakpoint value, and functions to run.

**How to use:**

	var mobileFunction = function(),
		desktopFunction = function();

	if ($.fn.responsiveSetup) {
	  $(document).responsiveSetup({
	    runMobile: { callFunction: mobileFunction },
	    runDesktop: { callFunction: desktopFunction },
			breakpoint: 1080
	  });
	}
