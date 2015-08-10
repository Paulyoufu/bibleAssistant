 arrOld=[
 {bookID:1,bookName:'创世记',charpterCount:'50'},
 {bookID:2,bookName:'出埃及记',charpterCount:'40'},
 {bookID:3,bookName:'利未记',charpterCount:'27'},
 {bookID:4,bookName:'民数记',charpterCount:'36'},
 {bookID:5,bookName:'申命记',charpterCount:'34'},
 {bookID:6,bookName:'约书亚记',charpterCount:'24'},
 {bookID:7,bookName:'士师记',charpterCount:'21'},
 {bookID:8,bookName:'路得记',charpterCount:'4'},
 {bookID:9,bookName:'撒母耳记上',charpterCount:'31'},
 {bookID:10,bookName:'撒母耳记下',charpterCount:'24'},
 {bookID:11,bookName:'列王纪上',charpterCount:'22'},
 {bookID:12,bookName:'列王纪下',charpterCount:'25'},
 {bookID:13,bookName:'历代志上',charpterCount:'29'},
 {bookID:14,bookName:'历代志下',charpterCount:'36'},
 {bookID:15,bookName:'以斯拉记',charpterCount:'10'},
 {bookID:16,bookName:'尼希米记',charpterCount:'13'},
 {bookID:17,bookName:'以斯贴记',charpterCount:'10'},
 {bookID:18,bookName:'约伯记',charpterCount:'42'},
 {bookID:19,bookName:'诗篇',charpterCount:'150'},
 {bookID:20,bookName:'箴言',charpterCount:'31'},
 {bookID:21,bookName:'传道书',charpterCount:'12'},
 {bookID:22,bookName:'雅歌',charpterCount:'8'},
 {bookID:23,bookName:'以赛亚书',charpterCount:'66'},
 {bookID:24,bookName:'耶利米书',charpterCount:'52'},
 {bookID:25,bookName:'耶利米哀歌',charpterCount:'5'},
 {bookID:26,bookName:'以西结书',charpterCount:'48'},
 {bookID:27,bookName:'但以理书',charpterCount:'12'},
 {bookID:28,bookName:'何西阿书',charpterCount:'14'},
 {bookID:29,bookName:'约珥书',charpterCount:'3'},
 {bookID:30,bookName:'阿摩司书',charpterCount:'9'},
 {bookID:31,bookName:'俄巴底亚书',charpterCount:'1'},
 {bookID:32,bookName:'约拿书',charpterCount:'4'},
 {bookID:33,bookName:'弥迦书',charpterCount:'7'},
 {bookID:34,bookName:'那鸿书',charpterCount:'3'},
 {bookID:35,bookName:'哈巴谷书',charpterCount:'3'},
 {bookID:36,bookName:'西番雅书',charpterCount:'3'},
 {bookID:37,bookName:'哈该书',charpterCount:'2'},
 {bookID:38,bookName:'撒迦利亚书',charpterCount:'14'},
 {bookID:39,bookName:'玛拉基书',charpterCount:'4'}
 ];
 arrNew=[
 {bookID:40,bookName:'马太福音',charpterCount:'28'},
 {bookID:41,bookName:'马可福音',charpterCount:'16'},
 {bookID:42,bookName:'路加福音',charpterCount:'24'},
 {bookID:43,bookName:'约翰福音',charpterCount:'21'},
 {bookID:44,bookName:'使徒行传',charpterCount:'28'},
 {bookID:45,bookName:'罗马书',charpterCount:'16'},
 {bookID:46,bookName:'哥林多前书',charpterCount:'16'},
 {bookID:47,bookName:'哥林多后书',charpterCount:'13'},
 {bookID:48,bookName:'加拉太书',charpterCount:'6'},
 {bookID:49,bookName:'以弗所书',charpterCount:'6'},
 {bookID:50,bookName:'腌立比书',charpterCount:'4'},
 {bookID:51,bookName:'歌罗西书',charpterCount:'4'},
 {bookID:52,bookName:'帖撒罗尼迦前书',charpterCount:'5'},
 {bookID:53,bookName:'帖撒罗尼迦后书',charpterCount:'3'},
 {bookID:54,bookName:'提摩太前书',charpterCount:'6'},
 {bookID:55,bookName:'提摩太后书',charpterCount:'4'},
 {bookID:56,bookName:'提多书',charpterCount:'3'},
 {bookID:57,bookName:'腌利门书',charpterCount:'1'},
 {bookID:58,bookName:'希伯来书',charpterCount:'13'},
 {bookID:59,bookName:'雅各书',charpterCount:'5'},
 {bookID:60,bookName:'彼得前书',charpterCount:'5'},
 {bookID:61,bookName:'彼得后书',charpterCount:'3'},
 {bookID:62,bookName:'约翰壹书',charpterCount:'5'},
 {bookID:63,bookName:'约翰贰书',charpterCount:'1'},
 {bookID:64,bookName:'约翰叁书',charpterCount:'1'},
 {bookID:65,bookName:'犹大书',charpterCount:'1'},
 {bookID:66,bookName:'启示录',charpterCount:'22'}
 ];
//一进来就开始运行
Template.downloads.rendered = function () {

    initFileSystem();
};      

