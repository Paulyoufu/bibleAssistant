Template.systemSettings.events({
	'click button': function () {
		Router.go('menu');
	}
});
Template.systemSettings.helpers({
    booksList: function () {
        getBooksList(Session.get("bibleOldOrNew"));

        return Session.get('booksList');
    },
    bookName: function () {
        return Session.get('currentBookName');
    },
    chapterSN: function () {
        return Session.get('currentChapter');
    }
});