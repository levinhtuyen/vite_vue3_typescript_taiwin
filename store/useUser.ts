import { defineStore } from 'pinia';
export const useUserStore = defineStore('main', { 
    state: () => ({
        count: 0,
        name: "nameUser"
    }),
    getters: {
        doubleCount: (state) =>
        {
            state.count * 2
        }
    },
    actions: {
        reset()
        {
            this.count = 0;
        },
        addCount()
        {
            this.count++;
        }
    }
})
