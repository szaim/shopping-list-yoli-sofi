$(document).ready(function() {
    //Fetching elements from HTML
    var buttonWrapper = '<div class="shopping-item-controls">';
    var checkedButton = '<button class="shopping-item-toggle"><span class="button-label"> Check </span></button>';
    var deleteButton = '<button class="shopping-item-delete"> <span class="button-label">delete</span></button>';
    // we are creating the function that will append new items in the list
    function main() {
        var form = $("#js-shopping-list-form");
        form.submit(function(e) {
            var input = $("#shopping-list-entry").val();
            $(".shopping-list").append('<li><span class="shopping-item">' + input + '</span>' + buttonWrapper + checkedButton + " " + deleteButton + '</div></li>');
            e.preventDefault();
        });
    }
    main();
    // in this function we are going to delete each item in the list by clicking on Delete Botton
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        $(this).closest("li").remove();
    });
    // change css property to items that have been checked
    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        //console.log($(this).closest("li"));
    });
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