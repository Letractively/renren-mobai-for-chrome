$(function (){
    var imgurl=chrome.extension.getURL("bai.gif");
    var $inp=$("#miniEditorTextarea");
    var $sub=$("#submit_comment");
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
    var $img=$("<img />");
    $img.attr("src",imgurl).appendTo("div.m-editor-submit")
	.click(function (){
	    $inp.val($inp.val()+string());
	    $sub.trigger('click');
	});
});
