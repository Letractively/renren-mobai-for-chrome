$(function(){
    //Getting Mobai icon URL.
    var imgurl=chrome.extension.getURL("bai.gif");
    //Generating comment string for Mobai!
    var txt="";
    for (i=1;i<=10;i++)
    {
	txt+="(mb)";
    }
    //Inserting Mobai! button.
    $("<img/>").attr("src",imgurl).appendTo("div.m-editor-submit")
	.click(function (){
	    $("#cmtbody").val($("#cmtbody").val()+txt);
	    $("#editorFormBtn").trigger('click');
	});
});