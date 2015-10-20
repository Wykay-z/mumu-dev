$(function(){
	
	var width = $(window).width();
	var spanWidth = $(".header-deco span").width();
	var triangleDiv = $(".header-deco");
	var stringSpan = "";
	for(var i=0; i<width/spanWidth+10; i++) {
		stringSpan += "<span></span>";
	}
	triangleDiv.html(stringSpan);
	
	
	//点击对话输入框或者对话显示区域时隐藏样式和颜文字键盘
	$("#chat-box-input").click(function(){
		if ($('#keyboard-face').is(':visible')) {
			$('#keyboard-face').hide();
		}
		if ($('#keyboard-color').is(':visible')) {
			$('#keyboard-color').hide();
		}
		if ($('#page-nav').is(':visible')) {
			$('#page-nav').hide();
		}
		$("#color-btn").removeClass("color00");
		$("#face-btn").removeClass("color00");
	});	
	$("#dialog-list").click(function(){
		if ($('#keyboard-face').is(':visible')) {
			$('#keyboard-face').hide();
		}
		if ($('#keyboard-color').is(':visible')) {
			$('#keyboard-color').hide();
		}
		if ($('#page-nav').is(':visible')) {
			$('#page-nav').hide();
		}
		$("#color-btn").removeClass("color00");
		$("#face-btn").removeClass("color00");
	});
	
	// 点击样式或颜文字按钮显示相应的键盘
	$("#color-btn").unbind("click").click(function(){
		if ($('#keyboard-face').is(':visible')) {
			$('#keyboard-face').hide();
			$('#page-nav').hide();
		}
		$('#page-nav').fadeToggle("fast");
		$("#keyboard-color").fadeToggle("fast");
		$("#face-btn").removeClass("color00");
		$(this).toggleClass("color00");
		pageNav("#keyboard-color");
	});
	$("#face-btn").unbind("click").click(function(){
		if ($('#keyboard-color').is(':visible')) {
			$('#keyboard-color').hide();
			$('#page-nav').hide();
		}
		$('#page-nav').fadeToggle("fast");
		$("#keyboard-face").fadeToggle("fast");
		$("#color-btn").removeClass("color00");
		$(this).toggleClass("color00");
		pageNav("#keyboard-face");
		 
	});


	// 向对话输入框添加颜文字
	$("#keyboard-face span").click(function(){
		var text = $(this).text();
		var chatInput = $("#chat-box-input").val();
		$("#chat-box-input").val(chatInput+text);
		$('#keyboard-face').hide();
		$('#page-nav').hide();
		$('#chat-box-input').focus();
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
		$('#page-nav').hide();
		$('#chat-box-input').focus();
	});

	$("#send-btn").click(function(){
  		if (firstFlag) {
	      	main();
	    } else {
	      	sendMsg();
			$.scrollTo('#dialog-list', printWall.scrollHeight);
	    }
	});
	
	$("#chat-box-input").focus(function(){
		$("#send-btn").css("opacity","1");
	})
	$("#chat-box-input").blur(function(){
		$("#send-btn").css("opacity",".4");
	})

	
});



	
	// keyboard分页
function pageNav(keyboard) {
		var show_per_page = 16; 
		var keyboard_items = $(keyboard);
		var number_of_items = keyboard_items.children().size();
		var number_of_pages = Math.ceil(number_of_items/show_per_page);
		$('#current_page').val(0);
		$('#show_per_page').val(show_per_page);
		
		var navigation_html = "";
//		navigation_html = '<a class="previous_link" href="javascript:previous();"></a>';
		var current_link = 0;
		while(number_of_pages > current_link){
//			navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
			navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+'</a>';
			current_link++;
		}
//		navigation_html += '<a class="next_link" href="javascript:next();"></a>';
		$('#page_navigation').html(navigation_html);
		keyboard_items.unbind("swipeleft").on("swipeleft",function(){
		    next();
		});
		keyboard_items.unbind("swiperight").on("swiperight",function(){
		    previous();
		});
		$('#page_navigation .page_link:first').addClass('active_page');
		keyboard_items.children().css('display', 'none');
		keyboard_items.children().slice(0, show_per_page).css('display', 'block');
		
}

function previous(){
		
		if($('.active_page').prev('.page_link').length==true){
			new_page = parseInt($('#current_page').val()) - 1;
			console.log(new_page);
			go_to_page(new_page);
		}
	}

	function next(){
		
		//if there is an item after the current active link run the function
		if($('.active_page').next('.page_link').length==true){
			new_page = parseInt($('#current_page').val()) + 1;
			console.log(new_page);
			go_to_page(new_page);
		}

	}
	function go_to_page(page_num){
		var show_per_page = parseInt($('#show_per_page').val());
		start_from = page_num * show_per_page;
		end_on = start_from + show_per_page;
		if ($('#keyboard-face').is(':visible')) {
			$("#keyboard-face").children().css('display','none').slice(start_from,end_on).css('display', 'block');
		} else {
			$("#keyboard-color").children().css('display','none').slice(start_from,end_on).css('display', 'block');
		}
		$('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
		$('#current_page').val(page_num);
	}



$(document).keydown(function (event) {
    if (event.keyCode == 13) {
        if (firstFlag) {
	      	main();
	    } else {
			
	      	sendMsg();
			$("..ui-input-text").height(32);
	    }
    };
});



