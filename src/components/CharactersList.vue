<template>
        <div class="container bg-white">
            <div v-if=store.loading class="rounded">Loading...</div>
            <div v-else class="row ">
                <div class="col-12 py-2 bg-dark text-white">Found {{store.CharsList.length}} cards</div>
               <CharacterCard  :image="char.card_images[0].image_url" :name="char.name" :archetype="char.archetype" v-for="char in store.CharsList" :key="char.id"/>
            </div>
        </div>
</template>

<script>
    import { store } from '../data/store';
    import CharacterCard from './CharacterCard.vue';
    export default {
        name: 'CharactersList',
        components: {
            CharacterCard
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    main {
        background-color: $primary;
    }
</style>