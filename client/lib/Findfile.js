var fileTransferObj = null;//

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
  }
  // Note File System failure
  function resFSError(error){
    Session.set("book" + Session.get('currentBook') + "-" + chapterSN, false); 
  };
}
//下载功能
// volumeSN 书卷名 bookSN 书卷号 chapterSN 章号 
download = function(volumeSN, bookSN, chapterSN){
  MessageLoading("loading","正在下载" + volumeSN + " 第" + bookSN + "章" + chapterSN + "节");
  
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
        $("#loading").hide();
        var content = volumeSN + " " + bookSN + "章" + chapterSN + "节 下载成功";
        MessageLoading("loading",content);
      },
      function(error) {
        //下载失败
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("download error code" + error.code);

        var content = volumeSN + " " + bookSN + "章" + chapterSN + "节 下载失败,请重新下载";
        MessageLoading("loading",content);
      },false
  );
}

//全部下载
downloads = function(volumeSN, bookSN, chapterSN, i, urls){
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
                  if(i == Session.get('selectedChapterCount') - 1)
                  {

                    MessageLoading("loading","全部下载完成");
                    Router.go(urls);
                  }
                },
                function(error) {
                  //下载失败
                  console.log("download error source " + error.source);
                  console.log("download error target " + error.target);
                  console.log("download error code" + error.code);
                  var content = volumeSN + " " + bookSN + "章" + chapterSN + "节 下载失败,请重新下载";
                  MessageLoading("loading",content);
                },
                false
                );
}

//自动下载功能
// volumeSN 书卷名 bookSN 书卷号 chapterSN 章号 
automaticDownload = function(volumeSN, bookSN, chapterSN){
  MessageLoading("loading","正在下载" + volumeSN + " 第" + bookSN + "章" + chapterSN + "节");
  var uri = encodeURI("http://biblevoice.oss-cn-hangzhou.aliyuncs.com/cuv/" + volumeSN + "第" +chapterSN+ "章.mp3");
  //将要存储到本地的路径
  //可以自己定义文件夹，本示例中使用了voice子目录
  //不支持中文目录和文件名
  var fileURL = cordova.file.applicationStorageDirectory + "Documents/voice/"+ bookSN +"-"+ chapterSN +".mp3";
  if (fileTransferObj != null){
    fileTransferObj.abort();
  }
  //实例化文件传输对象
  fileTransferObj = new FileTransfer();
  
  //开始下载
  fileTransferObj.download(
    uri,
    fileURL,
    function(entry) {
      //下载成功
      console.log("download complete: " + entry.toURL());
      //弹出下载路径
      Session.set("VoiceFile-" + bookSN + "-" + chapterSN,true);
      abcGlobal.media.playAudio();
      var content = volumeSN + " " + bookSN + "章" + chapterSN + "节 下载成功";
      MessageLoading("loading",content);
    },
    function(error) {
      Session.set("VoiceFile-" + bookSN + "-" + chapterSN,false);
      //下载失败
      console.log("download error source " + error.source);
      console.log("download error target " + error.target);
      console.log("download error code" + error.code);
      var content = volumeSN + " " + bookSN + "章" + chapterSN + "节 下载失败,请重新下载";
      MessageLoading("loading",content);
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
    abcGlobal.media.playAudio();
  }
  // Note File System failure
  function resFSError(error){
    Session.set("VoiceFile-" + bookSN + "-" + chapterSN,false);
    abcGlobal.media.playAudio();
  };
}


// 判断文件是否存在
judgeVoiceFile = function(bookSN, chapterSN){
  var fileURL = cordova.file.applicationStorageDirectory + "Documents/voice/"+ bookSN +"-"+ chapterSN +".mp3";
  window.resolveLocalFileSystemURL(fileURL,resFSSuccess, resFSError);
  // Called upon successful File System resolution
  function resFSSuccess(entry){
    //存在
    fs.root.getFile("voice/" + Session.get('currentBook') + "-" + Session.get('currentChapter') + ".mp3", {}, function(fileEntry) {
      fileEntry.remove(function() {
        // readDir(cordova.file.applicationStorageDirectory + "Documents/voice/");
        download(Session.get('currentBookName'), Session.get('currentBook'), Session.get('currentChapter'));
      }, errorHandler);
    }, errorHandler);
  }
  // Note File System failure
  function resFSError(error){
    download(Session.get('currentBookName'), Session.get('currentBook'), Session.get('currentChapter'));
  };
}

