Y.use("node", function (Y) {

	Y.on("domready", function () {

		// initialize all images
		new Y.Squarespace.Loader({
			img: Y.all("img[data-image]:not([data-load])")
		});

		// refresh all images on window resize
		Y.on("windowresize", function () {
			Y.all("img[data-image][src]").each(function (img) {
				ImageLoader.load(img);
			});
		});

	});

	var nav = Y.one("#nav");

	nav.delegate("click", function (e) {
		var urlId = this.getAttribute("href").substring(2);
		var section = Y.one("main > section[data-page='" + urlId + "']");
		if (section) {
			e.preventDefault();
			e.stopPropagation();

			var animation = new Y.Anim({
				duration: 0.5,
				node: "win",
				easing: "easeBoth",
				to: {
					scroll: [0, section.get("region").top - 80]
				}
			});

			animation.run();

		}
	}, "a[href^='/#']");

});
