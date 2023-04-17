<template>
    <main>
            <!-- CharactersList  {{ store.CharsList[0] }}   -->
        <div class="container"> <select name="" id="">
            <option value="">select</option>
        </select></div>
        <div class="container bg-white p-4">
            <div class="row">
                <div class="col-12">conteggio</div>
               <CharacterCard :image="char.card_images[0].image_url" :name="char.name" :archetype="char.archetype" v-for="(char, index) in store.CharsList" :key="char.id"/>
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