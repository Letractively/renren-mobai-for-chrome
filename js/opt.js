$(function (){
    //Binding "Add" button with adding actions.
    $("#add").click(function (){
	if($("#ex").val())
	{
	    var $txt=$("<p/>");
	    $txt.text($("#ex").val()).addClass("data").appendTo("#ls");
	    var $delbut=$("<input/>");
	    $delbut.attr({type:"button",value:"Del"}).insertAfter($txt)
		.click(function(){
		    $(this).prev().remove();
		    $(this).remove();
		});
	    $("#ex").val("");
	}else {alert("Cannot input empty keyword!");}
    });
    //Initializing data from localstorage.
    if(localStorage.rrkey)
    {var read=JSON.parse(localStorage.rrkey);
     for (x in read)
     {
	 if (read[x])
	     {
		 $("#ex").val(read[x]);
		 $("#add").trigger('click');
     }}}
    if (localStorage.autoshare==1) $("#autoshare").attr("checked","checked");
    //Binding "Save" button with saving actions.
    $("#save").click(function(){
	var write=new Array();
	var $data=$(".data");
	for (x in $data)
	{write.push($data.eq(x).text());
	}
	localStorage.rrkey=JSON.stringify(write);
	if ($("#autoshare").attr("checked")=="checked")
	    localStorage.autoshare=1;
	else
	    localStorage.autoshare=0;
	alert("已保存");
    });
    //Binding pressing enter key in text box with adding actions.
    $("#ex").on('keypress',function(e){
	if(e.keyCode=="13"){
	    $("#add").trigger('click');
	}
    });
     
});
