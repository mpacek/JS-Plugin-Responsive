# Responsive v.1.0.0

jQuery helper plugin, can be used to launch scripts on mobile, and desktop. As parameters takes breakpoint value, and functions to run.

**Requirements:**

* jQuery

**How to use:**

``` JavaScript
var yourMobileFunction = function(),
	yourDesktopFunction = function();

if ($.fn.responsiveSetup) {
	$(document).responsiveSetup({
		callFunctionMobile: yourMobileFunction,
		callFunctionDesktop: yourDesktopFunction,
		breakpoint: 1200
	});
}
```

Copyright 2015 Michał Pacek

Licensed under the Apache License, Version 2.0.
