Template.download_chapterItem.helpers({

	isDownload: function () {
		findfile(Session.get('selectedBook'), this.chapterSN);
		return Session.get("book" + Session.get('currentBook') + "-" + this.chapterSN);
	}
});
Template.download_chapterItem.events({
 'click button[data-play]':function(){
 	if(Session.get("book" + Session.get('currentBook') + "-" + this.chapterSN) == true)
 	{
 		IonLoading.show({
 			customTemplate: "本章语音已经下载！",
 			duration: 1000
 		});
 	}
 	else
 	{
 		download(Session.get('currentBookName'), Session.get('selectedBook'), this.chapterSN);
 	}

 }
});