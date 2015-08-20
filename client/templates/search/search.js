/*Template.serach.events({
	'click button': function () {
		Router.go('menu');
});*/
browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/)||u.indexOf('iPad') > -1, //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}




Template.search.events({
    'click #btnSearchRet': function () {
        Router.go('menu');
    },
    'click #btnRange': function(){
        if(browser.versions.iPhone){$("#divbookname").addClass("phonewidth");}
        else if(browser.versions.iPad){$("#divbookname").addClass("padwidth");}
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
        getLection(arrcurrentBook,arrcurrentChapter,arrcurrSection);
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
