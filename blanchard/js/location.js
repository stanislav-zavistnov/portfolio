type = "text/javascript" >
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map('map', {
    zoom: 14,
    center: [55.758468, 37.601088],
    controls: []
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pointer.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -20]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}
