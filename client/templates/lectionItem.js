Session.setDefault("currCharpter",1);
Session.setDefault("currBookName","");
Session.setDefault("currSection",1);
Template.lectionItem.events({
    'click .item': function () {
   // console.log(Session.get('currentBookName')+"-----------------bookname");
    console.log(Session.get('currentChapter')+"-----------------currentChapter");
    console.log(this.sectionSN+"------------sectionSn");
Session.set("currSection",this.sectionSN);

    },

    'click [data-action=showActionSheet]': function (event, template) {
    IonActionSheet.show({
        titleText: Session.get('currentBookName')+" "+Session.get('currentChapter')+"章"+Session.get("currSection")
        ,
        buttons: [

            { text: '  复制经文' },
            { text: '  加入书签' },
        ],
        text:[{text:''}],
        //   destructiveText: 'Delete复制经文',
        // destructiveText: 'Delete加入书签',

        cancelText: '取消',
        cancel: function() {
            console.log('Cancelled!');
        },
        buttonClicked: function(index) {
            if (index === 0) {
                console.log('Shared!');
                console.log(this.lection+"lection");

            }
            if (index === 1) {
                console.log('book!');
                IonPopup.prompt({
                    title: Session.get('currentBookName')+" "+Session.get('currentChapter')+"章"+Session.get("currSection"),
                    template: '书签名称',
                    okText: '确定',
                    inputType: 'text',
                    inputPlaceholder: '请输入书签名称'
                });
                var getBookmarker=window.prompt("书签名称");
                if(getBookmarker!=null && getBookmarker=="")
                {
                    console.log(getBookmarker+"getboookdddddddddddddd");
                }
            }
            return true;
        },
        destructiveButtonClicked: function() {
            console.log('Destructive Action!');
            console.log(this.lection+"lection");

            return true;
        }
    });}
});