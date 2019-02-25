<template>
    <div class="comments comment__section">
        <vue-disqus shortname="hotspringing" :identifier="data" :url="'https://www.hotspringing.com/hotsprings/' + data"></vue-disqus>
    </div>
</template>

<script>

export default {
    props: {
        data: String
    }
}
</script>

<style>
.comment__section {
    max-width: 1000px;
    width: 100%;
    margin: 20px auto 30px;
    padding: 20px;
}
.disqus_thread {
    width: 100%;
}
.comment__section__header {
	margin: 0px 0 10px;
}
.comment__section__para {
	margin: 10px 0 20px;
} 
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:600px) {
	.comment__section {
        margin: 20px auto 0;
        padding: 10px 14px;
    }
}
</style>