Template.downloads.helpers({
    booksList: function () {
        return Session.get('booksList');
    },
    bookName: function () {
        return Session.get('currentBookName'); 
    },
    chapterSN: function () {
        return Session.get('currentChapter');
    },
    chapters: function () {
        var currentChapterCount = Session.get('selectedChapterCount');
        var chapters = [];

        for (var i = 0; i < currentChapterCount; i++) {
            var chapterItem = {};
            chapterItem.chapterSN = i + 1;
            chapters.push(chapterItem);
        };

        return chapters;
    },
    availWidth: function () {
        return window.screen.availWidth;
    },
    //书卷名
    downloadbookName:function() {
        return Session.get('downloadBookName'); 
    },
    //总章节
    chapterCount: function() {
        return Session.get('downloadChapterCount');
    }
    // bookName: function () {
    //  return Session.get('currentBookName'); 
    // },
    // chapterSN: function () {
    //  return Session.get('currentChapter');
    // },
    // selectedBookName: function () {
    //  return Session.get('selectedBookName');
    // }
});
// volumeSN 书卷名 bookSN 书卷号 chapterSN 章号
Template.downloads.events({
    'click .pull-left': function () {
        Router.go('menu');
    },
    //旧约语音下载
    'click .oldTestament':function () {
        Session.set('downloadBookName', '旧约');
        Session.set('downloadChapterCount', 929);
    },
//新约语音下载
'click .newTestament':function () {
    Session.set('downloadBookName', '新约');
    Session.set('downloadChapterCount', 260);

},
'click .allDownload':function () {
    if (Session.get('downloadBookName') == "旧约") {
         //提示用户是否下载全部旧约语音？
         IonPopup.confirm({
            title: '提示信息',
            template: '是否下载旧约全部语音？',
            okText: '确定',
            cancelText:"取消",   
            onOk: function() {
                console.log('Confirmed');
            //alert("选择了是");
            for(var i = 0; i < arrOld.length; i++)
            {
            // arrOld[i].charpterCount 总章
            for(var j = 0; j <arrOld[i].charpterCount; j++)
            {
                var volumeSN = arrOld[i].bookName;
                var bookSN = arrOld[i].bookID;
                var chapterSN = j + 1;
                //downloads(volumeSN, bookSN, chapterSN, j);
                alert(arrOld[i].bookName + "-" + bookSN + "-" + chapterSN);
            };  
        };
    },
    onCancel: function() {
        console.log('Cancelled');
    },
});
     } 
     if(Session.get('downloadBookName') == "新约"){
        //alert(Session.get('downloadBookName') + "-新约");
         //提示用户是否下载全部新约语音？
         IonPopup.confirm({
            title: '提示信息',
            template: '是否下载新约全部语音？',
            okText: '确定',
            cancelText:"取消",   
            onOk: function() {
                console.log('Confirmed');
            //alert("选择了是");
            for(var i = 0; i < arrNew.length; i++)
            {
            // arrOld[i].charpterCount 总章
            for(var j = 0; j <arrNew[i].charpterCount; j++)
            {
                var volumeSN = arrNew[i].bookName; //书卷
                var bookSN = arrNew[i].bookID;      //书卷ID
                var chapterSN = j + 1;              //章节
                //downloads(volumeSN, bookSN, chapterSN, j);
                alert(arrNew[i].bookName + "-" + bookSN + "-" + chapterSN);
            }; 
        };
    },
    onCancel: function() {
        console.log('Cancelled');
    },
});
     }
     //下载书卷
     if(Session.get('downloadBookName') != "旧约" && Session.get('downloadBookName') != "新约"){
        //alert(Session.get('downloadBookName'));   
        IonPopup.confirm({
            title: '提示信息',
            template: '是否下载' + Session.get('downloadBookName') + '全部语音？',
            okText: '确定',
            cancelText:"取消",   
            onOk: function() {
                console.log('Confirmed');
            //alert("选择了是");
            for(var i = 0;i<Session.get('selectedChapterCount');i++)
            {
                var chapterSN = i + 1;
                //alert(Session.get('selectedBookName') + "-" + Session.get('selectedBook') + "-" + chapterSN);
                downloads(Session.get('selectedBookName'), Session.get('selectedBook'), chapterSN, i, 'download');

            };
        },
        onCancel: function() {
            console.log('Cancelled');
        //alert("选择了否");
    },
});
    }
},
// //动态显示总章数
//         Session.set('downloadChapterCount', this.chapterCount);
//         //动态显示书卷
//         Session.set('downloadBookName', this.fullName);
//删除文件
'click .allDelete': function () {

    IonPopup.confirm({
        title: '提示信息',
        template: '是否删除' + Session.get('downloadBookName') + '全部语音？',
        okText: '确定',
        cancelText:"取消",   
        onOk: function() {
            console.log('Confirmed');
            //alert("选择了是");
            for(var i = 0;i<Session.get('selectedChapterCount');i++)
            {
                var chapterSN = i + 1;
                fs.root.getFile("voice/" + Session.get('selectedBook') + "-" + chapterSN + ".mp3", {}, function(fileEntry) {

                    fileEntry.remove(function() {
            //alert('Directory removed.');
            //alert('已删除' + Session.get('downloadBookName') + "第" + chapterSN +"章");
                //遍历根目录 不添加这句必须点进文件夹一次才能看见效果
                readDir(fs.root);
            }, errorHandler);

                }, errorHandler);
            };
            IonLoading.show({
                customTemplate: "<p>已删除 " + Session.get('downloadBookName') + " 全部语音</p>",
                duration: 500
            });
            Router.go('download');
            //alert("已删除" + Session.get('downloadBookName') + "全部语音!")
        },
        onCancel: function() {
            console.log('Cancelled');
        //alert("选择了否");
    },
    
});

}

});