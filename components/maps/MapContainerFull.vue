<template>
    <GmapMap :center="center" :zoom="zoom" :map-type-id="mapType" :options="mapStyle">
        <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened" @closeclick="infoOpened=false">
            <div class='info__windows'>
                <h2>{{ springName }}</h2>
                <div class='rating'>
                    <h3>Our Rating: </h3>
                    <div :data-rating="springRating" class='rating__star__container'>
                        <div class='rating__color' :style="{right: springMove + '%'}"></div>
                        <img alt='Star Rating Block' src="https://www.hotspringing.com/directus/public/uploads/_/originals/hollowStars.png">
                    </div>
                </div>
                <h3>Walking Distance: {{ springWalkingDist }}</h3>
                <h3>Parking Cost: ${{ springParkingCost }}</h3>
                <h3>Accessable Seasons: {{ springSeasons }}</h3>
                <div class='info__window__description' v-html="springDescription"/>
                <a class="info__directions__link" :href='"https://www.google.com/maps/dir/?api=1&destination=" + springLatitude + "," + springLongitude' target='_blank'>Get Directions</a>
            </div>
        </gmap-info-window>
        <GmapMarker v-for="(item, index) in markers" :key="index" :position="getPosition(item)" :clickable="true" @click="toggleInfo(item, index)"/>
    </GmapMap>
</template>

<script>
    import MapInfoWindow from '~/components/maps/MapInfoWindow.vue';
    
    let mapStyles = [ //MAP STYLES
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#232323"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },

        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "grey"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#3B4541"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#6DCDEC"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];
    export default {
        props: {
            mapData: Object,
            marks: Array
        },
        data() {
            return {
                center: { lat: parseFloat(this.mapData.center.latitude), lng: parseFloat(this.mapData.center.longitude) },
                zoom: 6,
                mapType: "roadmap",
                mapStyle: {styles: mapStyles},
                markers: this.marks,
                infoPosition: null,
                infoContent: null,
                springName: null,
                springRating: null,
                springWalkingDist: null,
                springParkingCost: null,
                springSeasons: null,
                springDescription: null, 
                springLatitude: null,
                springLongitude: null,
                springMove: null,
                infoOpened: false,
                infoCurrentKey: null,
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                }
            };
        },
        methods: {
            getPosition: function(marker) {
                return {
                    lat: marker.position.lat,
                    lng:  marker.position.lng
                }
            },
            toggleInfo: function(marker, key) {
                var s = marker.details;
                this.infoPosition = this.getPosition(marker),
                this.springName = marker.details.name;
                this.springRating = marker.details.rating;
                this.springWalkingDist = marker.details.walkingDist;
                this.springParkingCost = marker.details.parkingCost;
                this.springSeasons = marker.details.seasons;
                this.springDescription = marker.details.description;
                this.springLatitude = marker.details.latitude;
                this.springLongitude = marker.details.longitude;
                this.springMove = marker.details.rating / 100 * (80 * -1);
                if (this.infoCurrentKey == key) {
                    this.infoOpened = !this.infoOpened;
                } else {
                    this.infoOpened = true;
                    this.infoCurrentKey = key;
                }
            }
        }
    }
</script>

<style>
.vue-map-container, .vue-map-container .vue-map {
	width: 100%;
    margin-bottom: 0px;
    min-height: 500px;
}
.map__collapse__inner .vue-map-container, .map__collapse__inner .vue-map-container .vue-map {
	width: 100%;
    margin-bottom: 0px;
    height: 55vh;
    min-height: 55vh;
    max-height: 55vh;
    transition: all .8s;
}
body .collapsed .vue-map-container, body .collapsed .vue-map-container .vue-map {
	width: 100%;
    margin-bottom: 0px;
    height: 20vh;
    min-height: 20vh;
    max-height: 20vh;
}
.map__collapse {
    max-height: 55vh;
    min-height: 55vh;
    width: 100%;
    transition: all .8s;
}
body .collapsed {
    max-height: 20vh;
    min-height: 20vh;
}
.map__collapse__inner {
    overflow: hidden;
    max-height: inherit;
}
.map__collapse__expand__div {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    border-bottom: 3px solid var(--main-text);
}
.map__collapse__expand {
    width: 0;
    height: 0;
    border-left: 24px solid transparent;
    border-right: 24px solid transparent;
    border-top: 24px solid var(--main-text);
    cursor: pointer;
    left: 50%;
    bottom: -14px;
    transform: translate(-50%, 0);
    animation: grab-attention 2s;
    transition: transform .4s;
    transform: rotate(180deg);
}
.collapseTurn {
    transform: rotate(0deg);
}
@keyframes grab-attention {
    0% {
        transform: scale(1);
        transform: rotate(0deg);
    }
    50% {
        transform: scale(2);
        transform: rotate(0deg);
    }
    100% {
        transform: scale(1);
        transform: rotate(0deg);
    }
}
.info__windows {
    max-width: 300px;
}
.rating h3 {
    margin-bottom: 0;
}
.info__directions__link {
    font-size: 16px;
    font-weight: 400;
    margin: 5px 0 0;
}

/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:800px) {
    .individual__map__container {
        height: 400px;
        margin-top: 40px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:530px) {
	.individual__map__div {
		height: 100vh;
	}
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:440px) {
/*    .individual__map__div, .all__map__div {*/
    .individual__map__div {
		height: calc(100vh - 128px);
	}
}
</style>