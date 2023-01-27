ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.18702356950534,61.30028049999998],
        zoom: 17
    });
    let placemark = new ymaps.Placemark([55.18702356950534,61.30028049999998],{
        balloonContentBody:'проспект Победы, 382Б',
    },{
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-19, -40]
    })
    myMap.geoObjects.add(placemark)
}