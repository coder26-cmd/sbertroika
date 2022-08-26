$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    $('.person').css({
        opacity: function () {
            var elementHeight = $(this).height();
            return (elementHeight - scrollTop * 3) / elementHeight;
        }
    });
});

var links = document.querySelectorAll('.header a')

function opacityUpdate (){
    if (person.style.opacity < 0) {
        person.style.display = 'none'
    } else {
        person.style.display = 'block'
    }
    if (window.scrollY < 50) {
        header.style.background = 'transparent';
        for (let link of links){
            link.style.color = 'black'
        }
    } else {
        header.style.background = '';
        for (let link of links){
            link.style.color = 'white'
        }
    }
}

var person = document.querySelector('.person')
var header = document.querySelector('.header');
window.addEventListener('scroll', opacityUpdate);

window.addEventListener("load", opacityUpdate);