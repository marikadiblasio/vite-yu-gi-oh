<template>
    <main>
            <!-- CharactersList  {{ store.CharsList[0] }}   -->
        <div class="container"> 
            <select name="archs" id="archs" v-model="selectedType">
                <option v-for="(type, i) in store.Archetypes" :key="i" :value="type.archetype_name">{{ type.archetype_name }}</option>
            </select>
        </div>
        <h1>{{ selectedType }}</h1>
        <div class="container bg-white">
            <div class="row ">
                <div class="col-12">conteggio</div>
                <!-- <div v-if="selectedType === archetype"> -->
               <CharacterCard :image="char.card_images[0].image_url" :name="char.name" :archetype="char.archetype" v-for="(char, index) in store.CharsList" :key="char.id"/>
            <!-- </div> -->
            </div>
        </div>
    </main>
</template>

<script>
    import { store } from '../data/store';
    import CharacterCard from './CharacterCard.vue'
    export default {
        name: 'CharactersList',
        components: {
            CharacterCard
        },
        data(){
            return {
                store,
                selectedType: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    main {
        background-color: $primary;
    }
    .col-12:first-child {
        background-color: red;
    }
</style>