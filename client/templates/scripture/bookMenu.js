Template.bookMenu.events({
	'click .title': function () {
       Router.go('bookMenu');
	},'click .pull-left': function () {
       Router.go('menu');
	}
});