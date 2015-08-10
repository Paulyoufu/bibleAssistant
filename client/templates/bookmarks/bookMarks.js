Session.setDefault("sessSearch","*");
Session.setDefault("time","");
var arrsum=[];
Template.bookMarks.rendered=function(){$(".bar-footer").hide();}
Template.bookMarks.events({
    'click #btnreturn': function () {
        Router.go('menu');
        Session.set("sessSearch","*");
    },'click #btnSearch': function(){
        var searchStr=$("#txtSearch").val();
        if(searchStr.length>0){Session.set("sessSearch",searchStr);
        }
        else if($("#txtSearch").val()==""){Session.set("sessSearch",searchStr);}
    },"click #btnAll": function(){
        if($(".bar-footer").is(":hidden")){
            $(".bar-footer").show();    //如果元素为隐藏,则将它显现
            $("label.checkbox").show();    //如果元素为隐藏,则将它显现
        }else{
            $(".bar-footer").hide();     //如果元素为显现,则将其隐藏
            $("label.checkbox").hide();     //如果元素为显现,则将其隐藏
        }
        $("input[name='key']").removeAttr("checked");
    },"click #delall": function(){
        Session.set("time",this.objbookmarkTime);
        var timer=Session.get("time");
        $("input[name='key']:checked").each(function(){
            arrsum.push($(this).val());
        });
       if(arrsum.length)
       { delBookMarks(arrsum);}
        else{loading("提示信息","您没有选取任何记录！");}
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
