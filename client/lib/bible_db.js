Session.setDefault('booksList', []);            //圣经书卷list
Session.setDefault('lectionList', []);          //经文list
Session.setDefault('sessBookMark', []);          //经文list
Session.setDefault('currentBook', 1);           //当前书卷SN
Session.setDefault('currentBookName', '创世记'); //当前书卷名字
Session.setDefault('currentChapter', 1);        //当前章SN
Session.setDefault('currentChapterCount', 50);  //当前书卷章数
Session.setDefault('chapterCountIndex', null);  //每卷书章数索引
Session.setDefault('bookNameIndex', null);      //每卷书名字索引
Session.setDefault('selectedBook', null);             //padding的书卷SN
Session.setDefault('selectedChapterCount', null);     //padding的书卷章数
Session.setDefault('selectedBookName', null);         //padding的书卷名字
Session.setDefault("index",1);
Session.setDefault("searchType",-1);
Session.setDefault("currBookIndex",1);
Session.setDefault("keyWordBlog",0);


Session.setDefault("automaticallyDL",false);  //自动下载
Session.setDefault("fontSize",false);   //是否开启大号字体


//arrLection =[];
// 获取指定书卷、章的经文列表
// volumeSN 书卷号 chapterSN 章号
getLection = function (volumeSN, chapterSN,index) {
    // 打开数据库

    // var db = window.sqlitePlugin.openDatabase({name: "bible.db", createFromLocation: 1});
    db.transaction(function(tx) {
        //单次查询Bible表
        var strSQL = "select ID as id,  Lection as lection, SoundEnd as soundend  from Bible  where  VolumeSN=" + volumeSN + " and ChapterSN=" + chapterSN + " order by ID;";
        tx.executeSql(strSQL, [],
            function(tx, res) {
                var lectionList =[];
                for(var i=0;i<res.rows.length;i++)
                {
                    var lectionItem = {};
                    lectionItem.sectionSN = i + 1;
                    lectionItem.lection = res.rows.item(i).lection;
                    lectionItem.soundEnd = res.rows.item(i).soundend;
                    lectionList.push(lectionItem);
                }
                //将查询结果存入Session

                Session.set('lectionList', lectionList);

                if(index>=1)
                {    console.log("1111111");
                    $("#divBible").scrollTop(60);
                    if($("#divBible p:eq(0)").position().top>=68)
                    {
                        $("#divBible").scrollTop($("#divBible p:eq("+(index-1)+")").position().top);
                        console.log($("#divBible p:eq("+(index-1)+")").position().top+"22222222");
                    }
                    else
                    {
                        $("#divBible").scrollTop($("#divBible p:eq("+(index-1)+")").position().top+68-$("#divBible p:eq(0)").position().top);
                        console.log($("#divBible p:eq("+(index-1)+")").position().top+"3333333333else");

                    }


                    if(Session.get("keyWordBlog")==1){

                        // console.log(Session.get("keyWordBlog")+"  keywordblog");
                        $("#divBible p").removeClass("scriptColor");
                        $("#divBible p:eq("+(index-1)+")").addClass("scriptColor");
                        Session.set("keyWordBlog",0);
                        //  console.log(Session.get("keyWordBlog")+"  keywordblog is  zero1");
                    }

                    if(Session.get("keyWordBlog")!=0 && Session.get("keyWordBlog")!=1) {
                        $("#divBible p").removeClass("scriptColor");
                    }

                }
                else
                {
                    $("#divBible").scrollTop(60);             console.log("aaaaaaaaaa");

                }
            }, function(e) {
                console.log("ERROR: getLection " + e.message);
            });
    });
}
// 获取书卷目录 sn 章数 书名
// newOrOld 0 旧约 1 新约 2全部
getBooksList = function (newOrOld) {
    // console.log(newOrOld+"oooooooooo");
    if (Session.get('booksList') != [] && Session.get('bookNameIndex') != null && Session.get('chapterCountIndex') != null){
        return;
    }
    // 打开数据库
    // var db = window.sqlitePlugin.openDatabase({name: "bible.db", createFromLocation: 1});
    db.transaction(function(tx) {
        var strWhere = " where NewOrOld=" + newOrOld + ";";
        if (newOrOld === 2) {
            strWhere = "";
        }
        var strSQL = "select SN as sn,  ChapterNumber as chapternumber, FullName as fullname from BibleID" + strWhere;
        tx.executeSql(strSQL, [],
            function(tx, res) {
                var booksList = [];
                var bookNameIndex = {};
                var chapterCountIndex = {};
                for(var i=0;i<res.rows.length;i++)
                {
                    var bookItem = {};
                    bookItem.bookSN = res.rows.item(i).sn;
                    bookItem.chapterCount = res.rows.item(i).chapternumber;
                    bookItem.fullName = res.rows.item(i).fullname;
                    bookNameIndex['bookSN' + res.rows.item(i).sn.toString()] = res.rows.item(i).fullname;
                    chapterCountIndex['bookSN' + res.rows.item(i).sn.toString()] = res.rows.item(i).chapternumber;
                    booksList.push(bookItem);
                }
                //将查询结果存入Session
                Session.set('booksList', booksList);
                Session.set('bookNameIndex', bookNameIndex);
                Session.set('chapterCountIndex', chapterCountIndex);
            }, function(e) {
                console.log("ERROR: getBooksList " + e.message);
            });
    });
}
SearchGetLection = function (searchType,searchStr) {
    db.transaction(function(tx) {
        var strSQL ="select Lection,ChapterSN,VerseSN,VolumeSN from Bible  where";
        var currBookIndex=Session.get("currBookIndex");
        //   console.log(searchType+"     searchType      ");
        switch(searchType)
        {

            case -1:strSQL =strSQL+" Lection like '%"+searchStr+"%' order by ID;";
                break;
            case -2:strSQL =strSQL+" VolumeSN>0 and VolumeSN<40 and Lection like '%"+searchStr+"%' order by ID;";
                break;
            case -3:
                strSQL =strSQL+ "  VolumeSN>39 and VolumeSN<66 and Lection like '%"+searchStr+"%' order by ID;";
                break;
            case 0:

                strSQL =strSQL+" VolumeSN="+currBookIndex+"  and Lection like '%"+searchStr+"%' order by ID;";
                break;
        }
        tx.executeSql(strSQL, [],
            function(tx, res) {
                for(var i=0;i<res.rows.length;i++)
                {
                    var objLectionItem = {};
                    objLectionItem.verseSN = res.rows.item(i).VerseSN;
                    objLectionItem.chapterSN=res.rows.item(i).ChapterSN;
                    if(res.rows.item(i).VolumeSN<39)
                    {
                        objLectionItem.volumeSN=arrOld[res.rows.item(i).VolumeSN-1].bookName;
                        objLectionItem.chapterCount=arrOld[res.rows.item(i).VolumeSN].charpterCount;
                    }
                    else {
                        objLectionItem.volumeSN=arrNew[res.rows.item(i).VolumeSN-40].bookName;
                        objLectionItem.chapterCount=arrNew[res.rows.item(i).VolumeSN-40].charpterCount;
                    }
                    objLectionItem.verseSN=res.rows.item(i).VerseSN;
                    objLectionItem.lection = res.rows.item(i).Lection.replace(new RegExp(searchStr,"g"),'<span  style="color:blue;"><span style="display:none">'+objLectionItem.chapterCount+":"+res.rows.item(i).VolumeSN+":"+objLectionItem.volumeSN+" "+ objLectionItem.chapterSN+":"+ objLectionItem.verseSN+'&</span>'+searchStr+'</span>');
                    $("#divsearch").append("<p data-ion-menu-close class='item item-text-wrap' ><span style='display:none'>"+objLectionItem.chapterCount+":"+res.rows.item(i).VolumeSN+":</span><span style='color:green'>"+objLectionItem.volumeSN+"  "+ objLectionItem.chapterSN+":"+ objLectionItem.verseSN+"</span><span style='display:none'>&</span> "+ objLectionItem.lection+"</p>");
                }
                if($("#divsearch p").length==0){
                    $("#divsearch").append("<p  disabled='disabled'' style='margin-top:20px;margin-left:10px;width:200%;font-size:18px;align-text:center' >&nbsp;&nbsp;&nbsp;&nbsp;没有搜索到相关的数据!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>");
                }
            }, function(e) {
                console.log("ERROR: getLection " + e.message);
            });
    });
}
//下一章
nextChapter = function () {
    var currentBook = Session.get('currentBook');
    var currentChapter = Session.get('currentChapter');
    var currentChapterCount = Session.get('currentChapterCount');
    currentChapter=parseInt(currentChapter);
    currentBook=parseInt(currentBook);
    currentChapterCount=parseInt(currentChapterCount);
    //判断本卷书是否完成
    if (currentChapter < currentChapterCount){
        //未完成，切换下一章
        currentChapter += 1;
        Session.set('currentChapter', currentChapter);
    }
    else{
        //完成，切换下一卷书
        if (currentBook === 66){
            currentBook = 1;
        }
        else{
            currentBook += 1;
        }
        currentChapter = 1;
        Session.set('currentBook', currentBook);
        Session.set('currentChapter', currentChapter);
        Session.set('currentBookName', Session.get('bookNameIndex')['bookSN'+currentBook]);
        Session.set('currentChapterCount', Session.get('chapterCountIndex')['bookSN'+currentBook]);
    }
}
gotoBookCharpter= function () {
    var currentBook ="1"; //Session.get('currentBook');//
    var currentChapter ="1"; //Session.get('currentChapter');
    var currentChapterCount = Session.get('currentChapterCount');
    //判断本卷书是否完成
    if (currentChapter < currentChapterCount){
        //未完成，切换下一章
        currentChapter += 1;
        Session.set('currentChapter', currentChapter);
    }
    else{
        //完成，切换下一卷书
        if (currentBook === 66){
            currentBook = 1;
        }
        else{
            currentBook += 1;
        }
        currentChapter = 1;
        Session.set('currentBook', currentBook);
        Session.set('currentChapter', currentChapter);
        Session.set('currentBookName', Session.get('bookNameIndex')['bookSN'+currentBook]);
        Session.set('currentChapterCount', Session.get('chapterCountIndex')['bookSN'+currentBook]);
    }
}
//上一章
lastChapter = function () {
    var currentBook = Session.get('currentBook');
    var currentChapter = Session.get('currentChapter');
    var currentChapterCount = Session.get('currentChapterCount');
    currentChapter=parseInt(currentChapter);
    currentBook=parseInt(currentBook);
    currentChapterCount=parseInt(currentChapterCount);
    //  console.log(currentBook,typeof(currentChapter),currentChapterCount,typeof(1)+"   this is three value");
    //判断是否是本卷书第一章
    if (currentChapter === 1){
        //是第一章，切换上一卷书
        if (currentBook === 1){
            currentBook = 66;
        }
        else{
            currentBook -= 1;
        }
        currentChapter = Session.get('chapterCountIndex')['bookSN'+currentBook];
        Session.set('currentBook', currentBook);
        Session.set('currentChapter', currentChapter);
        Session.set('currentBookName', Session.get('bookNameIndex')['bookSN'+currentBook]);
        Session.set('currentChapterCount', Session.get('chapterCountIndex')['bookSN'+currentBook]);
    }
    else{
        //不是第一章，切换上一章
        currentChapter -= 1;
        Session.set('currentChapter', currentChapter);
    }
}
//获取当前播放的节
getCurrSection = function (position) {
    var currentLection = Session.get('lectionList');
    var sectionSN = 0;
    for (var i = 0; i < currentLection.length; i++) {

        if (position < currentLection[i].soundEnd || currentLection[i].soundEnd === 0){
            break;
        }
        sectionSN++;
    };
    return sectionSN;
}
// 获取设置项
getSetting = function () {
    // 打开数据库
    // var db = window.sqlitePlugin.openDatabase({name: "bible.db", createFromLocation: 1});
    db.transaction(function(tx) {
        //单次查询Bible表
        var strSQL = "select ID as id, lastBook as lastbook, lastChapter as lastchapter from Setting where ID='1';";
        tx.executeSql(strSQL, [],
            function(tx, res) {
                var setting = {};
                for(var i=0;i<res.rows.length;i++)
                {
                    setting.lastbook = res.rows.item(i).lastbook;
                    setting.lastchapter = res.rows.item(i).lastchapter;
                    //console.log("读取到了：" + res.rows.item(i).lastbook.toString() + "-" + res.rows.item(i).lastchapter.toString());
                }
                Session.set('currentBook', setting.lastbook);
                Session.set('currentChapter', setting.lastchapter);
                Session.set('currentBookName', Session.get('bookNameIndex')['bookSN'+setting.lastbook]);
                Session.set('currentChapterCount', Session.get('chapterCountIndex')['bookSN'+setting.lastbook]);

                //初始化audio
                abcGlobal.media.initAudio();

            }, function(e) {
                console.log("ERROR: getSetting " + e.message);
            });
    });
}

