Session.setDefault("automaticallyDL",false);  //自动下载
Session.setDefault("fontSize",false);   //是否开启大号字体

// 获取设置信息
getSystemSetting = function(){
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
                if(Session.get('fontSize')=='true'){
                    $("p[name='size_Id']").addClass("settingFont");
                }else{
                    $("p[name='size_Id']").removeClass("settingFont");
                }
            },
            function(e) {
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
        var strSQL = "update SystemSettings set fontSize = '" + judge + "';";
        tx.executeSql(strSQL, [],
            function(tx, res) {
                //console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
            }, function(e) {
                console.log("ERROR: setSetting " + e.message);
            });
    });
}
