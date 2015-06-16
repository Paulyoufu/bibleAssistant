/**
 * Created by paul on 15/6/16.
 */
Template.bookItem.events({
    'click': function () {

        Session.set('selectedBook', this.bookSN);
        Session.set('selectedChapterCount', this.chapterCount);
        Session.set('selectedBookName', this.fullName);

        Router.go('chaptersMenu');
    }
});