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
});
