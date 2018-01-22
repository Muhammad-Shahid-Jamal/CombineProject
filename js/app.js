jQuery(document).ready(function($){
    setInterval(slider,6000);
});

function slider(){
    for(var i = 0; i<$(".slide-show li").length;i++){
        if($($(".slide-show li")[i]).find("span").hasClass("show")){
            $($(".slide-show li")[i]).find("span").toggleClass("show");
            $($(".slide-navigation li")[i]).find("span").toggleClass("active");
        }else{
            $($(".slide-show li")[i]).find("span").toggleClass("show");
            $($(".slide-navigation li")[i]).find("span").toggleClass("active");
        }
    }
    
}