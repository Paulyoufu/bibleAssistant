
Session.setDefault("bibleOldOrNew",0);
 arrOld=[
    {bookID:1,bookName:'创世记',charpterCount:'50',shortName:'创'},
    {bookID:2,bookName:'出埃及记',charpterCount:'40',shortName:'出'},
    {bookID:3,bookName:'利未记',charpterCount:'27',shortName:'利'},
    {bookID:4,bookName:'民数记',charpterCount:'36',shortName:'民'},
    {bookID:5,bookName:'申命记',charpterCount:'34',shortName:'申'},
    {bookID:6,bookName:'约书亚记',charpterCount:'24',shortName:'书'},
    {bookID:7,bookName:'士师记',charpterCount:'21',shortName:'士'},
    {bookID:8,bookName:'路得记',charpterCount:'4',shortName:'得'},
    {bookID:9,bookName:'撒母耳记上',charpterCount:'31',shortName:'撒上'},
    {bookID:10,bookName:'撒母耳记下',charpterCount:'24',shortName:'撒下'},
    {bookID:11,bookName:'列王纪上',charpterCount:'22',shortName:'王上'},
    {bookID:12,bookName:'列王纪下',charpterCount:'25',shortName:'王下'},
    {bookID:13,bookName:'历代志上',charpterCount:'29',shortName:'代上'},
    {bookID:14,bookName:'历代志下',charpterCount:'36',shortName:'代下'},
    {bookID:15,bookName:'以斯拉记',charpterCount:'10',shortName:'拉'},
    {bookID:16,bookName:'尼希米记',charpterCount:'13',shortName:'尼'},
    {bookID:17,bookName:'以斯贴记',charpterCount:'10',shortName:'斯'},
    {bookID:18,bookName:'约伯记',charpterCount:'42',shortName:'伯'},
    {bookID:19,bookName:'诗篇',charpterCount:'150',shortName:'诗'},
    {bookID:20,bookName:'箴言',charpterCount:'31',shortName:'箴'},
    {bookID:21,bookName:'传道书',charpterCount:'12',shortName:'传'},
    {bookID:22,bookName:'雅歌',charpterCount:'8',shortName:'歌'},
    {bookID:23,bookName:'以赛亚书',charpterCount:'66',shortName:'赛'},
    {bookID:24,bookName:'耶利米书',charpterCount:'52',shortName:'耶'},
    {bookID:25,bookName:'耶利米哀歌',charpterCount:'5',shortName:'哀'},
    {bookID:26,bookName:'以西结书',charpterCount:'48',shortName:'结'},
    {bookID:27,bookName:'但以理书',charpterCount:'12',shortName:'但'},
    {bookID:28,bookName:'何西阿书',charpterCount:'14',shortName:'何'},
    {bookID:29,bookName:'约珥书',charpterCount:'3',shortName:'珥'},
    {bookID:30,bookName:'阿摩司书',charpterCount:'9',shortName:'摩'},
    {bookID:31,bookName:'俄巴底亚书',charpterCount:'1',shortName:'俄'},
    {bookID:32,bookName:'约拿书',charpterCount:'4',shortName:'拿'},
    {bookID:33,bookName:'弥迦书',charpterCount:'7',shortName:'弥'},
    {bookID:34,bookName:'那鸿书',charpterCount:'3',shortName:'鸿'},
    {bookID:35,bookName:'哈巴谷书',charpterCount:'3',shortName:'哈'},
    {bookID:36,bookName:'西番雅书',charpterCount:'3',shortName:'番'},
    {bookID:37,bookName:'哈该书',charpterCount:'2',shortName:'该'},
    {bookID:38,bookName:'撒迦利亚书',charpterCount:'14',shortName:'亚'},
    {bookID:39,bookName:'玛拉基书',charpterCount:'4',shortName:'玛'}
];
 arrNew=[
    {bookID:40,bookName:'马太福音',charpterCount:'28',shortName:'太'},
    {bookID:41,bookName:'马可福音',charpterCount:'16',shortName:'可'},
    {bookID:42,bookName:'路加福音',charpterCount:'24',shortName:'路'},
    {bookID:43,bookName:'约翰福音',charpterCount:'21',shortName:'约'},
    {bookID:44,bookName:'使徒行传',charpterCount:'28',shortName:'徒'},
    {bookID:45,bookName:'罗马书',charpterCount:'16',shortName:'罗'},
    {bookID:46,bookName:'哥林多前书',charpterCount:'16',shortName:'林前'},
    {bookID:47,bookName:'哥林多后书',charpterCount:'13',shortName:'林后'},
    {bookID:48,bookName:'加拉太书',charpterCount:'6',shortName:'加'},
    {bookID:49,bookName:'以弗所书',charpterCount:'6',shortName:'弗'},
    {bookID:50,bookName:'腓立比书',charpterCount:'4',shortName:'腓'},
    {bookID:51,bookName:'歌罗西书',charpterCount:'4',shortName:'西'},
    {bookID:52,bookName:'帖撒罗尼迦前书',charpterCount:'5',shortName:'帖前'},
    {bookID:53,bookName:'帖撒罗尼迦后书',charpterCount:'3',shortName:'帖后'},
    {bookID:54,bookName:'提摩太前书',charpterCount:'6',shortName:'提前'},
    {bookID:55,bookName:'提摩太后书',charpterCount:'4',shortName:'提后'},
    {bookID:56,bookName:'提多书',charpterCount:'3',shortName:'多'},
    {bookID:57,bookName:'腓利门书',charpterCount:'1',shortName:'门'},
    {bookID:58,bookName:'希伯来书',charpterCount:'13',shortName:'来'},
    {bookID:59,bookName:'雅各书',charpterCount:'5',shortName:'雅'},
    {bookID:60,bookName:'彼得前书',charpterCount:'5',shortName:'彼前'},
    {bookID:61,bookName:'彼得后书',charpterCount:'3',shortName:'彼后'},
    {bookID:62,bookName:'约翰壹书',charpterCount:'5',shortName:'约壹'},
    {bookID:63,bookName:'约翰贰书',charpterCount:'1',shortName:'约贰'},
    {bookID:64,bookName:'约翰叁书',charpterCount:'1',shortName:'约叁'},
    {bookID:65,bookName:'犹大书',charpterCount:'1',shortName:'犹'},
    {bookID:66,bookName:'启示录',charpterCount:'22',shortName:'启'}
];
Template.bookMenu.helpers({
    postBookName:function(){
        if(Session.get("bibleOldOrNew")==0)  { return arrOld;}
        else if(Session.get("bibleOldOrNew")==1) { return arrNew;} },
    bookName: function () {return Session.get('currentBookName');},
    chapterSN: function () {return Session.get('currentChapter'); }
});
Template.bookMenu.events({
    "click #old": function(){
        Session.set("bibleOldOrNew",0);console.log("session======000");
        $("#divBookLists").scrollTop($("div div:eq(0)").position().top);
        Session.set("bibleOldOrNew",0);
        $("#new").removeClass("chooseOrAndNew");
        $("#new").addClass("chooseOrAndNewDefault");
        $("#old").removeClass("chooseOrAndNewDefault");
        $("#old").addClass("chooseOrAndNew");
        $("#old").attr("disabled","disabled"); // 禁用
        $("#new").removeAttr("disabled"); // 启用
    },
    "click #new": function(){
        Session.set("bibleOldOrNew",1); console.log("session======1");
        $("#divBookLists").scrollTop($("div div:eq(0)").position().top);
        Session.set("bibleOldOrNew",1);
        $("#old").removeClass("chooseOrAndNew");
        $("#old").addClass("chooseOrAndNewDefault");
        $("#new").removeClass("chooseOrAndNewDefault");
        $("#new").addClass("chooseOrAndNew");
        $("#new").attr("disabled","disabled"); // 禁用
        $("#old").removeAttr("disabled"); // 启用
    },
    'click .item': function () {
        Session.set('selectedBook', this.bookID);
        Session.set('selectedChapterCount', this.charpterCount);
        Session.set('selectedBookName', this.bookName);
        console.log(Session.get('selectedBookName'));
        Router.go('chaptersMenu');
    }
});