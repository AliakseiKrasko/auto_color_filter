//Находим картинку и кнопки разных цветов
const img = document.querySelector('#img');
const buttons = document.querySelectorAll('.colorItem');


// Добавляем обработчик событий на кнопки
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {

        
       
        
        img.src = 'https://webcademy.ru/files/js2020/solaris/' + event.target.dataset.file;
        
        // Добавляем цвет к соответствующей кнопке
        // if (event.target.classList.contains('colorBlue')) {
        //     console.log('yes');
        //     img.src = 'https://webcademy.ru/files/js2020/solaris/blue.png';

        // } else if (event.target.classList.contains('colorRed')) {
        //     img.src = 'https://webcademy.ru/files/js2020/solaris/red.png';

        // } else if (event.target.classList.contains('colorWhite')) {
        //     img.src = 'https://webcademy.ru/files/js2020/solaris/white.png';

        // } else if (event.target.classList.contains('colorOrange')) {
        //     img.src = 'https://webcademy.ru/files/js2020/solaris/orange.png';

        // } else if (event.target.classList.contains('colorGraphite')) {
        //     img.src = 'https://webcademy.ru/files/js2020/solaris/graphite.png';

        // } else if (event.target.classList.contains('colorBlack')) {
        //     img.src = 'https://webcademy.ru/files/js2020/solaris/black.png';

        // } else if (event.target.classList.contains('colorWhitePure')) {
        //     img.src = 'https://webcademy.ru/files/js2020/solaris/white-pure.png';
        // }

        //Убираем активность у всех кнопок 
        const activeButton = document.querySelector('.colorItem--active');
        activeButton.classList.remove('colorItem--active');


        //Кнопка по которой кликаем делаем активной
        event.target.classList.add('colorItem--active');
    });
})






/*

Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/

