<template>
    <div class="hero">
        <div class="hero__video__img__container">
            <div v-if="hero.hero_show_video" class="large__overlay"></div>
            <HeroVideo v-if="hero.hero_show_video" :video="hero.hero_background_video"/>
            <HeroImage v-else-if="!hero.hero_show_video && hero.hero_background_image !== null" :image="hero.hero_background_image"/>
        </div>
        <HeroHeadlineDiv :headlines="hero"/>
    </div>
</template>

<script>
import HeroVideo from '~/components/hero/HeroVideo.vue';
import HeroImage from '~/components/hero/HeroImage.vue';
import HeroHeadlineDiv from '~/components/hero/HeroHeadlineDiv.vue';

export default {
    components: {
        HeroVideo,
        HeroImage,
        HeroHeadlineDiv
    },
    props: {
        hero: Object
    }
}
</script>

<style>
.hero {
    width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
 	margin: 0 0 0 0;
  	padding: 0 0 0 0;
  	display: -webkit-box;
  	display: -ms-flexbox;
  	display: flex;
 	-webkit-box-orient: horizontal;
 	-webkit-box-direction: normal;
 	-ms-flex-direction: row;
 	flex-direction: row;
  	-ms-flex-wrap: wrap;
  	flex-wrap: wrap;
  	-webkit-box-pack: start;
  	-ms-flex-pack: start;
  	justify-content: flex-start;
 	-ms-flex-line-pack: end;
 	align-content: flex-end;
	-webkit-box-align: end;
	-ms-flex-align: end;
	align-items: flex-end;
/*    min-height: 500px;*/
}
.large__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: .3;
    transition: .2s opacity, .2s background-color;
    z-index: 2;
    min-height: 100%;
}
.hero .hero__overlay {
    opacity: .6;
    min-height: 100%;
}
.hero__video__img__container {
    position: relative;
    width: 100%;
/*    height: 100%;*/
/*
    max-height: 600px;
    min-height: 600px;
*/
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.hero .rating {
  	-webkit-box-pack: start;
  	-ms-flex-pack: start;
  	justify-content: flex-start;
    -ms-flex-item-align: end;
    align-self: flex-end;
	margin-left: 0;
    display: none;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1000px) {
    
/*
    .hero__video__img__container, .hero, .hero .large__overlay {
        min-height: 400px;
        max-height: 400px;
    }
*/
/*
    .hero .hero__overlay {
        min-height: 100%;
    }
*/
}
</style>