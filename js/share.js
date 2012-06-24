$(function (){
    var imgurl=chrome.extension.getURL("bai.gif");
    var $inp=$("#miniEditorTextarea");
    var $sub=$("#submit_comment");
    var addtxt="";
    for (i=1;i<=10;i++)
    {
	addtxt+="(mb)";
    }
    var $img=$("<img />");
    $img.attr("src",imgurl).appendTo("#miniEditorAction")
	.click(function (){
	    $inp.val($inp.val()+addtxt);
	    $sub.trigger('click');
	});
});
