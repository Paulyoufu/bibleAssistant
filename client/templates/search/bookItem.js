Template.bookNameItem.events({
	'click': function () {
		
		Session.set('selectedBook', this.bookSN);
		Session.set('selectedChapterCount', this.chapterCount);
		Session.set('selectedBookName', this.fullName);

		Router.go('chaptersMenu');
	}
});