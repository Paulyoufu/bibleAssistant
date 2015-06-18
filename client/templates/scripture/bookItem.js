/**
 * Created by paul on 15/6/16.
Template.bookItem.events({
    'click': function () {

        Session.set('selectedBook', this.bookSN);
        Session.set('selectedChapterCount', this.chapterCount);
        Session.set('selectedBookName', this.fullName);

        Router.go('chaptersMenu');
    }
});
*/

Session.setDefault("bibleOldOrNew",0);
Template.bookMenu.helpers({
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
Template.bookMenu.events({
    "click #old": function(){
        // getBooksList(0);
        // funBookList(0);
        //  console.log("0000000");
        $("#divBookLists").scrollTop($("div div:eq(0)").position().top);
        Session.set("bibleOldOrNew",0);
        $("#new").removeClass("chooseOrAndNew");
        $("#new").addClass("chooseOrAndNewDefault");
        $("#old").removeClass("chooseOrAndNewDefault");
        $("#old").addClass("chooseOrAndNew");
        $("#old").attr("disabled","disabled"); // 禁用
        $("#new").removeAttr("disabled"); // 启用

    },
    "click #new": function(){
        //funBookList(1);
        console.log("1111112221");
        $("#divBookLists").scrollTop($("div div:eq(0)").position().top);
        Session.set("bibleOldOrNew",1);
        $("#old").removeClass("chooseOrAndNew");
        $("#old").addClass("chooseOrAndNewDefault");
        $("#new").removeClass("chooseOrAndNewDefault");
        $("#new").addClass("chooseOrAndNew");
        $("#new").attr("disabled","disabled"); // 禁用
        $("#old").removeAttr("disabled"); // 启用
    },
    'click .item': function () {

        Session.set('selectedBook', this.bookSN);
        Session.set('selectedChapterCount', this.chapterCount);
        Session.set('selectedBookName', this.fullName);

        Router.go('chaptersMenu');
    }
});
