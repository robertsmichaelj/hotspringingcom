<template>
    <div class="content">
        <Hero :hero="page"/>
        <IntroSection v-if="page.show_page_intro" :header="page.page_intro_header_text" :text="page.page_intro_text_content"/>
        
        <SectionHeader :header="'Most Popular Hot Springs'" :anchorText="'See All Hot Springs'" :link="'/all'"/>
        <GridSection :cells="rating"/>
        
        <SectionHeader :header="'Hot Springs Within 2 Hours Of Boise'" :anchorText="'See All Hot Springs'" :link="'/all'"/>
        <GridSection :cells="within2Hours"/>
        
        <SectionHeader :header="'Recent Articles'" :anchorText="'See All Articles'" :link="'/articles'" v-if="sitewide.show_articles_section"/>
        <ArticleSection :cells="articles" v-if="sitewide.show_articles_section"/>  
              
        <SectionHeader :header="'Highest Rated Hot Springs'" :anchorText="'See All Hot Springs'" :link="'/all'"/>
        <GridSection :cells="popular"/>
    </div>
</template>

<script>
    import Hero from '~/components/hero/Hero.vue';
    import IntroSection from '~/components/general/IntroSection.vue';
    import SectionHeader from '~/components/general/SectionHeader.vue';
    import GridSection from '~/components/grids/GridSection.vue';
    import ArticleSection from '~/components/article/ArticleSection.vue';
    
    export default {
        components: {
            Hero,
            IntroSection,
            SectionHeader,
            GridSection,
            ArticleSection
        },
        computed: {
            sitewide: function () {
                return this.$store.state.sitewide
            },
            springs: function () {
                return this.$store.state.springs
            },
            page: function () {
                return this.$store.state.pagetype.index
            },
            popular: function () {
                return this.$store.state.popular
            },
            rating: function () {
                return this.$store.state.rating
            },
            articles: function () {
                return this.$store.state.articles
            },
            within2Hours: function () {
                return this.$store.state.within2Hours
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

<style>

</style>