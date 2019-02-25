<template>
    <div class="content">
        <Hero :hero="page"/>
        <IntroSection v-if="page.show_page_intro" :header="page.page_intro_header_text" :text="page.page_intro_text_content"/>
        <SectionHeader :header="page.section_header_1" :anchorText="page.section_header_1_link_text" :link="page.section_header_1_link"/>
        <ArticleSection :cells="articlesTripsReports"/>
    </div>
</template>


<script>
    import Hero from '~/components/hero/Hero.vue';
    import IntroSection from '~/components/general/IntroSection.vue';
    import SectionHeader from '~/components/general/SectionHeader.vue';
    import ArticleSection from '~/components/article/ArticleSection.vue';
    
    export default {
        components: {
            Hero,
            IntroSection,
            SectionHeader,
            ArticleSection
        },
        computed: {
            springs: function () {
                return this.$store.state.springs
            },
            page: function () {
                return this.$store.state.pagetype.trip_reports
            },
            articles: function () {
                return this.$store.state.articles
            },
            articlesTripsReports: function () {
                return this.$store.state.tripReports
            } 
        },
        head () {
            return {
                title: this.$store.state.pagetype.index.title_tag,
                meta: [
                    { hid: 'description', name: 'description', content: this.$store.state.pagetype.index.description_tag }
                ]
            }
        }
    }
</script>