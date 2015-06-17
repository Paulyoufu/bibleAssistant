Template.actionSheet.events({
  'click [data-action=showActionSheet]': function (event, template) {
    IonActionSheet.show({
      titleText: 'ActionSheet Example弹出窗口',
      buttons: [

        { text: '  复制经文' },
        { text: '  加入书签' },
      ],
   //   destructiveText: 'Delete复制经文',
     // destructiveText: 'Delete加入书签',

      cancelText: '取消',
      cancel: function() {
        console.log('Cancelled!');
      },
      buttonClicked: function(index) {
        if (index === 0) {
          console.log('Shared!');
        }
        if (index === 1) {
          console.log('Moved!');
        }
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('Destructive Action!');
        return true;
      }
    });
  }
});
