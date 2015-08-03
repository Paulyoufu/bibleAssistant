/**
 * Created by paul on 15/5/27.
 */
Session.setDefault('sectionIndex', null);        //当前播放的section索引
Session.setDefault("sumSectionHeight",0);
Session.setDefault("scrollPosition",0);
//Session.setDefault("shortName","创");
//Session.setDefault("FullName","创世记");
BibleScroll=function(sectionIndex){

	if(sectionIndex == Session.get('sectionIndex')){//scrollPosition=0;
		return;
	}
 //   console.log(sectionIndex+"____________ index_________")
	Session.set('sectionIndex', sectionIndex);
        if(Session.get("sumSectionHeight") < window.screen.height/2-50)
        {
            Session.set("sumSectionHeight",Session.get("sumSectionHeight") + $("#divBible p:eq(" + sectionIndex + ")").outerHeight(true));
            $("#divBible p").removeClass("blue");
            $("#divBible p:eq(" + sectionIndex + ")").addClass("blue");
        }
        else{
           Session.set("scrollPosition", Session.get("scrollPosition")+$("#divBible p:eq(" + sectionIndex + ")").outerHeight());console.log($("#divBible p:eq(" + sectionIndex + ")").outerHeight()+"    hhhhhhhhhhhhhhhhhhhh");
            $("#divBible").scrollTop(Session.get("scrollPosition")) ;
            $("div p").removeClass("blue");
            $("#divBible p:eq(" + sectionIndex + ")").addClass("blue");

        }
}
BibleScrollTop=function(){Session.set("index",1);
  //  $("#divBible").scrollTop(60);
   // $("#divBible").scrollTop($("div p:eq(1)").position().top);
  //  Session.set("sumSectionHeight",0);
   // Session.set("scrollPosition",0);
}
CharpterScrollTop=function(){
    $("#charpterList").scrollTop($("div div:eq(0)").position().top);
}
