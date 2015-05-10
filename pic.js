/*2015年5月10日13:39:39*/
window.onload = function(){
	var rightDiv = document.getElementById("right");
	var topDiv = document.getElementById("top");
	var leftDiv = document.getElementById("left");
	var bottomDiv = document.getElementById("bottom");
	var mainDiv = document.getElementById("main");
	var ifKeyDown = false;
	var contact = "";//按下的触点

	rightDiv.onmousedown = function(){
		ifKeyDown = true;
		contact = "right"
	}

	topDiv.onmousedown = function(){
		ifKeyDown = true;
		contact = "top";
	}

	leftDiv.onmousedown = function(){
		ifKeyDown = true;
		contact = "left";
	}

	bottomDiv.onmousedown = function() {
		ifKeyDown = true;
		contact = "bottom";
	}

	window.onmouseup = function(){
		ifKeyDown = false;
	}

	window.onmousemove = function(e) {
		if(ifKeyDown == true){
			if(contact == "right"){
				var x = e.clientX;//鼠标x位置
				var addWidth = "";//增加的宽度
				var widthBefore = mainDiv.offsetWidth - 2;
				addWidth = x - getElemPosition(mainDiv).left - widthBefore;
				mainDiv.style.width = addWidth + widthBefore + "px";
			}
			else if(contact == "top"){
				var y = e.clientY;
				var mainY = getElemPosition(mainDiv).top;
				var addHeight = mainY - y;
				var heightBefore = mainDiv.offsetHeight - 2 ;
				mainDiv.style.height = heightBefore + addHeight + "px";
				mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";
			}
			else if(contact == "left"){
				var x = e.clientX;
				var widthBefore = mainDiv.offsetWidth - 2;
				var addWidth = getElemPosition(mainDiv).left - x;
				mainDiv.style.width = addWidth + widthBefore + "px";
				mainDiv.style.left = mainDiv.offsetLeft - addWidth + "px";
			}
			else if(contact == "bottom"){
				var y = e.clientY;
				var heightBefore = mainDiv.offsetHeight - 2;
				var addHeight = y - getElemPosition(mainDiv).top - heightBefore;
				mainDiv.style.height = heightBefore + addHeight + "px";
			}
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