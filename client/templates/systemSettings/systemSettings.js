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
            $("#size_Id").addClass("settingFont");
            Session.set('fontSize',true);
            setFontSize("true");

        }else{
            $("#size_Id").removeClass("settingFont");
            Session.set('fontSize',false);
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