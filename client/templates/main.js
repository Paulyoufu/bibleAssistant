Session.setDefault('isPlaying', false);   //当前是否正在播放

Template.main.rendered = function()
{
	// getSystemSetting();
	// if(Session.get('fontSize')){
	// 	//设置大字体
	// 	document.getElementById('divBible').style.fontSize = "15";
	// }else{
	// 	//设置小字体
	// 	document.getElementById('divBible').style.fontSize = "11";
	// }	
};

Template.main.helpers({
	isPlaying: function () {
		return Session.get('isPlaying');
	},
	lectionList: function () {
		var currentBook = Session.get('currentBook');
		var currentChapter = Session.get('currentChapter');
		getLection(currentBook, currentChapter);
		return Session.get('lectionList');
	},
	bookName: function () {
		return Session.get('currentBookName'); 
	},
	chapterSN: function () {
		return Session.get('currentChapter');
	},
	position: function(){
		return Session.get('timeValue');
	}

});


Template.main.events({
	'click button[data-play]': function () {
		//播放
		Session.set('isPlaying', ! Session.get('isPlaying'));
		if(Session.get('isPlaying')){
			abcGlobal.media.playAudio();
			Session.set('lrcStyle',true);
		}else{
			abcGlobal.media.pauseAudio();
			Session.set('lrcStyle',false);
            $("#divBible span").removeClass("blue");
		}
	},'click button[data-skipbackward]': function () {

        BibleScrollTop();
		lastChapter();

		//播放
		abcGlobal.media.initAudio();
		if(Session.get('isPlaying')){
			abcGlobal.media.playAudio();
		}
        // 记录本次读经位置
		setSetting(Session.get('currentBook'), Session.get('currentChapter'));

	},'click button[data-skipforward]': function () {

        BibleScrollTop();
		nextChapter();

		//播放
		abcGlobal.media.initAudio();
		if(Session.get('isPlaying')){
			abcGlobal.media.playAudio();
		}

        // 记录本次读经位置
		setSetting(Session.get('currentBook'), Session.get('currentChapter'));
	},'click .ion-ios-undo': function () {
		alert("重新下载");
	}

});

Template.ionNavBar.events({
	'click .title': function () {
       Router.go('bookMenu');
	},'click .pull-left': function () {
       Router.go('menu');
	},'click #btnVoice': function() {
		Session.set('isPlayView', ! Session.get('isPlayView'));
		if(Session.get('isPlayView')){
			document.getElementById('playerDiv').style.display = "block";
		}else{
			document.getElementById('playerDiv').style.display = "none";
		}
	}
});