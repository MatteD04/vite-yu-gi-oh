<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data () {
    return {
      store
    };
  },
  methods: {
    getCardsApi(){
      const queryParams = {
        num: 50,
        offset: 0
      };

      if(store.selectedArchetype !== '') {
        queryParams.archetype = store.selectedArchetype;
      }

      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
        params: queryParams
      })
      .then((response) => {
        store.cards = response.data.data;
      });
    },
    getArchetypeApi() {
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then((response) => {
        this.archetypes = response.data;
      });
    }
  },
  mounted() {
    this.getCardsApi();
    this.getArchetypeApi();
  }
}
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <main>
    <AppMain @searchPerformed="getCardsApi"></AppMain>
  </main>
</template>

<style lang="scss">
@use './style/generic';

</style>