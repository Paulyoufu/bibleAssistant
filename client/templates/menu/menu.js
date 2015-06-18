Template.menu.events({
	'click #btnSearch': function () {

		Router.go('search');

	},'click #btnBookMarks': function () {

		Router.go('bookMarks');

	},'click #btnDownload': function () {

		Router.go('download');

	},'click #btnSystemSettings': function () {

		Router.go('systemSettings');

	},'click #btnDedication': function () {

		Router.go('dedication');

	},'click .title': function () {

       Router.go('bookMenu');

	},'click .pull-left': function () {

       Router.go('menu');
       
	}
});