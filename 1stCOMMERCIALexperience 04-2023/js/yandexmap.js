setTimeout(function(){
	var elem = document.createElement('script');
	elem.type = 'text/javascript';
	elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU';
	document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
setTimeout(function init() {
  // Создание карты.
  var myMap = new ymaps.Map('map', {
    zoom: 17,
    center: [55.919727, 37.794729],
    controls: []
  });

  var myPlacemark = new ymaps.Placemark([55.919727, 37.794729], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pointer.svg',
    iconImageSize: [40, 40],
    iconImageOffset: [-23, -40]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}, 5000);
// ymaps.ready(init);
// function init() {
//   // Создание карты.
//   var myMap = new ymaps.Map('map', {
//     zoom: 17,
//     center: [55.919727, 37.794729],
//     controls: []
//   });

//   var myPlacemark = new ymaps.Placemark([55.919727, 37.794729], {}, {
//     iconLayout: 'default#image',
//     iconImageHref: 'img/pointer.svg',
//     iconImageSize: [40, 40],
//     iconImageOffset: [-23, -40]
//   });

//   // Размещение геообъекта на карте.
//   myMap.geoObjects.add(myPlacemark);
// }
