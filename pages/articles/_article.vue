<template>
    <div>
       
        <Hero :hero="articles[$route.params.article]"/>
        <IntroSection v-if="articles[$route.params.article].intro_header || articles[$route.params.article].intro_text" :text="articles[$route.params.article].intro_text"/>
<!--
        <div class="map__collapse all__side" :class="{collapsed: isCollapsed}">
            <div class="map__collapse__inner">
                <MapContainerFull :mapData="map" :marks="pins(springs)"/>
            </div>
            <div class="map__collapse__expand__div" @click="mapCollapse">
                <div class="map__collapse__expand" :class="{collapseTurn: isCollapsed}"/>
            </div>
        </div>
-->
<!--        <Comments :data="$route.params.name"/>-->
    </div>
</template>

<script>
    import Hero from '~/components/hero/Hero.vue';
    import IntroSection from '~/components/general/IntroSection.vue';
    import SectionHeader from '~/components/general/SectionHeader.vue';
    import ArticleSection from '~/components/article/ArticleSection.vue';
    import MapContainerFull from '~/components/maps/MapContainerFull.vue';
    
    export default {
        components: {
            Hero,
            IntroSection,
            SectionHeader,
            ArticleSection,
            MapContainerFull
        },
        computed: {
            springs: function () {
                return this.$store.state.springs
            },
            articles: function () {
                return this.$store.state.articles
            }
        },
        head () {
            return {
                title: this.$store.state.articles[this.$route.params.article].article_title + " " + this.$store.state.articles[this.$route.params.article].article_title_second_line + " | HotSpringing.com",
                meta: [
                    {hid: 'description', name: 'description', content: this.$store.state.articles[this.$route.params.article].short_description}
                ]
            }
        }
    }
</script>

<style>

/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:800px) {
	  
}
</style>