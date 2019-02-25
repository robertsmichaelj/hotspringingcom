<template>
    <div class="content">
        <Hero :hero="page"/>
        <IntroSection v-if="page.show_page_intro" :header="page.page_intro_header_text" :text="page.page_intro_text_content"/>
<!--        <div class="all__side__by__side">-->
            <div class="map__collapse all__side" :class="{collapsed: isCollapsed}">
                <div class="map__collapse__inner">
                    <MapContainerFull :mapData="map" :marks="pins(springs)"/>
                </div>
                <div class="map__collapse__expand__div" @click="mapCollapse">
                    <div class="map__collapse__expand" :class="{collapseTurn: isCollapsed}"/>
                </div>
            </div>
            <div class="all__content">
                <SectionHeader :header="page.section_header_1" :anchorText="page.section_header_1_link_text" :link="page.section_header_1_link"/>
                <GridSection :cells="springs"/>
            </div>
<!--        </div>-->
    </div>
</template>

<script>
    import Hero from '~/components/hero/Hero.vue';
    import IntroSection from '~/components/general/IntroSection.vue';
    import SectionHeader from '~/components/general/SectionHeader.vue';
    import GridSection from '~/components/grids/GridSection.vue';
    import MapContainerFull from '~/components/maps/MapContainerFull.vue';
    
    export default {
        components: {
            Hero,
            IntroSection,
            SectionHeader,
            GridSection,
            MapContainerFull
        },
        data () {
            return {
                isCollapsed: true
            }
        },
        methods: {
            mapCollapse: function ($event) {
                this.isCollapsed = !this.isCollapsed;
            },
            pins: function (spr) {
                let markers = [];
                for (let spring in spr) {
                    let sp = spr[spring];
                    let marker = {
                        details: {
                            name: sp.name,
                            rating: sp.rating,
                            walkingDist: sp.walking_distance_summer,
                            parkingCost: sp.parking_cost,
                            seasons: sp.name,
                            description: sp.description,
                            latitude: sp.latitude,
                            longitude: sp.longitude
                        },
                        position: {
                            lat: parseFloat(sp.latitude), 
                            lng: parseFloat(sp.longitude)
                        }
                    }
                    markers.push(marker);
                };
                return markers;
            }
        },
        computed: {
            springs: function () {
                return this.$store.state.springs
            },
            page: function () {
                return this.$store.state.pagetype.hotsprings
            },
            map: function () {
                return {
                    center: {
                        latitude: 44.972681,
                        longitude: -114.112545
                    },
                    zoom: 9
                }
            }
        }
    }
</script>

<style>
.all__content {
    margin: 0 auto;
    flex: 1;
    padding: 0 20px;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1000px) {
    .all__content {
        padding: 0 6px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:640px) {
    .all__content {
        padding: 0;
    }
}
</style>