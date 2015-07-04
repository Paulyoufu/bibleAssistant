Session.setDefault('isPlayView', false);   //当前是否正在播放
Template.main.rendered = function()
{
	$('.taskBox').delegate('.taskBoxLinks','mousemove',function(e){		
		var $mouse = e.pageX - $(this).offset().left;
		var $span = Math.round($mouse/22.5)*10;		
		$(this).find('h4').stop().animate({width:$span+'%'},50);		
		$(this).next('span').text($span+'%');
	}).delegate('.taskBoxLinks','mouseleave',function(){
		$(this).find('h4').stop().animate({width:'10%'},50);
		var $mousex = $(this).find('h3').width();
		var $spanx = Math.round($mousex/22.5)*10;
		if($spanx==100){
			$(this).next('span').text('进度完成')	
		}else{
			$(this).next('span').text($spanx+'%');
		}	
	}).delegate('.taskBoxLinks','click',function(e){
		var $mouse = e.pageX - $(this).offset().left;
		var $span = Math.round($mouse/22.5)*10;
		$(this).find('h3').stop().animate({width:$span+'%'},100);
		if($span==100){
			$(this).next('span').text('进度完成')	
		}			
	});		
};

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

Template.main.helpers({
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
	},
	section: function(){
		var position = Session.get('timeValue');
		var sectionSN = getCurrSection(position);
		return sectionSN;         
	},
	dur:function(){
		return Session.get('dur');
	}
});

