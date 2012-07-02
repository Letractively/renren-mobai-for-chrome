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
    function mobai(){
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
    //Defining add mobai button and share checkbox function.
    function addMobai(afeed,share){
	var $img=$("<img/>").attr("src",imgurl).click(mobai);
	var $ckb=$("<input/>").attr("type","checkbox").addClass("sharecb");
	if (share) $ckb.attr("checked","checked");
	$(afeed).has("div.comment-box").find(".legend")
	    .append($img).append($ckb);
    }
    //Check auto share settings, set checkboxes 
    //and attach them with buttons on document loading
    var auto;
    chrome.extension.sendMessage({type:"localStorage",key:"autoshare"},function(response){
	if (response==1) auto=true;
	else auto=false;
	addMobai("article.a-feed",auto);
    });
    //Attach them on in-page refreshing.
    $("div.feed-list").on("DOMNodeInserted",function (e){
	if ($(e.target).is("article.a-feed")){
	    addMobai(e.target,auto);
	}
    });
});
