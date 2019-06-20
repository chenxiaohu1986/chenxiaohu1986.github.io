$("document").ready(function(){
  dingwei();
  
  var pgname = document.location.href; 	
	  pgname=pgname.replace(/\?.*$/,'')
	  pgname=pgname.replace(/^.*\//,'')
  if(pgname=="index.php"||pgname==null||pgname==""){
    scrolling("saleList","saleList1","saleList2");
	$(".link").css({ "padding-top":"0px", "background":"#5d0503"});
	$(".bann").css("height","417px");
	$("#focus").css("height","417px");
	$("#focus ul").css("height","417px");
	$("#focus ul li").css("height","417px");
  }

  $(".nav li:last-child a").css("background","none");
  $(".nav li:last-child a").hover(function(){
	 $(this).css("background","url(images/navbg.png)  2px top no-repeat");
   },function(){
   	  $(this).css("background","none");
   })
  
  $(".news ul li:last-child ").css("border-bottom","none")
  $(".contactnr dl:nth-child(3) dt").css("background","url(images/index_03a.png) left 7px no-repeat");
  $(".contactnr dl:nth-child(4) dt").css("background","url(images/index_06.png) left 6px no-repeat");
  $(".contactnr dl:nth-child(5) dt").css("background","url(images/index_08.png) left 6px no-repeat");
  $(".contactnr dl:nth-child(6) dt").css("background","url(images/index_11.png) left 5px no-repeat");
  $(".knowledge ul li:last-child").css("border-bottom","none");
  
  $(".procla_list > ul > li ").click(function(){
		$(this).next("ul").slideToggle();
		$(this).toggleClass("open");
	});
  $(".leftnews_list li:last-child").css("border-bottom","none");
  $(".leftcon_list dl:nth-child(1) dt").css("background","url(images/index_03a.png) 5px 4px no-repeat");
  $(".leftcon_list dl:nth-child(2) dt").css("background","url(images/index_06.png) 5px 3px no-repeat");
  $(".leftcon_list dl:nth-child(3) dt").css("background","url(images/index_08.png) 5px 3px no-repeat");
  $(".leftcon_list dl:nth-child(4) dt").css("background","url(images/index_11.png) 5px 2px no-repeat");
	
	
	
	$(".mainConList ul li:last-child").css("border-bottom","none");
	$(".mainConList .pic2:last-child").css("border-bottom","none");
	$(".pic1:nth-child(3n)").css("margin-right","0");
	$(".pglist ul li").not(".on").not(".last").not(".next").hover(function(){ $(this).addClass("on");},function(){$(this).removeClass("on");})
	$(".pglist ul li.last").hover(function(){
		  $(this).css({background:"url(images/lastBg2.jpg) 6px center no-repeat #ee9e0b",border:"1px solid #a66b00"}).find("a").css({color:"#fff"});
	 },function(){
		   $(this).css({background:"url(images/lastBg.jpg) 6px center no-repeat #c80202",border:"1px solid #a66b00"}).find("a").css({color:"#fff"});
	 })
	$(".pglist ul li.next").hover(function(){
		  $(this).css({background:"url(images/nextBg2.jpg) 56px center no-repeat #ee9e0b",border:"1px solid #a66b00"}).find("a").css({color:"#fff"});
	 },function(){
		   $(this).css({background:"url(images/nextBg.jpg) 56px center no-repeat #c80202",border:"1px solid #a66b00"}).find("a").css({color:"#fff"});
	 })
	$(".pglist ul li.font").hover(function(){ $(this).css({background:"#f9f3d7",color:"#666",border:"none"});})


  
});
//导航定位
function dingwei(){
	var nav = document.getElementById("nav"); 
	var links = nav.getElementsByTagName("li"); 
	var lilen =$("#nav").find("a");
	var st2=new Array();
	var str1=new Array();
	var urrenturl = document.location.href; 	
	st2= urrenturl.split("_")
	var last = 0; 
	for (var i=0;i<links.length;i++) 
	{ 
	    linkurl =  lilen[i].getAttribute("rel"); 
		str1 = linkurl.split("/");
		var length2 = str1.length-1;
		str11 = str1[length2].split(".");
		 if(st2[0].indexOf(str11[0])!=-1) 
			{ 
			 last = i; 
			}
	} 
	links[last].className = "menu";
}
function scrolling(a,b,c){
	var speedp=30;
	var tabp=document.getElementById(a);
	var tab1p=document.getElementById(b);
	var tab2p=document.getElementById(c);
	tab2p.innerHTML=tab1p.innerHTML;
	function Marqueep(){
	if(tab2p.offsetWidth-tabp.scrollLeft<=0)
	tabp.scrollLeft-=tab1p.offsetWidth
	else{
	tabp.scrollLeft++;
	}
	}
	var MyMarp=setInterval(Marqueep,speedp);
	tabp.onmouseover=function() {clearInterval(MyMarp)};
	tabp.onmouseout=function() {MyMarp=setInterval(Marqueep,speedp)};
}

