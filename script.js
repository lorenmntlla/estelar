const URLs = document.querySelectorAll("a[href]");

for (const url of URLs) {
	const href = url.getAttribute("href");
	if (!href.includes("://") || href.includes("internal.com")) continue;

	url.setAttribute("data-order-externalurl", "true");
}
