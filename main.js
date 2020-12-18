$(document).ready(function()
{
    console.log("aloha");
    $('.ddmenu').mouseenter(function()
    {
        $(this).css("background-color","#0F0F0F");
    });
    $('.ddmenu').mouseleave(function()
    {
        $(this).css("background-color", "#202124");
    })
    $('#dd1').click(function()
    {
        $("#layout").css("display","block");
        $("#creators").css("display","block");
        $("body").css("overflow","hidden")

    });
    $("#layout").click(function()
    {
        $("#layout").css("display","none");
        $("#creators").css("display","none");
        $('#memes').css("display","none");
        $("body").css("overflow","auto");
        $('#gall').css("display","none");
    });
    $("#dd5").click(function(){
        document.querySelector("#footer").scrollIntoView({
            behavior: 'smooth'
        });
    });
    $("#dd3").click(function()
    {
        $("#layout").css("display","block");
        $("#memes").css("display","block");
        $("body").css("overflow","hidden")
    });
    $("#dd6").click(function()
    {
        $("#layout").css("display","block");
        $("#gall").css("display","block");
        $("body").css("overflow","hidden")
    });
    var cnt = 1;
    $("#memes").click(function()
    {
        var tmp = cnt + 1;
        console.log("img/meme"+tmp+'.jpg');
        $("#memes img").attr("src","img/meme"+tmp+'.jpg');
        cnt++;
        cnt%=3;
    });
    var cnt2 = 1;
    $("#gall").click(function()
    {
        var tmp2 = cnt2 + 1;
        console.log("img/meme"+tmp2+'.jpg');
        $("#gall img").attr("src","img/gall"+tmp2+'.jpg');
        cnt2++;
        cnt2%=4;
    });
});