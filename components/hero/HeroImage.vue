<template>
    
<!--    <img class="hero__header__img" :src="image.data.full_url">-->
    <picture class="hero__header__img">
        <source :srcset="image.data.full_url" media="(min-width: 1501px)">
        <source :srcset="'https://www.hotspringing.com/directus/public/thumbnail/_/1500/600/crop/good/' + image.filename" media="(min-width: 900px) and (max-width: 1500px)">
        <source :srcset="'https://www.hotspringing.com/directus/public/thumbnail/_/900/360/crop/good/' + image.filename" media="(min-width: 900px)">
        <img class="hero__header__img" :src="'https://www.hotspringing.com/directus/public/thumbnail/_/900/360/crop/good/' + image.filename"/>
    </picture>
</template>

<script>
export default {
    props: {
        image: Object
    }
}
</script>

<style>
.hero__header__img {
    max-width: 2300px;
    max-height: 800px;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
    -ms-flex-item-align: center;
    align-self: center;
    display: block;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1000px) {
    .hero__header__img {
        min-height: 360px;
    }
}
</style>