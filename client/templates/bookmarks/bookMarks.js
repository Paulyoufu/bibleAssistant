Session.setDefault("sessSearch","*");
Session.setDefault("time","");

Template.bookMarks.events({
	'click #btnreturn': function () {
		Router.go('menu');
        console.log("------------------------------setbookmarks");
		//  getBookMarks();

    },'click #btnSearch': function(){
    var searchStr=$("#txtSearch").val();
        if(searchStr.length>0){Session.set("sessSearch",searchStr);
            console.log(Session.get("sessSearch",searchStr)+"this is a click searchstr");
        }
    }
});

Template.bookMarks.helpers({
    arrBookMark: function(){
        console.log("-----------5555555555--------");
       var searchStr=Session.get("sessSearch");
        console.log(searchStr+" this is a helper searchstr")
        console.log(searchStr+" this is a helpers searchstr")
        getBookMarks(searchStr);
    //    console.log(Session.get('sessBookMark')+"----------getbookmarkshelps--------");
        return Session.get('sessBookMark');

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
