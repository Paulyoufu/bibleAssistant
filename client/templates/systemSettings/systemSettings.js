Template.systemSettings.events({
	'click button': function () {
		Router.go('menu');
<<<<<<< HEAD
	},'click .ad_class' : function() {
        if (document.getElementById('ad_id1').checked) {
            Session.set('automaticallyDL',true);
            setAutomaticallyDL("true");

        }
        else {
            Session.set('automaticallyDL',false);
            setAutomaticallyDL("false");
        }
        
    },'click .fs_class' : function() {
       if (document.getElementById('fs_id1').checked) {
            Session.set('fontSize',true);
            setFontSize("true");
            document.getElementById('divBible').style.fontSize = "15";
        }
        else {
            Session.set('fontSize',false);
            setFontSize("false");
            document.getElementById('divBible').style.fontSize = "11";
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
=======
	}
>>>>>>> origin/caiyufan
});