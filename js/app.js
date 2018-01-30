jQuery(document).ready(function($){

    $("button.navbar-toggle").on("click",function(){
        $("#crypto-navbar").slideToggle("slow");
    });
    $(".user-login-success").on("click",function(){
        $(".user-options-hover").slideToggle("slow");
    });
    $(".account #main-page .side-bar a").on("click",function(e){
        e.preventDefault();
        var targetElem = $(this)[0].dataset.targetId;
        if(targetElem.length > 0){
            $(".account #main-page .side-bar a").removeClass("active");
            $(this).addClass("active");
            $(".side-open").removeClass("show");
            $("#"+targetElem).addClass("show");
        }
    });
    $(".faq #faq-section .question-box .toggle-ans").on("click",function(){
        var targetId = $(this)[0].dataset.targetAns;
        if(targetId.length > 0){
            $(this).find("i").toggleClass("downMove");
            $("#"+targetId).slideToggle();
        }
    });
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

function initMap(){
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map-section'), {
        zoom: 8,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}