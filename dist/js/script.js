const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');
      closeOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.statistic__item-percent'),
      lines = document.querySelectorAll('.statistic__item-line span');

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});
