
Template.ionNavBar.events({
	'click .title:contains("章")': function () {
       Router.go('bookMenu');
	},'click .pull-left:contains("菜单")': function () {
       Router.go('menu');
	}
});
Template.main.helpers({
	lectionList: function () {
		var currentBook = Session.get('currentBook');
		var currentChapter = Session.get('currentChapter');
        var index=Session.get("index");
        getLection(currentBook, currentChapter,index);
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
        Session.set("index",1);
        Session.set("keyWordBlog",2);
        nextChapter();
        BibleScrollTop();
    },
    "click #btnPrev": function(){
        Session.set("index",1);
        Session.set("keyWordBlog",2);
        lastChapter();
    }

})
