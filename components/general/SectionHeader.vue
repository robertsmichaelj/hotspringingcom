<template>
    <div class="section__header">
        <h2>{{ header }}</h2>
        <div class="section__header__link">
            <nuxt-link v-if="anchorText !== null && link !== null" :to="link">{{ anchorText }}</nuxt-link>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        header: String,
        anchorText: String,
        link: String
    }
}
</script>

<style>
.section__header {
	width: 100%;
	max-width: 1500px;
 	margin: 40px auto 10px;
  	padding: 0px 14px 0;
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
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  	-webkit-box-pack: justify;
  	-ms-flex-pack: justify;
  	justify-content: space-between;
}
.section__header__link {
 	margin: auto 0 0 auto;
  	padding: 5px 5px 0 0;
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
  	-webkit-box-pack: end;
  	-ms-flex-pack: end;
  	justify-content: flex-end;
}
.section__header__link a {
	text-decoration: underline;
	color: var(--main-text);
	margin: 0 4px;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1200px) {
    .section__header {
        padding: 0px 8px 0;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:600px) {
    .section__header {
        align-content: flex-end;
        align-items: flex-end;
        margin-top: 26px;
    }
    .section__header__link {
        padding-top: 0;
        min-width: 140px;
    }
    .section__header a {
        font-size: 15px;
        line-height: 15px;
	}
    .section__header .section__header__link {
        margin-top: 0;
	}
	.section__header .section__header__link a {
/*		margin: 0 0 3px 0;*/
        text-align: right;
	}
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:470px) {
    .section__header__link {
        min-width: 0;
    }
}

</style>