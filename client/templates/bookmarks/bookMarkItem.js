Template.temBookmarkItem.rendered=function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
    });
}
Template.temBookmarkItem.events(
    {
        "click #aEditBookName": function()
        {
            Session.set("time",this.objbookmarkTime);
            IonPopup.prompt({
                title: Session.get('currentBookName')+" "+Session.get('currentChapter')+"章"+Session.get("currSection"),
                template: '书签名称：',
                okText: '确定',cancelText:"取消",
                inputType: 'text',
                inputPlaceholder: '书签',
                onOk: function() {
                    if($("input[name='prompt']").val()!="" && $("input[name='prompt']").val().length<7 && $("input[name='prompt']").val().length>0)
                    {
                        var timer= Session.get("time");
                        var booknames=Session.get('currentBookName')+" "+Session.get('currentChapter')+":"+Session.get("currSection");
                        updateBookMarks(booknames,$("input[name='prompt']").val(),timer);
                    }
                    else
                    {
                        $("input[name='prompt']").focus();
                    }
                },
                onCancel: function() {
                }})
        },
        "click #buttonDel:not(.item)": function()
        {
            Session.set("time",this.objbookmarkTime);
            var timer= Session.get("time");
            var booknames=Session.get('currentBookName')+" "+Session.get('currentChapter')+":"+Session.get("currSection");
            delBookMarks(booknames,timer);
        },
        "click .item:not(button)": function()
        { Session.set("keyWordBlog",1);
           var bookname=this.objbookname.replace(/[\d]/g,"");
            bookname=bookname.substr(0,bookname.indexOf(":"));
            Session.set('currentBook',this.objbookid);
            Session.set('currentChapter',this.objchapter);
            Session.set('currentChapterCount',this.objchapterCount);
            Session.set('currentBookName',bookname);
            var currentBook = Session.get('currentBook');
            var currentChapter = Session.get('currentChapter');
            var currindex=this.objbookname;
            currindex=currindex.substr(currindex.indexOf(":")+1);
            Session.set("index",parseInt(currindex));
            getLection(currentBook, currentChapter,currindex);
          //  $("#books .list").empty();
           // Router.go('menu');
           // getLection(currentBook, currentChapter);
           // setSetting(Session.get('currentBook'), Session.get('currentChapter'));
        }
    }
)