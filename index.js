  $('#js-shopping-list-form').submit( event => {

    // stop the default form submission behavior
    event.preventDefault();

    // text input is now the variable item 
    const item = $("input:text").val(); 

    $("ul").append(
     '<li>' +
        '<span class="shopping-item">'+ item +'</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle"><span class="button-label">check</span></button>' + '<a> </a>' +
          '<button class="shopping-item-delete"><span class="button-label">delete</span></button>' +
        '</div>' +
      '</li>');
  });

    // scope: shopping-list, trigger when a click happens on .shopping-item-toggle
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
  
      // 'this' is the button element, closest li, within li look for class .shopping-item, and toggle the class to shopping-item__checked
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

$('.shopping-list').on('click', '.shopping-item-delete', function (event) {
  
      // 'this' is the button element, closest li, within li look for class .shopping-item, and toggle the class to shopping-item__checked
      $(this).closest('li').remove();
    });