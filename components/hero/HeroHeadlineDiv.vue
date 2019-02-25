<template>
    <div class="hero__headline__div">
        <div class="large__overlay hero__overlay"></div>
        <h2 v-if="headlines.article_title" class="hero__headline">{{ headlines.article_title }}</h2>
        <h2 v-if="headlines.article_title_second_line" class="hero__headline">{{ headlines.article_title_second_line }}</h2>
        <h2 v-else-if="headlines.name" class="hero__headline">{{ checkName(headlines.name) }}</h2>
        <div v-if="headlines.hero_sub_header_text" class="hero__sub__headline__div">
            <h3 v-if="headlines.hero_sub_header_text !== null" class="hero__sub__headline">{{ headlines.hero_sub_header_text }}</h3>
            <h4 v-if="headlines.article_author" class="hero__author">By: {{ headlines.article_author }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headlines: Object
    },
    methods: {
        checkName: function (name) {
            if (name.toLowerCase().indexOf("spring") >= 0) {
                return name;
            } else {
                return name + " Hot Springs";
            }
        }
    }
}
</script>

<style scoped>
.hero__headline__div {
	position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    width: auto;
    z-index: 2;
    padding: 20px;
    max-width: 620px;
    width: 84%;
}
.hero__headline {
	color: #FFF;
    font-weight: 300;
    font-size: 36px;
    line-height: 40px;
	text-shadow: 3px 3px 2px #3c3c3c;
	margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    z-index: 3;
}
.hero__sub__headline__div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 20px;
}
.hero__sub__headline {
	color: #FFF;
    font-weight: 100;
    font-size: 18px;
    line-height: 25px;
	margin: 6px auto 2px;
    text-align: center;
    z-index: 3;
    width: 100%;
}
.hero__headline__div a {
	text-align: center;
	margin: 15px auto 5px;
    width: auto;
    padding: 5px 10px;
	text-transform: uppercase;
	color: var(--main-text);
	font-weight: 600;
    background-color: #FED330;
    z-index: 3;
    font-size: 16px;
}
.hero__text {
    position: absolute;
    bottom: 0;
    left: 0;
 	margin: 0;
  	padding: 10px;
	text-align: right;
    opacity: 1;
    width: 100%;
    z-index: 3;
    display: none;
}
.hero__text__inner {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.hero__author {
	margin: 8px 0 0px;
    text-align: center;
    color: #FFF;
    z-index: 2;
    font-weight: 100;
    font-size: 14px;
}
/*
.hero__text h2 {
	margin: 0 0 8px;
	text-transform: uppercase;
    color: #FFF;
}
*/
/*
.hero__text h3 {
    color: #FFF;
	margin: 0 0 4px;
    text-align: left;
    font-weight: 300;
    font-size: 18px;
}
*/

.hero__text p {
	margin: 5px 0 0;
	max-width: 300px;
    font-weight: 400;
    text-align: left;
    color: #FFF;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:700px) {
    .hero__headline__div {
        min-width: 70%;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:600px) {
    .hero__headline {
        font-size: 28px;
        line-height: 28px;
    }
    .hero__sub__headline__div {
        padding: 0 10px;
    }
    .hero__text h2, .hero__text h3, .hero__text h4, .hero__text p, .hero__learn__more {
        margin-bottom: 2px;
        margin-top: 3px;
    }
    .hero__sub__headline {
        font-weight: 300;
        font-size: 17px;
        line-height: 23px;
    }
    .hero__headline__div a {
        font-size: 15px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:500px) {
    .hero__headline__div {
        min-width: 88%;
        padding: 14px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:440px) {
    .hero__headline {
        font-size: 24px;
        line-height: 27px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:390px) {
    .hero__text {
        margin: 10px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:374px) {
    .hero__text {
        padding: 7px;
    }
    .hero__text h4 {
        margin-top: 4px;
    }
}
</style>