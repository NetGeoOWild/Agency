let links = document.querySelectorAll('.menu__link');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        const current = document.getElementsByClassName('menu__link--active');
        current[0].classList.remove('menu__link--active');
        event.currentTarget.classList.add('menu__link--active');
    });
});



let content__items = document.querySelectorAll('.services__content-item');
content__items.forEach(item => {
    item.addEventListener('click', (event) => {
        const current = document.getElementsByClassName('services__content-item--active');
        current[0].classList.remove('services__content-item--active');
        event.currentTarget.classList.add('services__content-item--active');
    });
});

let works__link = document.querySelectorAll('.works__link').forEach(link => {
    link.addEventListener('click', (event) => {
        const current = document.getElementsByClassName('works__link--active');
        current[0].classList.remove('works__link--active');
        event.currentTarget.classList.add('works__link--active');
    });
});

$(function () {
    $('.header__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        customPaging: function (slider, i) {
            var thumb = jQuery(slider.$slides[i]).data();
            // return '<a>'+(i+1)+'</a>'; // <-- old
            return '<a>' + ('0' + (i + 1)).slice(-2) + '</a>'; // <-- new
        }
    });
    $('.rating__bottom-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/rating-prev.png"></img></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/rating-next.png"></img></button>',
        responsive: [
            {
                breakpoint: 561,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
});

let menu__btn = document.querySelector('.menu__btn');
menu__btn.addEventListener('click', () => {
    let menu__list = document.querySelector('.menu__list');
    menu__list.classList.toggle('menu__list--active');
});

