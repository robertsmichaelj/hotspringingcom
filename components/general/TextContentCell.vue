<template>
    <div class="content__cell">
        <div class="inner__content" v-html="text"></div>
        <div class="inner__content">
            <div class="content__image__div">
                <img :src="image" alt="" class="content__image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: String,
        image: String
    }
}
</script>

<style>
.content__cell {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.inner__content {
    padding: 16px;
    display: flex;
  	flex-direction: column;
   	flex-wrap: wrap;
   	align-content: flex-start;
   	justify-content: flex-start;
}
.content__cell:nth-of-type(odd) .inner__content:nth-of-type(1) {
    width: 65%;
}
.content__cell:nth-of-type(odd) .inner__content:nth-of-type(2) {
    width: 35%;
}
.content__cell:nth-of-type(even) .inner__content:nth-of-type(1) {
    width: 65%;
    order: 2;
}
.content__cell:nth-of-type(even) .inner__content:nth-of-type(2) {
    width: 35%;
    order: 1;
}
.inner__content h2 {
    margin: 0 0 20px;
}
.inner__content p {
    line-height: 28px;
}
.content__image__div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
}
.content__image {
    max-width: 100%;
    align-self: center;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:800px) {
    .content__cell:nth-of-type(1) .inner__content:nth-of-type(1) {
        width: 100%;
    }
    .content__cell:nth-of-type(1) .inner__content:nth-of-type(2) {
        width: 100%;
    }
    .content__image {
        width: 100%;
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .content__cell:nth-of-type(2) .inner__content:nth-of-type(1) {
        width: 100%;
        order: 1;
    }
    .content__cell:nth-of-type(2) .inner__content:nth-of-type(2) {
        width: 100%;
        order: 2;
    }
    .inner__content h2 {
        text-align: center;
    }
} 
</style>