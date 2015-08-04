Template["tracks"].rendered = function(){
};
Template["menu"].rendered = function(){

	console.log("menu rendered");
	$(".bottom.inverted.sidebar")
		.sidebar('setting', 'transition', 'scale down')
		.sidebar('toggle');

	//Listener for enter keydown event
	$("html").keydown(function(e){
		var keydown = 70;
		if (e.which == keydown) {
			$(".bottom.inverted.sidebar").sidebar("toggle");
		};
	});
}