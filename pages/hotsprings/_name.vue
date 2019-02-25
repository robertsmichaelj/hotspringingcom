<template>
    <div>
        <Hero :hero="springs[$route.params.name]"/>
        <SpringsTextAndGauges :data="springs[$route.params.name]"/>
<!--        <SpringsTripReportCells/>-->
        <ImageGallery :imgs="springs[$route.params.name]"/>
        <MapContainerFull :mapData="map(springs[$route.params.name])" :marks="pins(springs[$route.params.name])"/>
        <Comments :data="$route.params.name"/>
    </div>
</template>

<script>
    import Hero from '~/components/hero/Hero.vue';
    import SpringsTextAndGauges from '~/components/springs/SpringsTextAndGauges.vue';
    import SpringsTripReportCells from '~/components/springs/SpringsTripReportCells.vue';
    import ImageGallery from '~/components/springs/ImageGallery.vue';
    import MapContainerFull from '~/components/maps/MapContainerFull.vue';
    import Comments from '~/components/springs/Comments.vue';
    
    export default {
        components: {
            Hero,
            SpringsTextAndGauges,
            SpringsTripReportCells,
            ImageGallery,
            MapContainerFull,
            Comments
        },
        computed: {
            springs: function () {
                return this.$store.state.springs
            },
            popular: function () {
                return this.$store.state.popular.data
            },
            rating: function () {
                return this.$store.state.rating.data
            }
        },
        methods: {
            pins: function (spr) {
                let markers = [];
                let marker = {
                    details: {
                        name: spr.name,
                        rating: spr.rating,
                        walkingDist: spr.walking_distance_summer,
                        parkingCost: spr.parking_cost,
                        seasons: spr.name,
                        description: spr.description,
                        latitude: spr.latitude,
                        longitude: spr.longitude
                    },
                    position: {
                        lat: parseFloat(spr.latitude), 
                        lng: parseFloat(spr.longitude)
                    }
                }
                markers.push(marker);
                return markers;
            },
            map: function (spring) {
                return {
                    center: {
                        latitude: spring.latitude,
                        longitude: spring.longitude
                    },
                    zoom: 9
                }
            }
        },
        head () {
            return {
                title: this.$store.state.springs[this.$route.params.name].name + " Hot Springs - " + this.$store.state.springs[this.$route.params.name].state + " - " + this.$store.state.springs[this.$route.params.name].region + " region. | HotSpringing.com",
                meta: [
                    {hid: 'description', name: 'description', content: this.$store.state.springs[this.$route.params.name].short_description}
                ]
            }
        }
    }
</script>

<style>

</style>