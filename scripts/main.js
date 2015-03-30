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
		var fullUrl = this.getAttribute("href");
		var section = Y.one("main > section[data-url='" + fullUrl + "']");
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
	}, "a[href]");

	Y.all("a").each(function (link) {

		if (link.one("span[href]")) {
			var sublink = link.one("span[href]");
			link.setAttribute("href", sublink.getAttribute("href"));
			link.setHTML(sublink.getHTML());
		}

		var href = link.getAttribute("href");
		if (/\/\/github/.test(href)) link.setStyle("color", "#7e2f8b");
		else if (/\/\/thelittlefoxes/.test(href)) link.setStyle("color", "#df7618");
		else if (/\/\/knapsackcreative/.test(href)) link.setStyle("color", "#ed4036");
		else if (/\/\/twitter/.test(href)) link.setStyle("color", "#55acee");
		else if (/\/\/facebook/.test(href)) link.setStyle("color", "#3d5a99");
		else if (/\/\/rdio/.test(href)) link.setStyle("color", "#008fd5");

	});

});
