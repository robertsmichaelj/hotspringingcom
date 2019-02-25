<template>
    <div class="intro__container">
        <h1 v-if="header" class="intro__header page__h1">{{ header }}</h1>
        <div v-html="text"></div>
    </div>
</template>

<script>
export default {
    props: {
        header: String,
        text: String
    }
}
</script>

<style>
.intro__container {
    margin: 0px auto 0;
    background-color: var(--main-text);
    padding: 40px;
    width: 100%;
    color: #FFF;
    text-align: center;
}
.intro__header {
    
}
.intro__container p {
    max-width: 820px;
    margin: 0px auto 12px auto;
    text-align: center;
    color: #FFF;
    line-height: 23px;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1500px) {
    .intro__container {
        margin-top: 0px;
        width: 100%;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:700px) {
    .intro__container {
        margin: 0;
        padding: 30px 24px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:600px) {
    .intro__container {
        padding: 26px 20px 16px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:500px) {
    
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:374px) {
    .intro__container {
        padding: 24px;
    }
}
</style>