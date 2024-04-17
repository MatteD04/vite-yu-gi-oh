<script>
import {store} from '../store.js';
import SingleCard from './SingleCard.vue';
export default {
    name: 'AppMain',
    components: {
        SingleCard
    },
    data () {
        return {
            store
        };
    },
}
</script>

<template>
    <div class="body">
        <div class="container">
            <select v-model="store.selectedArchetype" @change="$emit('searchPerformed')">
                <option value="">tutte le carte</option>
                <option v-for="archetype in archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>  
            </select>
        </div>
        <div class="container card-list">
            <SingleCard v-for="singleCard in store.cards" :key="singleCard.id" :cardInfo="singleCard"></SingleCard>
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
.container{
    select{
        padding: 10px;
        margin: 0 0 40px 0;
        width: 200px;
        font-size: 16px
    }
}
</style>