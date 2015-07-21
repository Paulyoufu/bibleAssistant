
Template.ionNavBar.events({
	'click .title:contains("章")': function () {
       Router.go('bookMenu');
	},'click .pull-left:contains("菜单")': function () {
$(".menu-content").animate({left:'0px'});
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
    'swiperight p.item': function(event) {

        event.stopPropagation();
        Session.set("keyWordBlog",2);
        nextChapter();
       $("body").removeClass("snapjs-left");
    },
    'swipeleft p.item': function(event) {

        event.stopPropagation();
        Session.set("keyWordBlog",2);
        lastChapter();
       $("body").removeClass("snapjs-left");
    }

})
