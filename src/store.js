import { reactive } from 'vue';

export const store = reactive({
    cards: [],
    // isLoading: true,
    // searchedName: '',
    // searchedStatus: ''
});

export const type = reactive({
    archetypes: [],
    selectedArchetype: ''
    // isLoading: true,
    // searchedName: '',
    // searchedStatus: ''
});