<template>
  <div class="main__index vue__container" v-cloak>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
    import Header from '~/components/header/Header.vue';
    import Footer from '~/components/footer/Footer.vue';
    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
:root {
    --font-headers: Roboto, Arial, sans-serif;
    --font-paras: Roboto, Arial, sans-serif;
    --light-blue: #C6E3E5;
    --dark-text: #2A3132;
    --dark-teal: #336B87;
    --dark-red: #763626;
    --medium-red: #DD0701;
    --light-grey: #EAEBEE;
    --blue-1: #DEE1E9;
    --blue-2: #B0BDCF;
    --main-text: #2C3C45;
    --dark-grey: #64706c;
    --dark-brown: #252024;
    --green: #3D5A35;
    --link-blue: #3C99DC;
}
.temp__hide {
    display: none !important;
}
body {
	margin: 0;
	padding: 0;
/*
	overflow: scroll;
    overflow-x: hidden;
*/
    color: var(--main-text);
    font-family: var(--font-paras);
    -webkit-overflow-scrolling: touch;
}
body, body * {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	position: relative;
}
body a {
	margin: 0;
	padding: 0;
	text-decoration: none;
	display: block;
}

 h1 {
    font-family: var(--font-headers);
    font-size: 30px;
    line-height: 32px;
    font-weight: 300;
    max-width: 920px;
    text-align: center;
    margin: 0 auto 15px;
    color: #FFF;
	-ms-flex-item-align: center;
	align-self: center;
	text-align: center;
	letter-spacing: 1px;
	position: relative;
    padding: 0;
  	display: -webkit-box;
  	display: -ms-flexbox;
  	display: flex;
 	-webkit-box-orient: vertical;
 	-webkit-box-direction: normal;
 	-ms-flex-direction: column;
 	flex-direction: column;
  	-ms-flex-wrap: wrap;
  	flex-wrap: wrap;
  	-ms-flex-line-pack: center;
  	align-content: center;
  	-webkit-box-pack: center;
  	-ms-flex-pack: center;
  	justify-content: center;
}
h2 {
    font-family: var(--font-headers);
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
	margin: 40px 0 0;
	padding: 0;
    color: var(--main-text);
    text-align: left;
	text-transform: uppercase;
	margin: 0px 10px 0 0;
}
h3 {
    font-family: var(--font-headers);
    font-size: 17px;
    line-height: 17px;
    font-weight: 400;
	margin: 0 0 4px;
	padding: 0;
    color: var(--main-text);
}
h4 {
    font-family: var(--font-headers);
    font-size: 15px;
    line-height: 16px;
    font-weight: 400;
	margin: 1px 0 0 0;
	padding: 0;
    color: var(--main-text);
}
h4 span {
	font-weight: 500;
    font-size: 14px;
}
h5 {
    font-family: var(--font-headers);
    font-size: 15px;
    line-height: 16px;
    font-weight: 600;
	margin: 0;
	padding: 0;
}
h6 {
    color: #FFF;
	text-align: center;
	font-weight: 400;
	font-size: 14px;
    line-height: 14px;
    margin: 0;
}
p {
    font-family: var(--font-paras);
    font-size: 15px;
    line-height: 20px;
    font-weight: 300;
	margin: 0;
	padding: 0;
    color: var(--main-text);
    letter-spacing: .5px;
}
ul, li {
    font-family: var(--font-paras);
    font-size: 16px;
    line-height: 18px;
    font-weight: 300;
    color: var(--main-text);
}
.inline__link {
    display: inline-block;
}

.vue__container {
	width: 100vw;
    max-width: 100%;
    min-height: 100vh;
 	margin: 0;
  	display: -webkit-box;
  	display: -ms-flexbox;
  	display: flex;
 	-webkit-box-orient: vertical;
 	-webkit-box-direction: normal;
 	-ms-flex-direction: column;
 	flex-direction: column;
  	-ms-flex-wrap: nowrap;
  	flex-wrap: nowrap;
/*	overflow: hidden;*/
}
.content {
    min-height: 90vh;
}
.site__section {
    padding: 45px 35px;
    margin: 0 auto;
}
/*
.site__section:nth-of-type(odd) {
    background: var(--light-grey);
}
*/

/*RATING STYLES*/
.rating {
	margin: 0 0 4px;
  	padding: 0 0 0 0;
  	display: -webkit-box;
  	display: -ms-flexbox;
  	display: flex;
 	-webkit-box-orient: horizontal;
 	-webkit-box-direction: normal;
 	-ms-flex-direction: row;
 	flex-direction: row;
  	-ms-flex-wrap: nowrap;
  	flex-wrap: nowrap;
  	-ms-flex-line-pack: center;
  	align-content: center;
  	-webkit-box-pack: start;
  	-ms-flex-pack: start;
  	justify-content: flex-start;
	width: 100%;
	position: relative;
	overflow: hidden;
}
.rating h4 {
    white-space: nowrap;
}
.rating__star__container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
 	-webkit-box-orient: horizontal;
 	-webkit-box-direction: normal;
 	-ms-flex-direction: row;
 	flex-direction: row;
  	-ms-flex-wrap: nowrap;
  	flex-wrap: nowrap;
  	-ms-flex-line-pack: center;
  	align-content: center;
  	-webkit-box-pack: start;
  	-ms-flex-pack: start;
  	justify-content: flex-start;
	width: 80px;
	overflow: hidden;
    -webkit-transition: right .5s;
    transition: right .5s;
    background: #F9B30C;
    position: relative;
    -ms-flex-item-align: center;
    align-self: center;
    margin: 0 0 0 5px;
    height: 15px;
}
.ratingClear {
	background: transparent;
}
.ratingBlack {
    position: absolute;
    right: 0;
    top: 0;
}
.rating__color {
	z-index: 1;
	background: #FFF;
	height: 15px;
	width: 80px;
	position: absolute;
	top: 0;
	right: 0px;
	-webkit-transition: all 2s;
	transition: all 2s;
	display: block;
	opacity: .75;
}
.ratingMapColor {
	left: 80px;
	-webkit-transition: left 1s;
	transition: left 1s;
}
.rating__colorClear {
	background: #000;
}
.rating img {
	height: 100%;
	width: 100%;
	z-index: 2;
}
/*FADE OUT*/
.fadeOut {
    opacity: 0 !important;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1050px) {
    .site__section {
        padding: 35px 15px;
        margin: 0 auto;
    }
	.header__logo__2 {
		display: block;
	}
    h1 {
        font-size: 22px;
        line-height: 22px;
        letter-spacing: 2px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:600px) {
	h1 {
		letter-spacing: 1px;
        font-size: 23px;
        line-height: 26px;
        font-weight: 400;
	}
    h2 {
        font-size: 18px;
        line-height: 20px;
		letter-spacing: initial;
        margin-right: 6px;
        width: 100%;
	}
    p {
        font-size: 15px;
        line-height: 19px;
    }
    .site__section {
        padding: 20px 10px 30px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:500px) {
    .site__section {
        padding: 20px 5px;
    }
    .intro__container {
        padding: 14px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:390px) {
    h1 {
        font-size: 19px;
        line-height: 20px;
        letter-spacing: 2px;
    }
    .menu__icon {
		width: 30px;
		height: 35px;
		position: absolute;
		left: 5px;
		margin-right: 0px;
	}
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:374px) {
    h1 {
		font-size: 18px;
        line-height: 18px;
        letter-spacing: 1px;
	}
    .site__section {
        padding: 20px 5px 30px;
    }
}
</style>
