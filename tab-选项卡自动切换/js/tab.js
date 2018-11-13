// JavaScript Document
//封装id
function $(id){
	return typeof id=='string' ?document.getElementById(id):id;
}

window.onload=tab;

function tab(){
	//当前显示高亮的页签
	var index = 0;
	var timer = null;
	//获取所有的页签和要切换的内容
	var titles=$('title').getElementsByTagName('li');
	var divs=$('content').getElementsByTagName('div');
	//遍历所有页签，并给它绑定事件
	for(var i=0;i<titles.length;i++){
		titles[i].id=i;
	 titles[i].onmouseover=function(){
		 clearInterval(timer);
		 changeOption(this.id);
	   }
	 titles[i].onmouseout=function(){
	    timer=setInterval(autoplay,2000);
	 }
}
	//添加定时器，改变当前高亮的索引
   timer=setInterval(autoplay,2000);
  
function autoplay(){
	index++;
	if(index>=titles.length){
	index=0;
   }
   changeOption(index);	
	  //console.log(index);
}
   
function changeOption(curIndex){
		  //清除li的class
	for(var j=0;j<titles.length;j++){
		titles[j].className='';
		divs[j].style.display='none';	
	}
	    titles[curIndex].className='select';
		divs[curIndex].style.display='block';
 }
	 
	 
		
}