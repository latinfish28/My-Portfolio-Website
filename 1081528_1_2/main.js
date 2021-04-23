$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        if(randomChildNumber==0){
            $("div img").attr("src", "images/ramen.jpeg");
        }
        else if(randomChildNumber==1){
            $("div img").attr("src", "https://ibw.bwnet.com.tw/ct_column/2020/01/8101a088-4f44-8f75-fb51-d06d9b7982ba_620.jpg");
        }
        else if(randomChildNumber==2){
            $("div img").attr("src", "images/dumpling.jpg");
        }
    });
});