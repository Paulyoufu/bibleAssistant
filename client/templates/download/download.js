Template.download.helpers({
	booksList: function () {
		return Session.get('booksList');
	},
	bookName: function () {
		return Session.get('currentBookName'); 
	},
	chapterSN: function () {
		return Session.get('currentChapter');
	},
	chapters: function () {
		var currentChapterCount = Session.get('selectedChapterCount');
		var chapters = [];

		for (var i = 0; i < currentChapterCount; i++) {
			var chapterItem = {};
			chapterItem.chapterSN = i + 1;
			chapters.push(chapterItem);
		};

		return chapters;
	},
	availWidth: function () {
		return window.screen.availWidth;
	}
	// bookName: function () {
	// 	return Session.get('currentBookName'); 
	// },
	// chapterSN: function () {
	// 	return Session.get('currentChapter');
	// },
	// selectedBookName: function () {
	// 	return Session.get('selectedBookName');
	// }
});

Template.download.events({
	'click button': function () {
		Router.go('menu');
	}
});