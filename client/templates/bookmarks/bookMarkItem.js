
Template.temBookmarkItem.events(
    {
        "click #aEditBookName": function()
        {
            Session.set("time",this.objbookmarkTime);
            IonPopup.prompt({
                title: Session.get('currentBookName')+" "+Session.get('currentChapter')+"章"+Session.get("currSection"),
                template: '修改书签名称：',
                okText: '确定',cancelText:"取消",
                inputType: 'text',
                inputPlaceholder: '书签名称不能超过6个字符',
                onOk: function() {
                    if($("input[name='prompt']").val()!="" && $("input[name='prompt']").val().length<7)
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
        "click .item span[name='goto']": function()
        {
            Session.set("keyWordBlog",1);
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

        }}
)