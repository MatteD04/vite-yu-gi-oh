<script>
export default {
    name: 'AppMain'
}
</script>

<template>
    <div class="body">
        <div class="container card-list">
            <div class="container-card">
                <img src="https://images.ygoprodeck.com/images/cards_small/34541863.jpg">
                <div class="info-card">
                    <h3>nome</h3>
                    <p>tipo</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.body{
    background-color: orange;
    padding: 50px 0;
}
.card-list{
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px;
}
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