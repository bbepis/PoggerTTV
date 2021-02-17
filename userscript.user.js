// ==UserScript==
// @name     PoggerTTV Loader
// @version  0.1
// @grant    none
// @match https://*.twitch.tv/*
// @run-at document-end
// @grant none
// ==/UserScript==

function load()
{
	let addonMetadata = {
		"id": "u-pttv",
		"requires": [],

		"version": "1.0.0",
		"icon": "https://i.imgur.com/LNsOaR2.png",

		"shortname": "PTTV",
		"name": "PoggerTTV",
		"author": "Bepis",
		"description": "An unofficial pack for FFZ that adds emotes that will make you pog your pants.",

		"website": "https://bepis.io/",
		"settings": "add_ons.pogttv",
		"src": "https://combinatronics.com/bbepis/PoggerTTV/master/addon.js"
	};
	
	
	
	let clonedAddonMetadata = cloneInto(addonMetadata, unsafeWindow);


	let addons = unsafeWindow.FrankerFaceZ.instance.addons;

	console.log(addons);

	addons.addAddon(clonedAddonMetadata, false);

	addons.rebuildAddonSearch();
	
	if (Object.values(unsafeWindow.FrankerFaceZ.instance.addons.addons).length > 1
		&& addons.isAddonEnabled("u-pttv"))
	{
		let addon = addons.getAddon("u-pttv");
		addon.onEnable();
	}

	console.log("PTTV loaded");
};


(function waitForElement()
{
	if(typeof unsafeWindow.FrankerFaceZ !== "undefined")
	{
		load();
	}
	else
	{
		setTimeout(waitForElement, 100);
	}
})();