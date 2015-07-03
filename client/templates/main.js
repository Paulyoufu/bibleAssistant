Template.main.rendered = function()
{
   //
//$("#divBible").scrollTop(160);
    // getBooksList(0);
};

Template.ionNavBar.events({
	'click .title': function () {
       Router.go('bookMenu');
	},'click .pull-left': function () {
       Router.go('menu');
	}
});

Template.main.helpers({
	lectionList: function () {
		var currentBook = Session.get('currentBook');
		var currentChapter = Session.get('currentChapter');

        getLection(currentBook, currentChapter);


        return Session.get('lectionList');
	},
	bookName: function () {
		return Session.get('currentBookName'); 
	},
	chapterSN: function () {
		return Session.get('currentChapter');
	},
	position: function(){
		return Session.get('timeValue');
	},
	section: function(){
		var position = Session.get('timeValue');
		var sectionSN = getCurrSection(position);
		return sectionSN;         
	},
	dur:function(){
		return Session.get('dur');
	}
});
Template.main.events({
    "click #btnNext": function(){
        console.log("next");Session.set("index",1);
        nextChapter();
        BibleScrollTop();
    },
    "click #btnPrev": function(){
        console.log("prev");Session.set("index",1);
        lastChapter();
       // BibleScrollTop();
    }

})
