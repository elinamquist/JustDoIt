$(document).ready(function(){
	// adds items when a user click on the 'add items' button
	$("#add_btn").click(function(){
		// takes the value entered by user
		let item = $("#item_input").val();
		// checks if user entered a value
		if(item=="") {
			// display modal window
			$("#myModal").css({"display":"block"});
		}else {
				$(".emptyList").fadeOut();
				// toggles the class "checked"
				$("#lists .list").click(function() {
				$(this).toggleClass("checked");
				});
				// appends the item to the list
				$("#lists").append("<li class='list '>"+ item+" <span class='delete-item fa'>&times</span></li>");
				$("#item_input").val("");

		       }
		// toggles the class "checked" repeated!
		$("#lists .list").click(function(){
			$(this).toggleClass("checked");
		});
		// deletes an item
		$(".delete-item").click(function(){
			$(this).parents("li").fadeOut();
		});
		
		// hides modal when a user click the close button
		$('.modal-close').click(function(){
			$("#myModal").fadeOut();
		});
		$('#myModal').click(function(){
			$("#myModal").fadeOut();
		});
    });

});