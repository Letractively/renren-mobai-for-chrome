$(function(){
    //Getting Mobai icon URL.
    var imgurl=chrome.extension.getURL("bai.gif");
    //Generating reply string for Mobai!
    var txt="";
    for (i=1;i<=10;i++)
    {txt+="(mb)";}
    //Defining action function which is called while mobai button is clicked.
    function onaction(){
	var e=document.createEvent('MouseEvents');
	e.initEvent('click',true,true);
	var obj=$(this).parent().siblings(".feed-comment").find("textarea")
	    .trigger('mouseover').trigger('click').trigger('focus')
	    .val(txt);
	setTimeout(function (){
		obj.next().find("a.submit").get(0)
		    .dispatchEvent(e);
	    },100);
    }
    //Creating Mobai button for items in feeds.
    //On document loading.
    $("<img/>").attr("src",imgurl).appendTo(".legend")
	.click(onaction);
    //On in-page refreshing.
    $("div.feed-list").on("DOMNodeInserted",function (e){
	if ($(e.target).is("article.a-feed")){
	    var $tar=$(e.target).find(".legend");
	    $("<img/>").attr("src",imgurl).appendTo($tar)
		.click(onaction);
	}
    });
});
