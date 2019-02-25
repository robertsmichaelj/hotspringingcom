<template>
    <nuxt-link class="header__main header__link header__site__name" to="/">HotSpringing.com</nuxt-link>
</template>

<script>

</script>

<style>
.header__main {
	height: 100%;
	display: flex;
 	flex-direction: row;
  	flex-wrap: wrap;
  	align-content: center;
  	justify-content: center;
	margin-left: 8px;
    color: var(--dark-text);
}
.header__main span {
	text-align: center;
}
.header__site__name {
    margin: 0 0 0 4px;
    font-weight: 300;
    font-size: 24px;
    line-height: 27px;
	text-transform: uppercase;
	align-self: center;
	text-align: center;
	letter-spacing: 1px;
	position: relative;
    padding: 0;
  	display: flex;
 	flex-direction: column;
  	flex-wrap: wrap;
  	align-content: center;
  	justify-content: center;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:700px) {
    .header__site__name {
        margin: 0;
        font-size: 20px;
        line-height: 20px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:600px) {
    .header__main {
		margin-left: -2px;
		margin-right: -6px;
		margin-top: 2px;
	}
    .header__site__name {
        font-size: 20px;
        line-height: 20px;
		letter-spacing: initial;
        margin-right: 3px;
	}
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:500px) {
    .header__site__name {
		order: 1;
		margin-top: 0;
	}
}
</style>