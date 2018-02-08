
var pool = "abcdefghijklmnopqrstuvwxyz1234567890#@!%&*?+";
var poolarr = pool.split("");
var name = "My First Page";
var final = "";
var fi = 0;

// Random shuffling starts

function randompick()
{
	var ran = Math.random()*44;
	var z = Math.floor(ran);
	return poolarr[z];
}

function makeword(c)
{
	var i = 0;
	var r = setInterval(function()
	   {
			i++;
			if(i == 10)
				{
					clearInterval(r);
				}
			if(final.length < c.length)
				{
					document.getElementById("here").innerHTML = final + randompick();
				}
		},40);
	final = final + name.charAt(fi);fi++;
	document.getElementById("here").innerHTML = final;
}

function start(a)
{
	var f = 300;
	var i = 0;
	var t = setInterval(function()
		{
			makeword(a);
			f = f/5;
			i++;
			if(i >= a.length)
				{
					clearInterval(t);
				}
		},f);
	
}

//start(name);

// Random shuffling ends

document.getElementById("nameform").addEventListener("keydown",function(event)
	{
		//event.preventDefault();
		if (event.keyCode === 13) {
			event.preventDefault();
			name = document.getElementById("nameform").value.toUpperCase();
			firstends();
		}
	});

function firstends()
{
	var firstele = document.getElementsByClassName("first");
	for(var i = 0;i < firstele.length;i++)
		{
			firstele[i].style.display = "none";
		}
	document.getElementById("progressbar").style.display = "block";
	document.getElementById("progressbg").style.display = "block";
	progressbgfunc();
	setTimeout(function progressbar()
			   {
					document.getElementById("progress").style.display = "block";
					var wid = 0.5;
					var p = document.getElementById("progressbar");
					var t = setInterval(function()
						{
							if(wid >= 25)
								{
									clearInterval(t);
								}
							else
								{
									wid = wid + Math.random()*2;
									if(wid>25)
										{
											wid = 25;
										}
									p.style.width = wid + "%";
									document.getElementById("progress").textContent = Math.floor(wid)*4;
								}
							if(wid>=14)
								{
									document.getElementById("progress").style.color = "black";
								}
						},50);
				},1000);
	setTimeout(function()
			  {
					var left = 0;
					var pb = document.getElementById("progressbar");
					var pbg = document.getElementById("progressbg");
					var p = document.getElementById("progress");
					var t = setInterval(function()
									   {
						if(left>=100)
							{
								clearInterval(t);
							}
						else
							{
								left++;
								pb.style.left = left + "%";
								pbg.style.left = left + "%";
								p.style.left = left + "%";
							}
					},8);
			  },4000);
}



function progressbgfunc()
{
	var elem = document.getElementById("progressbg");
	var wid = 0,m = 0;
	var t = setInterval(function()
					   {
		if(wid >= 100)
			{
				clearInterval(t);
			}
		else
			{
				wid = wid + m;
				m = m + 0.012;
				elem.style.width = wid + "%";
			}
	},5);
}