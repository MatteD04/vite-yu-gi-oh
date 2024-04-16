<script>
export default {
    name: 'SingleCard',
    props: {
        cardInfo: Object
    }
}
</script>

<template>
    <div class="container-card">
        <img :src="cardInfo.card_images[0].image_url_small">
        <div class="info-card">
            <h3>{{ cardInfo.name }}</h3>
            <p>{{ cardInfo.archetype }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-card{
    width: calc((100% / 5) - 20px);
    margin-bottom: 30px;
    background-color: orange;
    img{
        width: 100%
    }
}
.info-card{
    text-align: center;
    padding: 10px 0;
    h3{
        color: white;
    }
}
</style>