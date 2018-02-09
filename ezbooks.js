
var pool = "abcdefghijklmnopqrstuvwxyz1234567890#@!%&*?+";
var poolarr = pool.split("");
var name = "My First Page";
var final = ",";
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
			if(final.length-1 < c.length)
				{
					document.getElementById("here").innerHTML = randompick() + final;
				}
		},40);
	fi--;
	final = name.charAt(fi) + final;
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
					var b = document.getElementsByClassName("second");
					for(var k = 0;k < b.length;k++)
		{
			b[k].style.display = "block";
		}
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
			fi = name.length;
			firstends();
		}
	});

function firstends()
{
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
									wid = wid + Math.random();
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
					var m = 0;
					var pb = document.getElementById("progressbar");
					var pbg = document.getElementById("progressbg");
					var p = document.getElementById("progress");
					var t = setInterval(function()
									   {
						if(left>=100)
							{
								pb.style.display = "none";
								pbg.style.display = "none";
								second();
								clearInterval(t);
							}
						else
							{
								if(left >= 50)
									{
										p.style.display = "none";
									}
								m = m + 0.057;
								left = left + m;
								pbg.style.left = left + "%";
							}
					},12);
			  },5000);
}

function progressbgfunc()
{
	var elem = document.getElementById("progressbg");
	var wid = 0,m = 0;
	var t = setInterval(function()
					   {
		if(wid >= 100)
			{
				var firstele = document.getElementsByClassName("first");
				for(var i = 0;i < firstele.length;i++)
					{
						firstele[i].style.display = "none";
					}
				clearInterval(t);
			}
		else
			{
				wid = wid + m;
				m = m + 0.057;
				elem.style.width = wid + "%";
			}
	},12);
}

function second()
{
	var n = document.getElementById("here");
	n.style.display = "block";
	start(name);
	setTimeout(function()
			   {
					startsecond();
	},3000);
}

function startsecond()
{
	var a = document.getElementsByClassName("second");
	var j = 0,i = -100;
	var time = 800;
	var t = setInterval(function()
					  {
		if(j == a.length-1)
			{
				clearInterval(t);
			}
		for(var k = 0;k < a.length;k++)
			{
				document.getElementById("here").style.transform = "translate(0,"+i+"%)";
				a[k].style.transform = "translate(0,"+i+"%)";
				
			}
		a[j].classList.toggle("black");
		if(j == 0)
			{
				document.getElementById("here").classList.add("lightgrey");
			}
		if(j>0)
			{
				a[j-1].classList.toggle("black");
			}
		i = i-100;
		j++;
	},time);
	/*for(var j = 0;j <= a.length-4;j++)
		{
			setTimeout(function()
			{
				a[j].classList.toggle("fadeup");
				a[j].style.display = "block";
			},500);
		}*/
}