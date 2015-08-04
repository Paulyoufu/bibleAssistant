Template.download_chapterItem.helpers({

	isDownload: function () {
		findfile(Session.get('selectedBook'), this.chapterSN);
		return Session.get("book" + Session.get('currentBook') + "-" + this.chapterSN);
	}
});
Template.download_chapterItem.events({
	//播放功能
	// 'click': function () {
		
	// 	Session.set('currentBook', Session.get('selectedBook'));
	// 	Session.set('currentChapter', this.chapterSN);
	// 	Session.set('currentChapterCount', Session.get('selectedChapterCount'));
	// 	Session.set('currentBookName', Session.get('selectedBookName'));

	// 	abcGlobal.media.initAudio();
	// 	if(Session.get('isPlaying')){
	// 		//播放
	// 		abcGlobal.media.playAudio();	
	// 	}

	// 	CharpterScrollTop();
	// 	BibleScrollTop();

 //        // 记录本次读经位置

 //        setSetting(Session.get('currentBook'), Session.get('currentChapter'));
 //    },
    'click button[data-play]':function(){
    	download(Session.get('currentBookName'), Session.get('selectedBook'), this.chapterSN);
    	alert('下载成功');
    },
    'click .lookup':function (){
    	//
    	alert(Session.get('selectedBook') + "-" + this.chapterSN);
    }
});