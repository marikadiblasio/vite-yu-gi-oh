<template>
    <div class="col-12 d-flex justify-content-center col-md-6 col-lg-3">
      <div class="card m-2 border-0">
        <img :src="image" :alt="name">
        <div class="card-body text-center">
            <h6 class="text-white text-uppercase">{{name}}</h6>
            <span> {{archetype}}</span>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CharacterCard',
        props: {
            image: {
                type: String,
            },
            name: {
                type: String,
            }, 
            archetype: {
                type: String,
                // required: true,
                default: 'none'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    .card-body{
        background-color: $primary;
    }
</style>