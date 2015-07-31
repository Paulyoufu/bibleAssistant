Template.systemSettings.rendered = function()
{
    if(Session.get('automaticallyDL')==true){
        $("#automaticallyDl_id").prop("checked",true); 
    }
    if(Session.get('fontSize')==true){
        $("#largeFont_id").prop("checked",true);
    }
};

Template.systemSettings.events({
    'click button': function () {
        Router.go('menu');
    },'click #automaticallyDl_id' : function() {
        if($("#automaticallyDl_id").is(':checked')) 
        {
            setAutomaticallyDL("true");
            Session.set('automaticallyDL',true);
            $("#automaticallyDl_id").prop("checked",true); 
        }else{
            setAutomaticallyDL("false");
            Session.set('automaticallyDL',false);
            $("#automaticallyDl_id").prop("checked",false);
        }
    },'click #largeFont_id' : function() {
        if($("#largeFont_id").is(':checked')) 
        {      
            $("p[name='size_Id']").addClass("settingFont");
            Session.set('fontSize',true);
            $("#largeFont_id").prop("checked",true);
            setFontSize("true");
        }else{
            $("p[name='size_Id']").removeClass("settingFont");
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