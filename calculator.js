$(()=>{
    $(".drawer").hide();
    $(".standard").click(function(){
        $(".drawer").show();
        $("#drawer_id").css("width","290px");
    });
    $(".close_button").click(function(){
        $(".drawer").hide();    
    });
    
});