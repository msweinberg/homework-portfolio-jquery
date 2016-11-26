console.log("hello");
$("#education").hide();
$("#experience").hide();

// $("#titleEd").hover(
// 	function(){
// 		$("#education").stop(true, true).slideDown("slow");
// 	},
// 	function(){
// 		$("#education").stop(true, true).slideUp("slow");
// 	});

//When you mouseover the Experience icon, experience resume reveals
$("#experienceImage").mouseover(function(){
	$("#experience").slideDown("slow");
	$("#experienceImage").slideUp("slow");
})

//When you mouseover the Experience header, experience resume hides
$("#titleExp").mouseover(function(){
	$("#experience").slideUp("slow");
	$("#experienceImage").slideDown("slow");
})

//When you mouseover the Education icon, education resume reveals
$("#educationImage").mouseover(function(){
	$("#education").slideDown("slow");
	$("#educationImage").slideUp("slow");
})

//When you mouseover the Education header, education resume hides
$("#titleEd").mouseover(function(){
	$("#education").slideUp("slow");
	$("#educationImage").slideDown("slow");
})