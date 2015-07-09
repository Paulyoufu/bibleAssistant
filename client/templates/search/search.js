/*Template.serach.events({
	'click button': function () {
		Router.go('menu');
});*/
Template.search.events({
    //'click button': function () {
       // Router.go('menu');
   // },
    'click #divsearch p': function(e)
    {
     var chapter=$(e.target).text();
     var searchWork=Session.get("searchStr");
        if(chapter=="")
        {console.log(e.currentTarget);
            chapter= $( e.target ).find(".item").text();
        }
        Session.set("keyWordBlog",1);
        console.log(Session.get("searchStr")+"   searchStr   *****");
        console.log(chapter,typeof(chapter)+"1113332222sssssss");
        var currBookNames=chapter.replace(/[\d  :]/g,"");
        currBookNames=currBookNames.substr(0,currBookNames.indexOf("&"));
        console.log(currBookNames+"   this.is a current BookNames  WAITING");
        Session.set("currentBookName",currBookNames);
         chapter=chapter.replace(/[\u4e00-\u9fa5 ]/g,"");
         chapter=chapter.substr(0,chapter.indexOf("&"));
         console.log(chapter+"     chapter////////////");
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
     //  var currentBook = Session.get('currentBook');
       // getLection(arrcurrentBook, arrcurrentChapter);
       // setSetting(Session.get('currentBook'), Session.get('currentChapter'));
    },
    'change select': function(e,t)
    {
        var currBookINdex=$("#selbookname").get(0).selectedIndex;
        console.log($("#selbookname").get(0).selectedIndex+"  index selected    ");
        if($("#selbookname").get(0).selectedIndex>2)
        {
            currBookINdex=$("#selbookname").get(0).selectedIndex-2;
            Session.set("currBookIndex",currBookINdex);
            $("#selbookname").get(0).selectedIndex=3;
        }
        Session.set("searchType",$("#selbookname").get(0).selectedIndex);
    },
    'click #btnSearchScript': function(){
        var searchType=parseInt(Session.get("searchType"));
        var searchStr=Session.get("searchStr");

      //  if(searchType===""){searchType=0; console.log(searchStr+"   empty  searchType");}
        if($("inpSearchScript").val()!="")
        {
            $("#divsearch").empty();
           Session.set("searchStr",$("#inpSearchScript").val());


            SearchGetLection(searchType,$("#inpSearchScript").val());
        }
    }
});
Template.search.helpers({
    oldBookName:function(){
            return arrOld;
    },
    newBookName:function(){
        return arrNew;
    }, searchlectionList: function () {
       //  var searchType=parseInt(Session.get("searchType"));
       // var searchStr=Session.get("searchStr");
      //  SearchGetLection(searchType,"雅各");
    //    return arrLection;
    },
    bookName: function () {
        return Session.get('currentBookName');
    },
    chapterSN: function () {
        return Session.get('currentChapter');
    }
});


