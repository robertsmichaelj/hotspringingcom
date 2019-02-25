<template>
    <div class="image__gallery__main">
        <img class="image__gallery__large__image" :class="{'image__gallery__toggle': imageClosed}" @click="closeImage">
        <div class="image__gallery__overlay"></div>
        <div class="image__gallery__large__image__container">
            
        </div>
        <div class="image__gallery">
            <div class="image__gallery__cell" v-for="img in imgs.springs_img_block" v-if="img !== null">
                <img @click="imageToggle" :src="img.directus_files_id.data.thumbnails[1].url" :alt="img.directus_files_id.description">
            </div>
        </div>
        <div class="image__gallery__nav"></div>
    </div>
</template>

<script>
export default {
    props: {
        imgs: Object
    },
    data: function () {
        return {
            imageClosed: true
        }
    },
    methods: {
        imageToggle: function (event) {
            document.getElementsByClassName('image__gallery__large__image')[0].src = event.target.src.replace("thumbnail/_/280/220/crop/good/", "uploads/_/originals/");
            this.imageClosed = false;
        },
        closeImage: function () {
            this.imageClosed = true;
        }
    }
}
</script>

<style>
.image__gallery__main {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}
.image__gallery {
    width: 100%;
    margin: 0 auto 20px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
.image__gallery__cell {
    height: auto;
    max-width: 280px;
    min-width: 230px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex: 1;
}
.image__gallery__cell img {
    height: auto;
    max-width: 260px;
    width: 100%;
    align-self: center;
    object-fit: contain;
    margin: 0 auto;
    display: block;
}
.image__gallery__cell p, .image__gallery__cell a {
    position: absolute;
    bottom: 5px;
    font-size: 9px;
}
.image__gallery__large__image {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    max-width: 84%;
    max-height: 84%;
    z-index: 10;
    cursor: pointer;
    border: 3px solid var(--main-text);
}
.image__gallery__toggle {
    display: none;
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1000px) {
    .image__gallery {
        margin: 0 auto 10px;
        justify-content: space-around;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:800px) {
    .image__gallery {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        overflow-x: scroll;
        padding: 0;
    }
    .image__gallery__cell {
        max-width: 260px;
        min-width: 260px;
        padding: 0 10px 2px 4px;
    }
    .image__gallery__cell img {
        max-width: 260px;
    }
    .image__gallery__large__image {
        max-width: 94%;
        max-height: 94%;
        border: 2px solid var(--main-text);
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:450px) {
/*
    .image__gallery__cell {
        max-width: 200px;
        min-width: 140px;
        padding: 5px;
    }
    .image__gallery__cell img {
        max-width: 200px;
    }
*/
}
</style>
