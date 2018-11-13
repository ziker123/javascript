function $(id){
 return typeof id =='string' ? document.getElementById(id):id;
}

window.onload=tab;
function tab(){
   var index = 0;
   var timer = null;
   var titles = $(title).getElementsByTagName('li');
   var divs = $(content).getElementsByTagName('div');
   
   if(titles.length != divs.length){return;}
    for(var i=0;i<titles.length;i++){
		titles[i].id=i;
	    titles[i].onmouseover=function(){
			clearInterval(timer);
			changeOption(this.id);
			//console.log(i);
			//titles[i].className = "select";
		 }
		titles[i].onmouseout=function(){
			timer = setInterval(autoplay,2000); //index=1;
			}
	}
    //如果滑过次数过快，要清除定时器
	if(timer){
		clearInterval(timer);
		timer=null;
	}
	//添加定时器
   	timer = setInterval(autoplay,2000);
	
	//自动播放
	function autoplay(){
	 index++;
	 if(index >=titles.length){
		 index=0;
	 }
	 changeOption(index)  // 
	//console.log(index);
	 }
	
	//改变属性
	function changeOption(curIndex){
       for(var j=0; j<titles.length;j++){
	             titles[j].className="";
	            divs[j].style.display="none"; 
	        }
			titles[curIndex].className="select";
	        divs[curIndex].style.display="block";
			index=curIndex;	
		
	}
}