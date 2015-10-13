$(function(){
	
	//点击对话输入框或者对话显示区域时隐藏样式和颜文字键盘
	$("#chat-box-input").click(function(){
		if ($('#keyboard-face').is(':visible')) {
			$('#keyboard-face').hide();
		}
		if ($('#keyboard-color').is(':visible')) {
			$('#keyboard-color').hide();
		}
	});	
	$("#dialog-list").click(function(){
		if ($('#keyboard-face').is(':visible')) {
			$('#keyboard-face').hide();
		}
		if ($('#keyboard-color').is(':visible')) {
			$('#keyboard-color').hide();
		}
	});
	
	// 点击样式或颜文字按钮显示相应的键盘
	$("#color-btn").click(function(){
		if ($('#keyboard-face').is(':visible')) {
			$('#keyboard-face').hide();
		}
		$("#keyboard-color").fadeToggle("fast");
	});
	$("#face-btn").click(function(){
		if ($('#keyboard-color').is(':visible')) {
			$('#keyboard-color').hide();
		}
		$("#keyboard-face").fadeToggle("fast");
	});


	// 向对话输入框添加颜文字
	$("#keyboard-face span").click(function(){
		var text = $(this).text();
		var chatInput = $("#chat-box-input").val();
		console.log(chatInput);
		$("#chat-box-input").val(chatInput+text);
		$('#keyboard-face').hide();
	});
	
//	styleBtn.onclick = function(){
//	  changeStyle('color1');
//	  setCookie('userStyle','color1',365);
//	};
	
	// 修改样式
	$("#keyboard-color span").click(function(){
		colorStyle = $(this).attr("class");
		console.log(colorStyle);
		changeStyle(colorStyle);
		setCookie('userStyle', colorStyle, 365);
		$('#keyboard-color').hide();
	});

	$("#send-btn").click(function(){
  		if (firstFlag) {
	      	main();
	    } else {
	      	sendMsg();
	      	$.scrollTo('#dialog-list', printWall.scrollHeight);
	    }
	});
	

	
});

$(document).keydown(function (event) {
    if (event.keyCode == 13) {
        if (firstFlag) {
	      	main();
	    } else {
	      	sendMsg();

	    }
    };
});