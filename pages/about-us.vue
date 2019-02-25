<template>
    <div>
        <Hero :hero="page"/>
        <div class="about site__section">
            <TextContentCell :text="page.text_area_1" :image="page.text_area_1_image.data.full_url"/>
            <TextContentCell :text="page.text_area_2" :image="page.text_area_2_image.data.full_url"/>
            <TextContentCell :text="page.text_area_3_html" :image="page.text_area_3_image.data.full_url"/>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');

    import Hero from '~/components/hero/Hero.vue';
    import IntroSection from '~/components/general/IntroSection.vue';
    import TextContentCell from '~/components/general/TextContentCell.vue';
    
    export default {
        components: {
            Hero,
            IntroSection,
            TextContentCell
        },
        async asyncData ({ params }) {
            let [sitewide, pagedata] = await Promise.all([
                axios.get("https://www.hotspringing.com/directus/public/_/items/sitewide"),
                axios.get("https://www.hotspringing.com/directus/public/_/items/pages?filter[page_type][eq]=about_us&fields=*.*")
            ])
            return { 
                site: sitewide.data.data[0],
                page: pagedata.data.data[0]
            }
        },
        head () {
            return {
                title: this.$store.state.pagetype.about_us.title_tag,
                meta: [
                    { hid: 'description', name: 'description', content: this.$store.state.pagetype.about_us.description_tag }
                ]
            }
        }
    }
</script>

<style>
.about {
    max-width: 1000px;
    padding: 80px 0 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.contact__form__div {
    padding: 40px 16px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.contact__form__header {
    margin: 0;
}
.contact__form {
    padding: 0 20px;
    overflow: hidden;
    width: 100%;
}
.contact__form__para {
    margin: 14px 0 0;
    line-height: 26px;
}
.contact__form__para a {
    display: inline-block;
}
.contact__form__cell {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    margin: 14px 0;
}
.contact__form__title {
    margin: 0 10px 0 0;
    white-space: nowrap;
}
.contact__form input {
    min-height: 30px;
    width: 100%;
    padding: 3px 5px;
    border-color: --var(main-text);
    border-width: 1px;
}
.contact__form__div textarea {
    min-height: 50px;
    width: 100%;
    padding: 3px 5px;
    border-color: --var(main-text) !important;
    border-width: 1px;
}
.contact__form__buttons__messages {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-end;
}
.contact__form__button {
    align-self: flex-end;
    height: 36px;
    border-radius: 10px;
    font-size: 16px;
    padding: 4px 10px;
    cursor: pointer;
}
.contact__form__status {
    display: none;
    text-align: right;
    margin: 10px 0 0;
}
.contact__form__success {
    font-weight: 700;
    font-size: 18px;
}
.contact__form__error {
    color: red;
}
</style>