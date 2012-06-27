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
    //Inserting Mobai! button.
    $("<img/>").attr("src",imgurl).appendTo("div.m-editor-submit")
	.click(function (){
	    $("#cmtbody").val($("#cmtbody").val()+string());
	    $("#editorFormBtn").trigger('click');
	});
});
