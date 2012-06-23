$(function (){
    $("#add").click(function (){
	var $txt=$("<p/>");
	$txt.text($("#ex").val()).addClass("data").appendTo("#ls");
	var $delbut=$("<input/>");
	$delbut.attr({type:"button",value:"Del"}).insertAfter($txt)
	    .click(function(){
		$(this).parent().remove();
	    });
	$("#ex").val("");
    });
    if(localStorage.rrkey)
    {var localStorage.rrkey;
     for (x in read)
     {$("#ex").val(read[x]);
      $("#add").trigger('click');
     }}
    $("#save").click(function(){
	var write=new Array();
	var $data=$(".data");
	for (x in $data)
	{write.push($data.eq(x).text());
	}
	localStorage.rrkey=write;
    });
     
});
