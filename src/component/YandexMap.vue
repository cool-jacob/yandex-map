<template>
      <div :id="mapId" style="width: 100%; height: 100%; "></div>
</template>

<script>

export default {
    name: 'YandexMap',
    props : {
        markers: {
            type: Array,
            default: null
        },
        coordsCenter: {
            type: Array,
            default: null
        },
        apiKey: {
            type: String,
            default: ''
        },
        oneMarkerCoords: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            map: null,
            coords: [],
            objectManager: null,
            point: null,
            oneMarker: null,
            searchControl: null,
            mapId: `yandex-map-${Math.round(Math.random() * 1000)}`
        };
    },
     mounted() {
         
         if (!document.getElementById('yandex-maps')) {
            let scriptYandexMap = document.createElement('script');
            scriptYandexMap.setAttribute('src', `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${this.apiKey}&mode=release&coordorder=latlong`);
            scriptYandexMap.setAttribute('id', 'yandex-maps');
            document.head.appendChild(scriptYandexMap);
            scriptYandexMap.addEventListener('load', () => {
                this.initializeYandexMap();
            });
         } else {
                this.initializeYandexMap();
         }          
    },

    methods: {
        // Инициализация карты
        async initializeYandexMap() {
            await ymaps.ready();
            this.map = new ymaps.Map(this.mapId, {
                center: this.coordsCenter,
                zoom: 10,
                controls: ['zoomControl','fullscreenControl'],
            });
            if(!this.markers){
                this.map.events.add('click', this.onClickMap);
                this.searchControl = new ymaps.control.SearchControl({
                    options: {
                        float: 'left',
                        floatIndex: 100,
                        noPlacemark: false
                    }
                });
                if(this.oneMarkerCoords) {
                    this.oneMarker = new ymaps.Placemark(this.oneMarkerCoords);
                    this.map.geoObjects.add( this.oneMarker);
                }
                this.map.controls.add(this.searchControl);
                this.searchControl.events.add('resultselect', this.Search);
            } 
            else this.setMarkers(); 
            this.$emit("InitializeYandexMap", this.map);           
        },

        // Установка маркеров на карте
        setMarkers() {
            this.map.geoObjects.removeAll();
             this.objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
        });
            let objectColection = [];
                for (let i = 0; i < this.markers.length; i++) {
                    objectColection.push({
                        type: 'Feature',
                        id: this.markers[i].id,
                        geometry: {
                            type: 'Point',
                            coordinates: [this.markers[i].latitude, this.markers[i].longitude]
                        }
                    })
                }
            this.objectManager.add(objectColection);
            this.map.geoObjects.add(this.objectManager);
            this.objectManager.objects.events.add(['click'], this.onClickEvent);
        },

        // Событие клика на маркер
        onClickEvent (e) {
            let objectId = e.get('objectId'),
                objectGeometry = this.objectManager.objects.getById(objectId).geometry.type;
            // Если событие произошло на метке, изменяем цвет ее иконки.
            if (objectGeometry === 'Point') {
                if (this.point) {
                    this.objectManager.objects.setObjectOptions(this.point, {
                        preset: 'islands#blueIcon'
                    }); 
                }
                this.objectManager.objects.setObjectOptions(objectId, {
                    preset: 'islands#lightBlueIcon'
                });
                this.$emit("ClickMarker", objectId);
                this.point = objectId;
            }
        },

        // Событие клика по карте
        onClickMap(e) {
            let coords = e.get('coords');
            this.map.geoObjects.removeAll();
            this.oneMarker = new ymaps.Placemark(coords);
            this.map.geoObjects.add( this.oneMarker);
            this.$emit("ClickMap", coords);
            
        },

        // Событие выбора результата поиска
        Search(e) {
            if (this.oneMarker) this.map.geoObjects.remove(this.oneMarker);
            const resultList = this.searchControl.getResultsArray();
            const index = this.searchControl.getSelectedIndex();
            const result = resultList[index].properties.get('metaDataProperty.GeocoderMetaData');
            const param = {
                text: result.text,
                addrresDetails: result.AddressDetails
            }
            this.$emit("Search", param);
        }
    },
    watch: {
        coordsCenter: function() {
            if (this.coordsCenter && this.map) {
                this.map.setCenter(this.coordsCenter);
                this.setMarkers();
            }
        },
    },
    beforeDestroy() {
        if (this.map.geoObjects.length) this.map.geoObjects.removeAll();

    },

}
</script>
