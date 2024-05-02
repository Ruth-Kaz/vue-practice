Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },

  methods: {
    removeFruit(fruitToRemove) {
      // Step 1: Find the index of the fruit to remove
      const index = this.fruitBasket.indexOf(fruitToRemove);

      // Step 2: Remove the fruit
      if (index !== -1) {
        this.fruitBasket.splice(index, 1); // first is index at which to start removing elements, second is the number of el to remove
      }
    },
  },
}).mount("#app");
