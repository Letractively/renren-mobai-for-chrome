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
    //Sending request for confirming if auto share is on
    var auto=false;
    chrome.extension.sendRequest({type:"localStorage",key:"autoshare"},function(response){
	if (response==1) auto=true;
	alert(auto);
    });
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
    var $img=$("<img/>").attr("src",imgurl).click(onaction);
    var $ckb=$("<input/>").attr("type","checkbox").addClass("sharecb");
    //Initializing checkboxes for auto share.
    if (auto) $ckb.attr("checked","checked");
    //Attach them on document loading.
    $("article.a-feed").has("div.comment-box").find(".legend")
	.append($img).append($ckb);
    //Attach them on in-page refreshing.
    $("div.feed-list").on("DOMNodeInserted",function (e){
	if ($(e.target).is("article.a-feed")){
	    $(e.target).has("div.comment-box").find(".legend")
		.append($img).append($ckb);
	}
    });
});
