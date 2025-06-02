(async () => {
	const response = await fetch(`https://
		resources.whatwg.org/logo-fetch.svg`);

	const blob = await response.blob(); // download as Blob object

	// create <img> for it
	const img = document.createElement("img");
	img.style = "top:10px;left:10px;width:100px";
	main.append(img);

	// show it
	img.src = URL.createObjectURL(blob);
})();
