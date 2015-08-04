//查找文件
// volumeSN 书卷名 bookSN 书卷号 chapterSN 章号 
findfile = function(bookSN, chapterSN){
var fileURL = cordova.file.applicationStorageDirectory + "Documents/voice/"+ bookSN +"-"+ chapterSN +".mp3";
window.resolveLocalFileSystemURL(fileURL,resFSSuccess, resFSError);
            // Called upon successful File System resolution
            function resFSSuccess(entry){
                //书卷名
                var bookstr = Session.get('currentBook')
                //当前章 = chapterSN
                Session.set("book" + bookstr + "-" + chapterSN, true);
                //alert(Session.get("book" + Session.get('currentBook') + "-" + chapterSN));
              }
            // Note File System failure
            function resFSError(error){
            //alert("resFSError code: " + JSON.stringify(error));
              Session.set("book" + Session.get('currentBook') + "-" + chapterSN, false); 
            };
          }
//下载功能
// volumeSN 书卷名 bookSN 书卷号 chapterSN 章号 
download = function(volumeSN, bookSN, chapterSN){
  var uri = encodeURI("http://biblevoice.oss-cn-hangzhou.aliyuncs.com/cuv/" + volumeSN + "第" +chapterSN+ "章.mp3");

          //将要存储到本地的路径
          //可以自己定义文件夹，本示例中使用了voice子目录
          //不支持中文目录和文件名
          var fileURL = cordova.file.applicationStorageDirectory + "Documents/voice/"+ bookSN +"-"+ chapterSN +".mp3";

          //实例化文件传输对象
          var fileTransfer = new FileTransfer();
          //开始下载
          fileTransfer.download(
            uri,
            fileURL,
            function(entry) {
                  //下载成功
                  console.log("download complete: " + entry.toURL());
                  //弹出下载路径
                  //alert("download complete: " + entry.toURL());
                  //Router.go('download');
                  alert('下载成功');
                },
                function(error) {
                  //下载失败
                  console.log("download error source " + error.source);
                  console.log("download error target " + error.target);
                  console.log("download error code" + error.code);
                  //alert("download error: " + error);
                  alert(volumeSN + "第" +chapterSN+ "章下载失败，请重新下载")
                },
                false
                );
        }
//全部下载
downloads = function(volumeSN, bookSN, chapterSN, i){
  var uri = encodeURI("http://biblevoice.oss-cn-hangzhou.aliyuncs.com/cuv/" + volumeSN + "第" +chapterSN+ "章.mp3");

          //将要存储到本地的路径
          //可以自己定义文件夹，本示例中使用了voice子目录
          //不支持中文目录和文件名
          var fileURL = cordova.file.applicationStorageDirectory + "Documents/voice/"+ bookSN +"-"+ chapterSN +".mp3";

          //实例化文件传输对象
          var fileTransfer = new FileTransfer();
          //开始下载
          fileTransfer.download(
            uri,
            fileURL,
            function(entry) {
                  //下载成功
                  console.log("download complete: " + entry.toURL());
                  //弹出下载路径
                  //alert("download complete: " + entry.toURL());
                  //Router.go('download');
                  
                  if(i == Session.get('selectedChapterCount') - 1)
                  {
                    alert("全部下载完成");
                  }
                },
                function(error) {
                  //下载失败
                  console.log("download error source " + error.source);
                  console.log("download error target " + error.target);
                  console.log("download error code" + error.code);
                  //alert("download error: " + error);
                  alert(volumeSN + "第" +chapterSN+ "章下载失败，请重新下载")
                },
                false
                );
        }

//自动下载功能
// volumeSN 书卷名 bookSN 书卷号 chapterSN 章号 
automaticDownload = function(volumeSN, bookSN, chapterSN){
  var uri = encodeURI("http://biblevoice.oss-cn-hangzhou.aliyuncs.com/cuv/" + volumeSN + "第" +chapterSN+ "章.mp3");
  //将要存储到本地的路径
  //可以自己定义文件夹，本示例中使用了voice子目录
  //不支持中文目录和文件名
  var fileURL = cordova.file.applicationStorageDirectory + "Documents/voice/"+ bookSN +"-"+ chapterSN +".mp3";

  //实例化文件传输对象
  var fileTransfer = new FileTransfer();
  
  //开始下载
  fileTransfer.download(
    uri,
    fileURL,
    function(entry) {
      //下载成功
      console.log("download complete: " + entry.toURL());
      //弹出下载路径
      // alert("download complete: " + entry.toURL());
      Session.set("VoiceFile-" + bookSN + "-" + chapterSN,true);
      abcGlobal.media.playAudio();
  },
  function(error) {
    Session.set("VoiceFile-" + bookSN + "-" + chapterSN,false);
    //下载失败
    console.log("download error source " + error.source);
    console.log("download error target " + error.target);
    console.log("download error code" + error.code);
    //alert("download error: " + error);
    // alert(volumeSN + "第" +chapterSN+ "章下载失败，请重新下载");
  },false);
}

//查找文件
// volumeSN 书卷名 bookSN 书卷号 chapterSN 章号 
findVoiceFile = function(bookSN, chapterSN){
  var fileURL = cordova.file.applicationStorageDirectory + "Documents/voice/"+ bookSN +"-"+ chapterSN +".mp3";
  window.resolveLocalFileSystemURL(fileURL,resFSSuccess, resFSError);
  // Called upon successful File System resolution
  function resFSSuccess(entry){
    Session.set("VoiceFile-" + bookSN + "-" + chapterSN,true);
  }
  // Note File System failure
  function resFSError(error){
    Session.set("VoiceFile-" + bookSN + "-" + chapterSN,false);
  };
}