/*Template.serach.events({
	'click button': function () {
		Router.go('menu');
});*/
Template.search.rendered=function(){}
Template.search.events({
    'click #btnSearchRet': function () {
        Router.go('menu');
    },
    'click #btnRange': function(){
        $("#backGrand").fadeToggle("slow");
        $("#selbookname").slideToggle("slow");
    },
    'click .item': function(e)
    {
        $("#selbookname").slideUp("slow");
        $("#backGrand").fadeOut("slow");
        var chapter=$(e.target).text();
        var searchWork=Session.get("searchStr");
        if(chapter=="")
        {//console.log(e.currentTarget);
            chapter= $( e.target ).find(".item").text();
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
        Session.set("keyWordBlog",1);
    },
    'click #btnSearchScript': function(){

        //  if(searchType===""){searchType=0; console.log(searchStr+"   empty  searchType");}
        if($("inpSearchScript").val()!="" &&  $("#inpSearchScript").val().length>0)
        {   var searchType=parseInt(Session.get("searchType"));
            var searchStr=Session.get("searchStr");
            $("#divsearch").empty();
            Session.set("searchStr",$("#inpSearchScript").val());
            SearchGetLection(searchType,$("#inpSearchScript").val());
        }
    },"click #selbookname li": function(e){
        var typeSearch=$(e.target).find("span").text();
        $("ul li").find(".ion-checkmark-circled").removeClass("ion-checkmark-circled positive");//font-size:x-large
        $("ul li").find(".ion-checkmark-circled").removeAttr("style");
        $(e.target).find(".item-note").addClass("ion-checkmark-circled positive");
        $(e.target).find(".item-note").attr("style","font-size:x-large")
        if(typeSearch==""){
            Session.set("searchType",0);
            Session.set("currBookIndex",parseInt(this.bookID));
            console.log(  Session.get("searchType"), Session.get("currBookIndex"),"  ------  searType currBookIndex ------");
        }
        else{
            Session.set("searchType",parseInt(typeSearch));
            console.log(Session.get("searchType"));
        }
        $("#slideToggle").slideUp("slow");
        $("#backGrand").fadeOut("slow");

    }
});
Template.search.helpers({
    oldBookName:function(){
        return arrOld;
    },
    newBookName:function(){
        return arrNew;
    }, searchlectionList: function () {

    },
    bookName: function () {
        return Session.get('currentBookName');
    },
    chapterSN: function () {
        return Session.get('currentChapter');
    }
});



