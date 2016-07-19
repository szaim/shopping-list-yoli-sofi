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
	var buttonWrapper = '<div class="shopping-item-controls">';
	var checkedButton = '<button class="shopping-item-toggle"><span class="button-label"> Check </span></button>';
	var deleteButton = '<button class="shopping-item-delete"> <span class="button-label">delete</span></button>';
	
	
	function main() {
		var form = $("#js-shopping-list-form");
			form.submit(function(e) {
				var input = $("#shopping-list-entry").val();

				$(".shopping-list").append('<li><span class="shopping-item">' + input + '</span>' + buttonWrapper + checkedButton + " " + deleteButton + '</div></li>');
				e.preventDefault();
			});
	}
	main();
	deleteItem();
	
function deleteItem() {
	$('#shopping-list').on('click', '.shopping-item-delete', function(){
		$(this).closest('li').hide();
	})
}
		
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
