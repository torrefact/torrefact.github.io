$(document).ready(function(){

	var scrollTest = 0;
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop) {
	   	if (scrollTest == 0) {


	   		//ROTATION DU CUBE
	      	$(".cube").addClass("rotate");

	 		// APPARITION DES GOUTTES
	 		setTimeout(function(){$("#goutte1").show(150);}, 200);
	 		setTimeout(function(){$("#goutte2").show(150);}, 300);
	 		setTimeout(function(){$("#goutte3").show(150);}, 400);
	 		setTimeout(function(){scrollTest = 1;}, 500);
	 	}
 	   } 
	   else	{
	   	if (scrollTest == 1) {
	   		//REROTATION DU CUBE
	      	$(".cube").removeClass("rotate");

	      	// DISPPARITION DES GOUTTES
	 		setTimeout(function(){$("#goutte1").hide(150);}, 400);
	 		setTimeout(function(){$("#goutte2").hide(150);}, 300);
	 		setTimeout(function(){$("#goutte3").hide(150);}, 200);
	 		setTimeout(function(){scrollTest = 0;}, 500);

	   	};
	   }
	   lastScrollTop = st;
	});
 });

