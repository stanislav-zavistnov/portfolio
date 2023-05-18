type = "text/javascript" >
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map('map', {
    zoom: 13,
    center: [55.760627, 37.613793],
    controls: []
  });

  var myPlacemark = new ymaps.Placemark([55.769465, 37.638953], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/pointer.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -10]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}
