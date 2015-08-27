loading=function(title,content)
{
    if(title==="" && content===""){return;}
    IonLoading.show({
    customTemplate: '<h4>'+title+'</h4><p style="font-size:20px;">'+content+'</p>',
    duration: 1000
});

}
MessageLoading=function(id,message){

    if(message.length<=14){
        console.log(message.length);
        $("#"+id+" p:eq(0)").outerHeight("22%")
       $("#"+id+" p:eq(0)").removeClass("centerTwoLine").removeClass("centerThreeLine").addClass("center");
    }
    else if(message.length<=28 && message.length>=15){
        $("#"+id+" p:eq(0)").removeClass("center").removeClass("centerThreeLine").addClass("centerTwoLine");
        $("#"+id+" p:eq(0)").outerHeight("22%")
    }
    else if(message.length>=29){
        $("#"+id+" p:eq(0)").removeClass("center").removeClass("centerTwoLine").addClass("centerThreeLine");
        $("#"+id+" p:eq(0)").outerHeight("22%")
    }
    $("#"+id+" p:eq(0)").text(message);
    $("#"+id).show();
    setTimeout(function(){$("#"+id).hide();},3000);
}
msLoading=function(id,message){

    if(message.length<=14){
        console.log(message.length);
        $("#"+id+" p:eq(0)").outerHeight("22%")
        $("#"+id+" p:eq(0)").addClass("centerbookmark");
    }

    $("#"+id+" p:eq(0)").text(message);
    $("#"+id).show();
    setTimeout(function(){$("#"+id).hide();},3000);
}

