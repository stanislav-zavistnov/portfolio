// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
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
}
