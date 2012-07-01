$(function(){
    //Getting Mobai icon URL.
    var imgurl=chrome.extension.getURL("bai.gif");
    //Generating comment string for Mobai!
    function string()
    {
	var num=Math.ceil(Math.random()*10);
	var txt="";
	for (i=1;i<=num;i++)
	    {
		txt+="(mb)";
	    }
	return txt;
    }
    //Defining action function which is called while mobai button is clicked.
    function onaction(){
	var e=document.createEvent('MouseEvents');
	e.initEvent('click',true,true);
	var obj=$(this).parent().siblings(".feed-comment").find("textarea")
	    .trigger('mouseover').trigger('click').trigger('focus')
	    .val(string());
	if ($(this).next().attr("checked")=="checked")
	    {
		obj.next().find("span.share").find("input").attr("checked","checked");
	    }
	setTimeout(function (){
		obj.next().find("a.submit").get(0)
		    .dispatchEvent(e);
	    },100);
    }
    //Creating Mobai button and share checkbox for items with comment boxes in feeds.
    //On document loading.
    $("article.a-feed").has("div.comment-box").find(".legend").append(
	$("<img/>").attr("src",imgurl).click(onaction)
    ).append(
	$("<input/>").attr("type","checkbox").addClass("sharecb")
    );
    //On in-page refreshing.
    $("div.feed-list").on("DOMNodeInserted",function (e){
	if ($(e.target).is("article.a-feed")){
	    var $tar=$(e.target).has("div.comment-box").find(".legend");
	    $("<img/>").attr("src",imgurl).appendTo($tar)
		.click(onaction);
	    $("<input/>").attr("type","checkbox").addClass("sharecb")
		.appendTo($tar)
	}
    });
});
