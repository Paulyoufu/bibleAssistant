/*Template.serach.events({
	'click button': function () {
		Router.go('menu');
});*/
Template.search.events({
    'click button': function () {
        Router.go('menu');
    },
    'change #select': function(e,t)
    {
      //  console.log($("#selbookname").text()+"  text selected    ");
        console.log($("#selbookname").get(0).selectedIndex+"  index selected    ");

    }
});

Template.search.helpers({
    oldBookName:function(){

            return arrOld;

    },
    newBookName:function(){

        return arrNew;

    },
    bookName: function () {
        return Session.get('currentBookName');
    },
    chapterSN: function () {
        return Session.get('currentChapter');
    }
});


