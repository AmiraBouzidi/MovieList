 var url ='http://192.168.31.108:5000/'
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
		document.getElementById("menuList").innerHTML = "";
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