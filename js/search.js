var searchBtn = document.querySelector('.search-btn')
var selectMenu = document.querySelector('.search-select')

searchBtn.addEventListener('click', function(evt) {
    console.log(selectMenu.value)
    if (selectMenu.value == 5) {
        window.location.replace('/views/region.html')
    } else {
        const myNotification = window.createNotification({
            // options here
        });
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