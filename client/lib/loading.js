/**
 * Created by paul on 15/8/5.
 */
loading=function(title,content)
{
    if(title==="" && content===""){return;}
    IonLoading.show({
    customTemplate: '<h4>'+title+'</h4><p style="font-size:20px;">'+content+'</p>',
    duration: 1000
});

}