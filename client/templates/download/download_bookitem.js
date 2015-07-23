Template.download_bookItem.events({
	'click': function () {
		
		Session.set('selectedBook', this.bookSN);
		Session.set('selectedChapterCount', this.chapterCount);
		//动态显示总章数
		Session.set('downloadChapterCount', this.chapterCount);
		//动态显示书卷
		Session.set('downloadBookName', this.fullName);
		Session.set('selectedBookName', this.fullName);
		//alert(Session.get('selectedBook'));
		//Router.go('chaptersMenu');
	},
	'click #form1': function () {
		var radio = document.getElementsByName("form1");
		var radioLength = radio.length;
		for(var i = 0;i < radioLength;i++)
		{
			if(radio[i].checked)
			{
				var radioValue = radio[i].value;
				alert(radioValue);
			}
		}
	},
	'click .item':function(){

},

});


