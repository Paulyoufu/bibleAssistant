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
        Session.set("bibleOldOrNew",0);

    },
    "click #new": function(){
        //funBookList(1);
               console.log("1111111");
        Session.set("bibleOldOrNew",1);

    }
});
/*var funBookList=function(paraＯldOrNew){
    console.log(paraＯldOrNew+"  paraold and new")
    getBooksList(paraＯldOrNew);
    return Session.get('booksList');

}*/
