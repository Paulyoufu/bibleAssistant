/*Template.serach.events({
	'click button': function () {
		Router.go('menu');
});*/
Template.search.events({
    'click button': function () {
        Router.go('menu');
    }
});
Template.search.helpers({
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


