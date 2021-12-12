import { writable } from "svelte/store";

export const WeightStore = writable([
    {
        weight: 100,
        date: '18Nov2020'
    },	{
        weight: 56.1,
        date: '17Nov2020'
    },
    {
        weight: 56.2,
        date: '16Nov2020'
    }
])