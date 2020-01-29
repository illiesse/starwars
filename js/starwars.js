$(".fa-bars").on("click", function(){
hamburger_menu()})

function hamburger_menu(){
	$("#menu").toggleClass("hide_menu")
	$("#menu").toggleClass("show_menu")
}