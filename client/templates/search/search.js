/*Template.serach.events({
	'click button': function () {
		Router.go('menu');
});*/
Template.search.events({
    'click #btnSearchRet': function () {
        Router.go('menu');
    },
    'click #btnRange': function(){
        $("#divbookname").fadeToggle("slow");
    },
    'click #divsearch': function(e)
    {
        $("#divbookname").fadeOut("slow");
        var chapter=$(e.target).text();
        var searchWork=Session.get("searchStr");
        if(chapter=="")
        {
            chapter= $( e.target ).find(".item").text();
            console.log("chapter="+chapter)
        }
        var currBookNames=chapter.replace(/[\d  :]/g,"");
        currBookNames=currBookNames.substr(0,currBookNames.indexOf("&"));
        Session.set("currentBookName",currBookNames);
        chapter=chapter.replace(/[\u4e00-\u9fa5 ]/g,"");
        chapter=chapter.substr(0,chapter.indexOf("&"));
        var arrBookChapSect=new Array();
        arrBookChapSect=chapter.split(":");
        var arrcurrentCount=arrBookChapSect[0];
        var arrcurrentBook=arrBookChapSect[1];
        var arrcurrentChapter=arrBookChapSect[2];
        var arrcurrSection=arrBookChapSect[3];
        Session.set("index",arrcurrSection);
        Session.set('currentBook',arrcurrentBook);
        Session.set('currentChapter',arrcurrentChapter);
        Session.set('currentChapterCount',arrcurrentCount);
        // $("#divsearch .item").empty();
        Router.go('menu');
        Session.set("keyWordBlog",1);
    },
    'click #btnSearchScript': function(event, template){
        IonLoading.show({
            duration: 500,
            backdrop: true
        });
        if($("inpSearchScript").val()!="" &&  $("#inpSearchScript").val().length>0)
        {   var searchType=parseInt(Session.get("searchType"));
            var searchStr=Session.get("searchStr");
            $("#divsearch").empty();
            Session.set("searchStr",$("#inpSearchScript").val());
            SearchGetLection(searchType,$("#inpSearchScript").val());
            $("#divbookname").fadeOut("slow");
        }
    },"click ul li": function(e){
        var typeSearch=$(e.target).find("span").text();
        $("ul li").find(".ion-checkmark-circled").removeClass("ion-checkmark-circled positive");
        $("ul li").find(".ion-checkmark-circled").removeAttr("style");
        $(e.target).find(".item-note").addClass("ion-checkmark-circled positive");
        $(e.target).find(".item-note").attr("style","font-size:120%");
        if(typeSearch==""){
            Session.set("searchType",0);
            Session.set("currBookIndex",parseInt(this.bookID));
        }
        else{
            Session.set("searchType",parseInt(typeSearch));
            console.log(Session.get("searchType"));
        }
        $("#divbookname").fadeOut("slow");

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
