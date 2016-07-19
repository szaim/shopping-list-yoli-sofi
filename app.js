// 1.add a new product 
	/*
		$('input').value();

	*/

//add a button that checks completed Items 
//add a button that uncheked items
	// input tag type checked 
	// button 
	//directly click on the item (double click )


//add a button that deletes items 


// add Date 


$(document).ready(function() {
	
	//Fetching elements from HTML
	function main() {
		var form = $("#js-shopping-list-form");
			form.submit(function(e) {
				var input = $("#shopping-list-entry").val();
				$(".shopping-list").append('<li>' + input + '</li>');
				e.preventDefault();
			});
	}
	main();
		
}); 
/**
another way to prevent default from function:

function  main() {
		$("#js-shopping-list-form").submit(function(){
			var input = $(this).find('input');
			alert(input.val());
		})
	return false;
	}

main();
**/
