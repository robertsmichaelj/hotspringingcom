<template>
    <div class="header__links">
        <div class="header__link">
            <nuxt-link to="/" class="header__link__header">Home</nuxt-link>
        </div>
        <div class="header__link">
            <nuxt-link to="/all" class="header__link__header">Find Hot Springs</nuxt-link>
        </div>
        <div class="header__link" v-if="sitewide.show_articles_section">
            <h3 class="header__link__header">Info &amp; Tips</h3>
            <div class="header__drop__down">
                <div class="header__drop__down__inner">
                    <nuxt-link to="/tips" class="drop__down__link">Hot Springs Tips</nuxt-link>
                    <nuxt-link to="/trips" class="drop__down__link">Trips</nuxt-link>
                </div>
            </div>
        </div>
        <div class="header__link">
            <nuxt-link to="/about-us" class="header__link__header">About Us</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        makelink: function (str) {
            return "";
        }
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        }
    }
}
</script>

<style>
.header__links {
	width: auto;
    z-index: 5;
 	margin: 0 0 0 auto;
  	padding: 0 30px 0 0;
  	display: flex;
 	flex-direction: row;
  	flex-wrap: nowrap;
  	align-content: center;
  	justify-content: center;
}
.header__link {
    display: flex;
 	flex-direction: column;
  	flex-wrap: wrap;
  	align-content: center;
  	justify-content: center;
    height: 100%;
    position: relative;
    cursor: pointer;
}
.header__link__header {
	align-self: center;
	color: var(--main-text);
	width: auto;
	padding: 10px 30px;
	text-align: center;
	transition: font-size .5s;
	text-transform: uppercase;
	font-size: 16px;
    font-weight: 400;
	height: 60%;
    
}
.header__link__header:hover {
    color: var(--dark-teal);
}
.header__drop__down {
    position: absolute;
    top: 56px;
    left: 0;
    min-width: 180px;
    background: #FFF;
    z-index: 10;
    transition: max-height .5s;
    display: none;
}
.header__drop__down__inner {
    padding: 10px;
}
.header__link:hover > .header__drop__down {
    display: flex;
}
.drop__down__link {
    margin: 6px 5px 8px;
    color: var(--main-text);
}
.drop__down__link:hover {
    color: var(--dark-teal);
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1050px) {
    .menuClosed .header__links {
        left: -230px;
    }
    .header__links {
		position: fixed;
		top: 46px;
		left: 0;
		width: 230px;
		height: 100%;
		transition: left .8s;
		padding: 20px;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
        background-color: #FFF;
        border-right: 1px solid var(--main-text);
	}
    .header__links .header__link {
        height: auto;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
    }
    .header__link__header {
        text-align: left;
         width: 100%;
        height: auto;
        padding: 7px 0;
    }
    .header__links a {
		align-self: center;
		width: 100%;
		text-align: left;
		padding: 7px 0;
		transition: font-size .5s;
		text-transform: uppercase;
		font-size: 16px;
		height: auto;
        -webkit-transform: translate3d(0,0,0);
		-webkit-backface-visibility: hidden;
    }
    .header__drop__down {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
    }
    .header__drop__down__inner {
        padding: 0 14px;
    }
    .header__links .drop__down__link {
        padding: 0;
        margin: 0 0 9px 0;
    }
    .header__links .drop__down__link:nth-last-of-type(1) {
        margin: 0 0 3px 0;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:700px) {
    .header__links {
         top: 46px;   
    }
}
</style>