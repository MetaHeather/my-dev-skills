var $addSkill = $('.add-skill');
var $ul = $('ul');

//takes in text input value and adds as li to skill list ul
$addSkill.on('click', function () {
    //setting value to text input value
    let $value = $("#text").val();
    //appends value and remove-skill button to ul 
    $ul.append('<li>' + '<button class="remove-skill">X</button>' + $value + '</li>');
    //sets text input to blank after click
    $('#text').val('');
})

//adds click event to ul bc it is already in html and can be
//manipulated by the jQuery by event delegation
$ul.on('click', function (evt) {
    //saves event target(item clicked) to $target variable
    let $target = $(evt.target);
    //Makes sure target clicked has remove-skill class(aka is red button)
    if($target.hasClass('remove-skill')){
       //li we want to delete should be closest to button we clicked
       $target.closest('li').fadeOut(1000, function () {
            $(this).remove();
        })
    }
})