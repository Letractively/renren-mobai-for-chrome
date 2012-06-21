var x=document.getElementById('miniEditorAction');
var text="";
for (i=1;i<=10;i++)
{
    text+="(mb)";
}
var obj=document.createElement('img');
obj.src=chrome.extension.getURL("bai.gif");
obj.addEventListener("click",function ()
		     {
			 var ta=document.getElementById('miniEditorTextarea');
			 ta.innerHTML+=text;
		     });
x.appendChild(obj);
