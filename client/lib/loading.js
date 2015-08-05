/**
 * Created by paul on 15/8/5.
 */
loading=function(title,content)
{
    if(title==="" && content===""){return;}
    IonLoading.show({
    customTemplate: '<h3>'+title+'</h3><p>'+content+'</p>',
    duration: 1000
});

}