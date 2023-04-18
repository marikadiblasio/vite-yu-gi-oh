import {reactive} from 'vue';

export const store= reactive ({
    CharsList : [],
    loading : true,
    Archetypes : [],
    errorMessage: ''
})