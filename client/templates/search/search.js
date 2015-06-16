/*Template.serach.events({
	'click button': function () {
		Router.go('menu');
});*/
Session.setDefault("bibleOldOrNew",0);
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
Template.search.events({
    "click #old": function(){
       // getBooksList(0);
       // funBookList(0);
      //  console.log("0000000");
        $("#divBookLists").scrollTop($("div div:eq(0)").position().top);
        Session.set("bibleOldOrNew",0);
        $("#new").removeClass("chooseOrAndNew");
        $("#old").addClass("chooseOrAndNew");


    },
    "click #new": function(){
        //funBookList(1);
               console.log("1111112221");
        $("#divBookLists").scrollTop($("div div:eq(0)").position().top);
        Session.set("bibleOldOrNew",1);
        $("#old").removeClass("chooseOrAndNew");
        $("#new").addClass("chooseOrAndNew");

    }
});
/*var funBookList=function(paraＯldOrNew){
    console.log(paraＯldOrNew+"  paraold and new")
    getBooksList(paraＯldOrNew);
    return Session.get('booksList');

}*/
