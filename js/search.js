var searchBtn = document.querySelector('.search-btn')
var selectMenu = document.querySelector('.search-select')
var diceBtn = document.querySelector('.adv')
var seaBtn = document.querySelector('.sea')
var natureBtn = document.querySelector('.nature')
var histBtn = document.querySelector('.hist')

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

searchBtn.addEventListener('click', function(evt) {
    console.log(selectMenu.value)
    if (selectMenu.value == 5) {
        window.location.href = 'views/region.html'
    } else {
        window.createNotification({
			closeOnClick: true,
            displayCloseButton: true,
            positionClass: 'nfc-bottom-right',
            onclick: false,
            showDuration: 10000,
            theme: 'error'
		})({
			title: 'Нет региона',
            message: 'Информация о данном регионе еще не добавлена :('
		});
    }
})