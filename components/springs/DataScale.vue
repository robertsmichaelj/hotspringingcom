<template>
    <div class="indiv__scale__container">
        <h2>{{scaleHeader}}</h2>
        <h3>{{scaleSubHeader}}</h3>
        <div class="indiv__scale" :data-num="scaleNum">
            <h3 class="scale__prude">Prude</h3>
            <div class="scale__slider__outer">
                <div class="scale__slider__inner"></div>
            </div>
            <h3>Nude</h3>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        data: Object,
        scaleNum: Number,
        scaleBoolean: Boolean,
        scaleDescription: String,
        scaleHeader: String,
        scaleSubHeader: String
    },
    mounted: function () {
        setTimeout(() => {
            this.$el.getElementsByClassName('scale__slider__inner')[0].style.left = ((100 - this.scaleNum) * -1) + "%";
        }, 2000);
        
    }
}
</script>

<style>
    .indiv__scale__container {
        margin: 30px 0 36px;
        width: 100%;
    }
    .indiv__scale__container h3 {
        margin: 10px 0 2px;
        font-size: 16px;
        font-weight: 400;
    }
    .indiv__scale {
        margin: 12px auto;
        height: 32px;
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        width: 100%;
    }
    .indiv__scale h3 {
        margin: 0;
        align-self: center;
    }
    .scale__prude {
        color: #eac086;
    }
    .scale__slider__outer {
        background-color: var(--main-text);
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        margin: 0 6px;
    }
    .scale__slider__inner {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: -100%;
        background: #eac086;
        transition: left 1.5s;
        z-index: 1;
    }
    .scale__slider__inner p {
        position: absolute;
        bottom: -26px;
        right: -20px;
        font-weight: 600;
    }
    .scale__cells {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        padding: 0 30px 0 20px;
    }
    .scale__emoji__container {
        min-height: 100%;
        overflow: hidden;
        align-self: center;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        margin: 5px 0 0;
        z-index: 0;
    }
    .scale__emoji__container img {
        max-height: 46px;
        object-fit: contain;
    }
    body .scale__emoji__container p {
        color: var(--main-text);
        text-align: center;
        font-size: 13px;
        font-weight: 500;
        margin: 0;
    }
</style>