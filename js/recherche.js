$(".button_search").on("click", function(){
	button_search()
})

function button_search() {
	$('form').find(":text").val("")
	$('.modal').modal('show');
}

$("#people_search").on("click", function(){
	people_search()
})

function people_search() {
	$.ajax({
	url: 'https://swapi.co/api/people/',
	type: "GET",
	data: {
		   search : $("#request").val(),
	},
	success: function(show_people){
		// console.log(show_people.results[1].name)
		$('.modal').modal('hide');
		$("#character_list").html("");
			for (let i = 0; i < show_people.results.length; i++) {
				$("#character_list").append("<tr><td>"+show_people.results[i].name+"</td></tr>")
			};
	},
	dataType: "json"
	})
}

$("#planet_search").on("click", function(){
	planet_search()
})

function planet_search() {
	$.ajax({
	url: 'https://swapi.co/api/planets/',
	type: "GET",
	data: {
		   search : $("#request").val(),
	},
	success: function(show_planet){
		// console.log(show_planet)
		$('.modal').modal('hide');
		$("#planet_list").html("");
			for (let i = 0; i < show_planet.results.length; i++) {
				$("#planet_list").append("<tr><td>"+show_planet.results[i].name+"</td></tr>")
			};
	},
	dataType: "json"
	})
}