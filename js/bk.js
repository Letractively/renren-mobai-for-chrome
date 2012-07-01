chrome.extension.onRequest.addListener(function(request,sender,response){
    if (request.type=="localStorage"&&request.key)
    {
	response(localStorage[request.key]);
    }
    else
    {
	response({});
    }
});
