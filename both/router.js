Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

Router.map(function() {

  this.route('menu', {path: '/'});//向右滑动弹出菜单

  this.route('bookMenu', {path: '/bookMenu'});
  // this.route('menu', {path: '/menu'});
  this.route("chaptersMenu",{path:"/chaptersMenu"});
  this.route('search', {path: '/search'});

  this.route('bookMarks', {path: '/bookMarks'});
  this.route('download', {path: '/download'});
  this.route('systemSettings', {path: '/systemSettings'});
  this.route('dedication', {path: '/dedication'});
  
});
