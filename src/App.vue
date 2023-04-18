<template>
  <div>
    <HeaderComponent />
    <main>
      <SearchBar />
      <CharactersList />
    </main>
  </div>
</template>

<script>
  import {store} from './data/store';
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import SearchBar from './components/SearchBar.vue';
  import CharactersList from './components/CharactersList.vue';
  export default {
    name: 'App',
    components: {
    HeaderComponent,
    SearchBar,
    CharactersList
},
    data(){
      return {
        store
      }
    },
    methods: {
      getChars(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res)=>{
          console.log(res.data.data[0]);
          store.loading=true;
          store.CharsList= res.data.data;
          store.loading=false;
        })
      },
      getArchetypes(){
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((result) => {
          store.Archetypes = result.data;
        })
      }
    },
    mounted(){
      this.getChars();
      this.getArchetypes();
    }
  }
</script>

<style lang="scss" scoped>
</style>