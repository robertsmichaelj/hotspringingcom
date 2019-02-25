<template>
    <header class="site__header" :class="{menuClosed: menuClose}">
        <a class="menu__icon" @click="menuShow" :class="{menuClosed: menuClose}">
            <div class="menu__line"></div>
            <div class="menu__line"></div>
            <div class="menu__line"></div>
        </a>
        <div class="header__logo__container">    
            <div class="header__text">
                <SiteLogo/>
                <HeaderSiteName/>
                <HeaderSiteLinks/>
            </div> 
        </div>
    </header>
</template>

<script>
import SiteLogo from '~/components/header/SiteLogo.vue';
import HeaderSiteName from '~/components/header/HeaderSiteName.vue';
import HeaderSiteLinks from '~/components/header/HeaderSiteLinks.vue';

export default {
    components: {
        HeaderSiteName,
        HeaderSiteLinks,
        SiteLogo
    },
    methods: {
        menuShow: function ($event) {
            this.menuClose = !this.menuClose;
        }
    },
    data () {
        return {
            menuClose: true
        }
    }
}
</script>

<style>
.site__header {
	width: 100%;
	height: 56px;
 	margin: 0 0 0 0;
  	padding: 0;
  	display: flex;
 	flex-direction: row;
  	flex-wrap: nowrap;
  	align-content: center;
  	justify-content: flex-start;
	z-index: 3;
}
.header__logo__container {
    width: 100%;
}
.header__text {
    height: 100%;
	margin: 0 0 0 20px;
  	padding: 0 0 0 0;
  	display: flex;
 	flex-direction: row;
  	flex-wrap: nowrap;
  	align-content: center;
  	justify-content: center;
}
header, .slideMenu {
	background-color: #FFF;
}
.menu__icon {
	display: none;
}
.show__menu {
	left: 0;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1050px) {
	.site__header {
		justify-content: center;
        height: 46px;
	}
	.site__header img {
		margin-top: 2px;
		align-self: center;
		width: 26px;
	}
    .menu__icon {
        z-index: 7;
        width: 32px;
		height: 32px;
		align-self: center;
		position: absolute;
		left: 4px;
		margin: 0 0 0 0;
		padding: 0 0 0 0;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		cursor: pointer;
	}
	.menu__line {
		width: 22px;
		height: 2px;
		background: #64706c;
		margin: 3px auto;
        cursor: pointer;
	}
    .show__menu {
        left: 0;
        z-index: 10;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:390px) {
    .header__text {
        width: auto;
        margin: 0;
    }
    .header__logo__container {
        margin-left: 20px;
    }
}
</style>