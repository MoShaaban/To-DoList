//Check off specific ToDo by clicking on the text
$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
});

//Delete the todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//create new todo
$("input[type='text']").keypress(function(e){
	if (e.which === 13) {
		// new todo name
	var newTODO = $(this).val();
	$(this).val("");
	// adding the todo to the ul list
	$("ul").append('<li><span><i class="fa fa-trash-o"></i> </span>' + newTODO + "</li>");

	}
});

$(".fa-plus").click(function(){
	$('input').slideToggle();
})

