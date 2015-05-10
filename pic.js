/*2015年5月10日13:39:39*/
window.onload = function(){
	var rightDiv = document.getElementById("right");
	var mainDiv = document.getElementById("main");
	var ifKeyDown = false;

	rightDiv.onmousedown = function(){
		ifKeyDown = true;
	}

	rightDiv.onmouseup = function(){
		ifKeyDown = false;
	}

	window.onmousemove = function(e) {
		if(ifKeyDown == true){
			alert(mainDiv.offsetWidth);
			var x = e.clientX;//鼠标x位置
			var addWidth = "";//增加的宽度
			var widthBefore = mainDiv.offsetWidth - 2;
			addWidth = x - getElemPosition(mainDiv).left - widthBefore;
			mainDiv.style.width = addWidth + widthBefore + "px";
		}
	}
}
/**
 *获取元素距离浏览器左上边界的长度
 *@param node
 *@return 元素距离浏览器左上边界的长度{"left":left,"top":top}
 **/
function getElemPosition(node) {
	var left = node.offsetLeft;
		var top = node.offsetTop;
		var parent = node.offsetParent;
		while(parent != null){
			left += parent.offsetLeft;
			top += parent.offsetTop;
			parent=parent.offsetParent;	
		}
		return {"left":left,"top":top};
}