 var url ='http://192.168.31.108:5000/'
 var itemList  = [];
 
 function ClickDownload()
 {
	 var out;
	 out='<input type="text" id="toSearch" style="margin-bottom:5px">' ;
	 out+='<div class="btn-group-horizontal" role="group" aria-label="...">';
	 out+='<button onclick ="GetDownloadList(url,\'movie\')" type="button" class="btn btn-primary" style ="margin-left:5px" >Search Movie</button>';
	 out+='<button onclick ="GetDownloadList(url,\'serie\')" type="button" class="btn btn-primary" style ="margin-left:5px" >Search Serie</button>';
	 out+='</div>';
		document.getElementById("menuList").innerHTML = out;
		document.getElementById("menuHeader").innerHTML = 'Download';
	 
 }
   
	function GetDownloadList(url,type)
	{
		var xmlhttp;
					xmlhttp=new XMLHttpRequest();
					typeRequest="search/"+type;
					 
					xmlhttp.onreadystatechange=function()
					  {
					  if (xmlhttp.readyState==4 && xmlhttp.status==200)
						{
						itemList = JSON.parse(xmlhttp.responseText);
						insertDownloadOptionInWebPage( type);
						
						}
					  }
					xmlhttp.open("GET",url+typeRequest+'/'+document.getElementById('toSearch').value,true);
					xmlhttp.send();
		

	}
	
	function GetList(url,type)
					{
					var xmlhttp;
					xmlhttp=new XMLHttpRequest();
					 
					xmlhttp.onreadystatechange=function()
					  {
					  if (xmlhttp.readyState==4 && xmlhttp.status==200)
						{
						var itemList =  JSON.parse(xmlhttp.responseText);
						insertItemsInWebPage(itemList,type);
						}
					  }
					xmlhttp.open("GET",url+type,true);
					xmlhttp.send();
					
					}
					
	function insertItemsInWebPage(arr, type) {
							var out = "";
							var i;
							for(i = 0; i < arr.length; i++) 
								{
								
								 out += '<li><button onclick=playMovie('+arr[i]["id"]+') type="button" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>'+arr[i]["title"]+'</li>';
								
								}
							document.getElementById("menuList").innerHTML = out;
							document.getElementById("menuHeader").innerHTML = type+' List';
						}
	function insertDownloadOptionInWebPage( type) {
							var out = "";
							type= "download/" +type;
							
							var i;
							for(i = 0; i < itemList .length; i++) 
								{
									torrentObject=
								 out += '<li><button onclick="downloadMovieOrSerie( ' + i + ',\''+ type +'\')" type="button" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></button>'+itemList[i]["torrent_title"]+'</li>';
							
								}
							document.getElementById("menuList").innerHTML = out;
							document.getElementById("menuHeader").innerHTML = type+' List';
						}
	
	function downloadMovieOrSerie( torrentObjectId,type)
	{
					var xmlhttp;
					xmlhttp=new XMLHttpRequest();
					var playUrl =url+type;
					xmlhttp.onreadystatechange=function()
					  {
					  if (xmlhttp.readyState==4 && xmlhttp.status==200)
						{
						console.log( JSON.parse(xmlhttp.responseText));
						document.getElementById("menuList").innerHTML = 'Download successfully started :)';
						document.getElementById("menuHeader").innerHTML = "";
						}
					  }
					xmlhttp.open("POST",playUrl,true);
					xmlhttp.send( JSON.stringify( itemList[torrentObjectId]));
		
	}
	function playMovie(id)
	{
		
					var xmlhttp;
					xmlhttp=new XMLHttpRequest();
					var playUrl =url+"play/"+id
					xmlhttp.open("POST",playUrl,true);
					xmlhttp.send();
					console.log(xmlhttp.responseText);
					ClickCommand();
				
	
	
	}
	function ClickCommand()
	{
		var out;
		out='<button onclick ="sendAction(\'playpause\')" type="button" class="btn btn-danger" style ="margin-left:5px"><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>';
		out+='<button onclick ="sendAction(\'playpause\')" type="button" class="btn btn-danger" style ="margin-left:5px" ><span class="glyphicon glyphicon-pause" aria-hidden="true"></span></button>';
		out+='<button onclick ="sendAction(\'stop\')" type="button" class="btn btn-danger" style ="margin-left:5px" ><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button>';
		out+='<button onclick ="sendAction(\'volume/down\')" type="button" class="btn btn-danger"  style ="margin-left:5px"><span class="glyphicon glyphicon-volume-down" aria-hidden="true"></span></button>';
		out+='<button onclick ="sendAction(\'volume/up\')" type="button" class="btn btn-danger"  style ="margin-left:5px"><span class="glyphicon glyphicon-volume-up" aria-hidden="true"></span></button>';
		
		document.getElementById("menuList").innerHTML = out;
		document.getElementById("menuHeader").innerHTML = "";
	}
	function sendAction(actionType)
	{
		var xmlhttp;
					xmlhttp=new XMLHttpRequest();
					var playUrl =url+actionType
					xmlhttp.open("POST",playUrl,true);
					xmlhttp.send();
					console.log(xmlhttp.responseText);
		
	}