$(function(){
    //Setting objects for global use.
    var imgurl=chrome.extension.getURL("bai.gif");
    var txt="";
    for (i=1;i<=10;i++)
    {txt+="(mb)";}
    //Creating Mobai button for items in feeds.
    var $img=$("<img/>");
    $img.attr("src",imgurl).appendTo(".legend")
	.click(function (){
	    var e=document.createEvent('MouseEvents');
	    e.initEvent('click',true,true);
	    var obj=$(this).parent().siblings(".feed-comment").find("textarea")
		.trigger('mouseover').trigger('click').trigger('focus')
		.val(txt);
	    setTimeout(function (){
		obj.next().find("a.submit").get(0)
		    .dispatchEvent(e);
	    },100);
	});
});
