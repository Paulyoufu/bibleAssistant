Session.setDefault("currCharpter",1);
Session.setDefault("currBookName","");
Session.setDefault("currSection",1);
Session.setDefault("currLection",null);
Template.lectionItem.events({
    'click .item': function () {
        console.log(Session.get('currentBookName')+"-----------------bookname");
        console.log(Session.get('currentChapter')+"-----------------currentChapter");
        console.log(this.sectionSN+"------------sectionSn");
        console.log(Session.get('currentChapter')+"------------lection");
        Session.set("currLection",this.lection);

    },

    'click [data-action=showActionSheet]': function (event, template) {
        IonActionSheet.show({
            titleText:Session.get('currentBookName')+" "+Session.get('currentChapter')+"章"+Session.get("currSection")
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
                    var bibleContent=Session.get("currLection");

                    if(bibleContent==null){return;}
                    else{// alert("this is  dddddda"+Session.get("currLection"));
                        cordova.plugins.clipboard.copy(bibleContent);

                        cordova.plugins.clipboard.paste(function (bibleContent) {
                          //  alert(bibleContent);
                            console.log(bibleContent);
                        });
                        console.log('Shared!');
                        console.log(this.lection + "lection");
                    }
                }
                if (index === 1) {
                    console.log('book!');
                    IonPopup.prompt({
                        title: Session.get('currentBookName')+" "+Session.get('currentChapter')+"章"+Session.get("currSection"),
                        template: '书签名称',
                        okText: '确定',
                        cancelText:"取消",
                        inputType: 'text',
                        inputPlaceholder: '请输入书签名称'
                    });
                    //var getBookmarker=window.prompt("书签名称");
                   // if(getBookmarker!=null && getBookmarker=="")
                   // {
                    //    console.log(getBookmarker+"getboookdddddddddddddd");
                   // }
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