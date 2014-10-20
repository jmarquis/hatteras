Y.use("node", function (Y) {

	var nav = Y.one("#nav"),
		toggle = nav.one("> ul > li:last-child > a"),
		body = Y.one(document.body),
		feed = Y.one("#feed");

	if (toggle) {

		toggle.on("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			body.toggleClass("feed-visible");
		});

		body.on("click", function (e) {
			body.toggleClass("feed-visible", false);
		});

		feed.on("click", function (e) {
			e.stopPropagation();
		});

		feed.delegate("click", function (e) {
			e.preventDefault();
			body.toggleClass("feed-visible", false);
		}, ".close")

	}

});
