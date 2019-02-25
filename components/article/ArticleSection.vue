<template>
    <div class="site__section article__section">
        <nuxt-link v-for="(cell, index) in cells" :key="index" :to="'/articles/' + cell.condensed_title"  class="grid__cell article__trip__cell">

                <div class="grid__image article__image" :style="{'backgroundImage': 'url(' + cell.article_thumbnail.data.full_url + ')'}"></div>

            <div class="grid__text article__cell__text">
                <h3 class="article__trip__cell__header">{{ cell.article_title }}</h3>
                <p class="grid__description__text">{{ cell.short_description }}</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        cells: Object
    }
}
</script>

<style>
.article__section {
    width: 100%;
    max-width: 1500px;
    height: auto;
    margin: 6px auto 20px;
    padding: 0 0 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    box-sizing: border-box;
}
.article__section .article__trip__cell {
    flex: 1 1 25%;
    max-width: 25%;
    padding: 0 8px;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-line-pack: center;
    align-content: center;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.article__section .article__image {
    height: 260px;
}
.article__section p {
    font-weight: 300;
    line-height: 21px;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1100px) {
    .article__section .article__image {
        height: calc(100vw * 360.0 / 1440.0);
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:600px) {
    .article__section .article__trip__cell {
        width: 100%;
        max-width: 100%;
        padding: 0 8px;
        height: auto;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        cursor: pointer;
        box-sizing: border-box;
    }
    .article__section .article__image {
        height: calc(100vw * 500.0 / 1440.0);
    }
    .article__section .grid__description__text {
        margin-top: 0;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:600px) {
    .article__section .article__image {
        height: calc(100vw * 700.0 / 1440.0);
    }
}  
</style>