Template.chapterItem.events({
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
        CharpterScrollTop();
        BibleScrollTop();
        setSetting(Session.get('currentBook'), Session.get('currentChapter'));
    }
});