<template>
    <div class="site__logo">
        <div class="site__logo__back__line"></div>
        <div class="mountain__1"></div>
        <div class="mountain__2"></div>
        <div class="mountain__3"></div>
    </div>
</template>

<style>
.site__logo {
    width: 60px;
    height: 40px;
    align-self: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    background: #FFF;
    margin-top: 2px;
}
.site__logo__back__line {
    background-color: var(--dark-text);
    height: 2px;
    width: 100%;
    border-radius: 15px;
}
.mountain__1 {
    width: 20px;
	height: 20px;
	border-right: 2px solid var(--dark-text);
	border-bottom: 2px solid var(--dark-text);
    background: #FFF;
    position: absolute;
    top: 14px;
    left: 4px;
    transform: rotate(221deg) skewY(15deg) skewX(10deg);
}
.mountain__2 {
    width: 32px;
	height: 32px;
	border-right: 2px solid var(--dark-text);
	border-bottom: 2px solid var(--dark-text);
    background: #FFF;
    position: absolute;
    top: 14px;
    right: 14px;
    transform: rotate(230deg) skewX(20deg) skewY(8deg);
}
.mountain__3 {
    width: 20px;
	height: 20px;
	border-right: 2px solid var(--dark-text);
	border-bottom: 2px solid var(--dark-text);
    background: #FFF;
    position: absolute;
    top: 14px;
    right: 4px;
    transform: rotate(221deg) skewY(15deg) skewX(10deg);
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:1050px) {
    .site__logo {
        margin-right: 6px;
        margin-top: 5px;
    }
}
</style>