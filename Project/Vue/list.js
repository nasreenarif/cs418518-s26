const { createApp, ref } = Vue;

createApp({
    setup() {
        const fruits = ref(["Apple", "Banana", "Mango", "Orange"]);
        return { fruits };
    }
}).mount("#app");
