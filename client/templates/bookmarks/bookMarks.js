Session.setDefault("sessSearch","*");
Session.setDefault("time","");
Template.bookMarks.events({
    'click #btnreturn': function () {
        Router.go('menu');
    },'click #btnSearch': function(){
        var searchStr=$("#txtSearch").val();
        if(searchStr.length>0){Session.set("sessSearch",searchStr);
        }
    },"click #btnAll": function(){Session.set("sessSearch","*");}
});
Template.bookMarks.helpers({
    arrBookMark: function(){
        var searchStr=Session.get("sessSearch");
        getBookMarks(searchStr);
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
