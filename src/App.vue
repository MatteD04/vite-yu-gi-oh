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
    getCardsProps(){
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
      .then((response) => {
        storee.card = response.data.data;
      });
    }
  },
  mounted() {
    this.getCarsProps();
  }
}
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <main>
    <AppMain></AppMain>
  </main>
</template>

<style lang="scss">
@use './style/generic';

</style>