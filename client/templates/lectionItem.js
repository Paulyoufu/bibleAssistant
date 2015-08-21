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
        titleText: Session.get('currentBookName')+" "+Session.get('currentChapter')+"章"+Session.get("currSection")+"节",
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
                var text = Session.get('currentBookName')+" "+Session.get('currentChapter')+"章"+Session.get("currSection")+" "+Session.get("currLection");
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
                    inputPlaceholder: '书签名称不能超过6个字符',
                    onOk: function() {
                        if($("input[name='prompt']").val().length<7 || $("input[name='prompt']").val()=="")
                        { var search=$("input[name='prompt']").val();
                            if( $("input[name='prompt']").val()==""){ search="空";}
                            var d=new Date();
                            var day=d.getDate();
                            var month=d.getMonth() + 1;
                            var year=d.getFullYear();
                            var timer= year+"-"+month+"-"+day+" "+ d.getHours()+ d.getMinutes()+ d.getSeconds();
                          var booknames=Session.get('currentBookName')+" "+Session.get('currentChapter')+":"+Session.get("currSection");
                           var currbook=Session.get('currentBook');
                            var currchapter=Session.get("currentChapter");
                            var currchapterCount=Session.get('currentChapterCount');
                            setBookMarks(booknames,search,timer,currbook,currchapter,currchapterCount);
                            getBookMarks("*");
                        }
                        else
                        {
                            $("input[name='prompt']").focus();
                            IonLoading.show({
                                customTemplate: '<h4>提示信息</h4><p style="font-size:20px;">书签名称超过了6个字符！</p>',
                                duration: 2000
                            });
                        }
                    },
                    onCancel: function() {
                    }})
            }
            return true;
        },
        destructiveButtonClicked: function() {
            return true;
        }
    });}
});