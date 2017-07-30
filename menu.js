$(function(){
//	先将第二个和最后一个隐藏
	$("ul:eq(1),ul:last-child").hide();
	$("div").click(function(){
//		console.log($(this));
//这里选中的div,而我们要隐藏的是ul,所以要用next()
		var click_ul= $(this).next(); 
        if(click_ul.is(":hidden")){
//      	在让点击的ul显示的时候,需要将所有的ul先隐藏
        	$("ul").slideUp();
        	click_ul.slideDown();
        }else{
        	click_ul.slideUp();
        }	
	})
})
