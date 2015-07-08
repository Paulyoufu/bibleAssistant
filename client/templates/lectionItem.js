Session.setDefault("currCharpter",1);
Session.setDefault("currBookName","");
Session.setDefault("currSection",1);
Session.setDefault("currLection",null);
Template.lectionItem.events({
    'click .item': function () {
Session.set("currSection",this.sectionSN);
Session.set("currLection",this.lection);
    },
    'click [data-action=showActionSheet]': function (event, template) {
    IonActionSheet.show({
        titleText: Session.get('currentBookName')+" "+Session.get('currentChapter')+"章"+Session.get("currSection"),
        buttons: [
            { text: '  复制经文' },
            { text: '  加入书签' },
        ],
        text:[{text:''}],
        cancelText: '取消',
        cancel: function() {
            console.log('Cancelled!');
        },
        buttonClicked: function(index) {
            if (index === 0) {
                var text = Session.get("currLection");
               if(text==null){ return;}
                cordova.plugins.clipboard.copy(text);
            }
            if (index === 1) {
                console.log('book!');
                IonPopup.prompt({
                    title: Session.get('currentBookName')+" "+Session.get('currentChapter')+"章"+Session.get("currSection"),
                    template: '书签名称：',
                    okText: '确定',cancelText:"取消",
                    inputType: 'text',
                    inputPlaceholder: '书签',
                    onOk: function() {
                        if($("input[name='prompt']").val()!="" && $("input[name='prompt']").val().length<7)
                        {
                            var d=new Date();
                            var day=d.getDate();
                            var month=d.getMonth() + 1;
                            var year=d.getFullYear();
                            var timer= year+"-"+month+"-"+day+" "+ d.getHours()+ d.getMinutes()+ d.getSeconds();
                          var booknames=Session.get('currentBookName')+" "+Session.get('currentChapter')+":"+Session.get("currSection");
                           var currbook=Session.get('currentBook');
                            var currchapter=Session.get("currentChapter");
                            var currchapterCount=Session.get('currentChapterCount');
                           // console.log(currbook,currchapter+"||||||||||||currbook currchapter");
                            setBookMarks(booknames,$("input[name='prompt']").val(),timer,currbook,currchapter,currchapterCount);
                            getBookMarks("*");
                        }
                        else
                        {
                            $("input[name='prompt']").focus();
                        }
                    },
                    onCancel: function() {
                    }})

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