// 设置设置项
setSetting = function (lastBook, lastChapter) {
    // 打开数据库
    // var db = window.sqlitePlugin.openDatabase({name: "bible.db", createFromLocation: 1});

    db.transaction(function(tx) {
        //更新Setting表
        var strSQL = "update Setting set lastBook='" + lastBook + "', lastChapter='" + lastChapter + "' where ID='1';";

        tx.executeSql(strSQL, [],
            function(tx, res) {
                //  console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
            }, function(e) {
                console.log("ERROR: setSetting " + e.message);
            });
    });
}
//设置书签

setBookMarks=function(bookname,bookmark,timer,currbook,currchapter,currchapterCount)
{
    db.transaction(function(tx) {
        //  console.log("insert two");  //更新Setting表
        var strSQL = "insert into bookmarks (bookname,bookmark,time,bookID,chapterID,chapterCount) values ('"+bookname+"','"+bookmark+"','"+timer+"','"+currbook+"','"+currchapter+"','"+currchapterCount+"'); ";
        //   console.log(strSQL+"((((((( insert   )))))))");
        tx.executeSql(strSQL, [],
            function(tx, res) {
                //console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
            }, function(e) {
                console.log("ERROR: setSetting " + e.message);
            });
    });
}
// update talbe
updateBookMarks=function(bookname,bookmark,timer)
{
    db.transaction(function(tx) {
        //更新Setting表(bookname,bookmark,time) values ('"+bookname+"','"+bookmark+"','"+timer+"');
        var strSQL = "update bookmarks set bookname= '"+bookname+"',bookmark='"+bookmark+ "' where time='"+timer+"'";
        tx.executeSql(strSQL, [],
            function(tx, res) {
                Session.set("sessSearch","*");
                getBookMarks(bookname);
            }, function(e) {
                console.log("ERROR: setSetting " + e.message);
            });
    });
}
//delete table
delBookMarks=function(booknames,timer){
    db.transaction(function(tx) {
        //更新Setting表(bookname,bookmark,time) values ('"+bookname+"','"+bookmark+"','"+timer+"');
        var strSQL = "delete from bookmarks  where time='"+timer+"'";
        tx.executeSql(strSQL, [],
            function(tx, res) {
                //console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                //  Session.set("sessSearch","*");
                getBookMarks(booknames);
            }, function(e) {
                console.log("ERROR: setSetting " + e.message);
            });
    });
}
// select talbe
getBookMarks=function(searchStr){db.transaction(function(tx) {
    //更新Setting表
    var strSQL = "select rowid,bookmark,bookname,time,bookID,chapterID,chapterCount from bookmarks order by time desc; ";
    if(searchStr!="*"){strSQL="select rowid,bookmark,bookname,time,bookID,chapterID,chapterCount from bookmarks  where bookmark like '%"+searchStr+"%' order by time desc;";}
    else{strSQL = "select rowid,bookmark,bookname,time,bookID,chapterID,chapterCount from bookmarks order by time desc; ";}
    tx.executeSql(strSQL, [],
        function(tx, res) {
            var arrBookMark=[];
            for(var i=0;i<res.rows.length;i++)
            { var objBMitem={};
                objBMitem.objbookmarkTime=res.rows.item(i).time;
                objBMitem.objbookname=res.rows.item(i).bookname;
                objBMitem.objbookmark=res.rows.item(i).bookmark;
                objBMitem.objbookid=res.rows.item(i).bookID;
                objBMitem.objchapter=res.rows.item(i).chapterID;
                objBMitem.objchapterCount=res.rows.item(i).chapterCount;
                arrBookMark.push(objBMitem);
            }
            Session.set('sessBookMark',arrBookMark);
            console.log(arrBookMark.length+"----------id-----------------");
            if(!arrBookMark.length){$("#message").text("没有数据！！！");}
            else{$("#message").text("");}
        }, function(e) {
            console.log("ERROR: setSetting " + e.message);
        });
});


    // 获取设置信息
    getSystemSetting = function(attribute){
        // 打开数据库
        db.transaction(function(tx) {
            //单次查询Bible表
            var strSQL = "select fontSize, automaticallyDL from SystemSettings";

            tx.executeSql(strSQL, [],
                function(tx, res) {
                    var setting = {};
                    for(var i=0;i<res.rows.length;i++)
                    {
                        setting.fontSize = res.rows.item(i).fontSize;
                        setting.automaticallyDL = res.rows.item(i).automaticallyDL;
                    }
                    Session.set('automaticallyDL', setting.automaticallyDL);
                    Session.set('fontSize', setting.fontSize);
                }, function(e) {
                    console.log("ERROR: getLection " + e.message);
                });
        });
    }

//设置是否自动下载
    setAutomaticallyDL = function(judge){
        db.transaction(function(tx) {
            //更新SystemSettings表
            var strSQL = "update SystemSettings set automaticallyDL = '" + judge + "';";
            tx.executeSql(strSQL, [],
                function(tx, res) {
                    //console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                }, function(e) {
                    console.log("ERROR: setSetting " + e.message);
                });
        });
    }

//设置字体大小
    setFontSize = function(judge){
        db.transaction(function(tx) {
            //更新SystemSettings表
            var strSQL = "update SystemSettings set FontSize = '" + judge + "';";
            tx.executeSql(strSQL, [],
                function(tx, res) {
                    //console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                }, function(e) {
                    console.log("ERROR: setSetting " + e.message);
                });
        });
    }



}
Meteor.startup(function () {
    db = window.sqlitePlugin.openDatabase({name: "bible.db", createFromLocation: 1});
    //将整本书卷名从数据库查询到，存到Session:booksList

    getBooksList(2);
    //获取设置项，更新Session
    getSetting();

});