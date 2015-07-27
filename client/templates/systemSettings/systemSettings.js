Template.systemSettings.rendered = function()
{
    if(Session.get('automaticallyDL')){
        $("#automaticallyDl_id").prop("checked",true); 
    }
    if(Session.get('settingFont')){
        $("#automaticallyDl_id").prop("checked",true); 
    } 
};

Template.systemSettings.events({
    'click button': function () {
        Router.go('menu');
    },'click #automaticallyDl_id' : function() {
        if($("#automaticallyDl_id").is(':checked')) 
        {
            Session.set('automaticallyDL',true);
            setAutomaticallyDL("true");
        }else{
            Session.set('automaticallyDL',false);
            setAutomaticallyDL("false");
        }
    },'click #largeFont_id' : function() {
        if($("#largeFont_id").is(':checked'))
        {
            $("#divBible p").addClass("settingFont");
            Session.set('fontSize',true);
            $("#largeFont_id").prop("checked",true);
            setFontSize("true");
        }else{
            $("#divBible p").removeClass("settingFont");
            Session.set('fontSize',false);
            $("#largeFont_id").prop("checked",false);
            setFontSize("false");
        }
    }
});

Template.systemSettings.helpers({
    booksList: function () {
        getBooksList(Session.get("bibleOldOrNew"));
        return Session.get('booksList');
    },
    bookName: function () {
        return Session.get('currentBookName');
    },
    chapterSN: function () {
        return Session.get('currentChapter');
    }
});