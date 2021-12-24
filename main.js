/*global browser */

browser.browserAction.onClicked.addListener(() => {
	var aTab;
	["https://equitygroupholdings.com/ug/", "https://www.aeroclubofindia.com/contact.html"].map(url=>{
		browser.tabs.create({
			url: url
		}).then(function(_aTab) {
			aTab = _aTab;
			browser.webNavigation.onCompleted.addListener((details) => {
				if (details.tabId === aTab.id) {
					browser.webNavigation.getAllFrames({
						tabId: aTab.id
					}).then((frArr) => {
						console.log("ALL IFRAMES returned by browser.webNavigation.getAllFrames:", frArr, url);
					});
				}
			});
		});
	});
});
