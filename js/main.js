$(document).ready(function(){
	$("#search-icon").click(function(){
		console.log("you just clicked the search button")
		$(".navbar-right div:first-child a").toggle();
		$("#search-field").toggle();

	})
})