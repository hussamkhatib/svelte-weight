import { writable } from "svelte/store";

export const WeightStore = writable([
    {
        weight: 55,
        date: '1639338825897'
    },	{
        weight: 56.1,
        date: '1639342121901'
    },
    {
        weight: 56.2,
        date: '1639342115115'
    }
])