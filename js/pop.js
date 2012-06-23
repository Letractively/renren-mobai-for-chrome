$(function(){
    var murl=new RegExp("^http:\/\/www.renren.com\/\d*");
    chrome.tabs.getSelected(null,function(tab){
	if(!murl.test(tab.url))
	{$("#aclick").replaceWith($("<p style='color:red'>Please use this extension at Renren.com!</p>"));
	}
    });
});
