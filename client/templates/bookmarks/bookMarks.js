Session.setDefault("sessSearch","*");
Session.setDefault("time","");
var arrsum=[];
Template.bookMarks.events({
    'click #btnreturn': function () {
        Router.go('menu');
    },'click #btnSearch': function(){
        var searchStr=$("#txtSearch").val();
        if(searchStr.length>0){Session.set("sessSearch",searchStr);
        }
    },"click #btnAll": function(){ $("label.checkbox").toggle();
        //  Session.set("sessSearch","*");
        $("input[name='key']").removeAttr("checked");
    },"click #delall": function(){
        //  Session.set("time",this.objbookmarkTime);
        //var timer= Session.get("time");
        //var booknames=Session.get('currentBookName')+" "+Session.get('currentChapter')+":"+Session.get("currSection");
        //delBookMarks(booknames,timer);
        console.log("----------------------------------------");
        Session.set("time",this.objbookmarkTime);
        var timer=Session.get("time");
        $("input[name='key']:checked").each(function(){arrsum.push($(this).val());

            console.log("arrsum="+arrsum);
            console.log("this="+$(this).val());
        });

        console.log("arrsum="+arrsum);

        delBookMarks(arrsum);//

    },"click #displayall": function(){ console.log("dispaly=")
        Session.set("sessSearch","*");
    }
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
