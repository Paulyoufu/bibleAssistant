Template.chapterItem.events({
<<<<<<< HEAD
    'click': function () {
        Session.set('currentBook', Session.get('selectedBook'));
        Session.set('currentChapter', this.chapterSN);
        Session.set('currentChapterCount', Session.get('selectedChapterCount'));
        Session.set('currentBookName', Session.get('selectedBookName'));

        Session.set("keyWordBlog",2);


        abcGlobal.media.initAudio();
        if(Session.get('isPlaying')){
            abcGlobal.media.playAudio();
        }
=======
	'click': function () {
		
		Session.set('currentBook', Session.get('selectedBook'));
		Session.set('currentChapter', this.chapterSN);
		Session.set('currentChapterCount', Session.get('selectedChapterCount'));
		Session.set('currentBookName', Session.get('selectedBookName'));

		abcGlobal.media.initAudio();
		if(Session.get('isPlaying')){
			//播放
			abcGlobal.media.playAudio();
		}

>>>>>>> origin/caiyufan
        CharpterScrollTop();
        BibleScrollTop();

        // 记录本次读经位置
		setSetting(Session.get('currentBook'), Session.get('currentChapter'));
	}
});