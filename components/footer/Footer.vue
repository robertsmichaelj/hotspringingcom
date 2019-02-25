<template>
    <footer class="site__footer">
        <div class="footer__sections">
            <div class="footer__section footer__section--large">
                <nuxt-link to="/all" class="footer__header">All Hot Springs</nuxt-link>
                <div class="footer__links__container">
                    <div v-for="(rows, index) in getArrays(springsArray)" class="footer__links__cells">
                        <nuxt-link v-for="(spring, index) in rows" :key="index" :to="'/hotsprings/' + spring.condensed_page_name">{{ spring.name }}</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="footer__section" v-if="sitewide.show_articles_section">
                <h3 class="footer__header">Resources</h3>
                <div class="footer__links__container">
                    <nuxt-link to="/tips">Hot Springs Tips</nuxt-link>
                    <nuxt-link to="/trips">Trip Reports</nuxt-link>
                </div>
            </div>
            <div class="footer__section">
                <h3 class="footer__header">Website</h3>
                <div class="footer__links__container">
                    <nuxt-link to="/about-us">About / Contact Us</nuxt-link>
                    <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                </div>
            </div>
            <div class="footer__section">
                <h3 class="footer__header">Connect With Us</h3>
                <div class="footer__links__container">
                    <div class="footer__social__icons">
                        <a href="https://www.instagram.com/hotspringing/" class="footer__social__link" target="_blank" rel="noreferrer">
                            <img src="https://www.hotspringing.com/directus/public/uploads/_/originals/instagram.png" alt="Instagram Link" class="footer__social__img">
                        </a>
                        <a href="https://www.facebook.com/HotSpringingcom-1352446561552324/" class="footer__social__link" target="_blank" rel="noreferrer">
                            <img src="https://www.hotspringing.com/directus/public/uploads/_/originals/facebook.png" alt="Facebook Link" class="footer__social__img">
                        </a>
<!--
                        <a href="" class="footer__social__link" target="_blank" rel="noreferrer">
                            <img src="https://www.hotspringing.com/directus/public/uploads/_/originals/youtube.png" alt="Youtube Link" class="footer__social__img">
                        </a>
-->
                    </div>
                </div>
            </div>
        </div>
        <hr class="footer__sections"/>
        <p class="site__footer__para">{{ getYear() }}</p>
    </footer>
</template>

<script>
export default {
    props: {
        name: String
    },
    methods: {
        getYear: function () {
            return "Ⓒ Mike Roberts " + (new Date()).getFullYear()
        },
        getArrays: function (arr) {
            let arrays = [];
            let size = 15;
            while (arr.length > 0) {
                arrays.push(arr.splice(0, size));
            }
            return arrays;
        }
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        rowCount: function () {     
            return Math.ceil(Object.keys(this.$store.state.springs).length / 15);
        },
        springs: function () {
            return this.$store.state.springs
        },
        springsArray: function () {
            return Object.values(this.$store.state.springs);
        },
        springsGroups: function () {
            return Array.from(Array(Math.ceil(Object.values(this.$store.state.springs).length / 15)).keys())
        }
    }
}
</script>

<style>
.site__footer {
	background: var(--main-text);
 	margin: 40px 0 0 0;
  	padding: 30px 20px;
  	display: -webkit-box;
  	display: -ms-flexbox;
  	display: flex;
 	flex-direction: column;
  	flex-wrap: wrap;
  	align-content: center;
  	justify-content: center;
    position: relative;
    width: 100%;
    color: #FFF;
    overflow: hidden;
}
.footer__sections {
    width: 100%;
    display: flex;
 	flex-direction: row;
  	flex-wrap: wrap;
  	align-content: center;
  	justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto 20px;
}
.footer__section {
    flex: 1 1 auto;
    margin: 16px 10px 0;
    overflow: hidden;
    display: flex;
 	flex-direction: column;
  	flex-wrap: wrap;
  	align-content: flex-start;
  	justify-content: flex-start;
    min-width: 160px;
}
.footer__section--large {
    
}
.footer__section--large .footer__links__container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.footer__links__cells {
    padding: 0 14px 0 0;
    flex: 1;
}

.footer__section a {
    color: #FFF;
    font-weight: 100;
    font-size: 15px;
    margin: 8px 0;
}
.footer__section .footer__header {
    color: #FFF;
    font-weight: 400;
    margin: 0 0 8px;
    border-bottom: 1px solid;
    width: 100%;
    font-family: var(--font-headers);
    font-size: 17px;
    line-height: 17px;
}
.footer__social__icons {
    display: flex;
 	flex-direction: row;
  	flex-wrap: nowrap;
}
.footer__section .footer__social__link {
    display: flex;
 	flex-direction: row;
  	flex-wrap: nowrap;
    height: 30px;
    width: auto;
    margin: 3px 12px 3px 0;
}
.footer__social__link p {
    color: #FFF;
    font-weight: 100;
    line-height: 16px;
    font-size: 16px;
    align-self: center;
    margin-left: 6px;
}
.footer__social__img {
    max-width: 30px;
    object-fit: contain;
}
.site__footer hr {
    width: 100%;
    height: 1px;
}
.site__footer__para {
    color: #FFF;
    font-size: 14px;
}
.site__footer__span {
    font-weight: 300;
    font-size: 14px;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:700px) {
    .site__footer {
        padding: 20px 10px;
    }
}
</style>