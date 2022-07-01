const formatPrice = {
  methods: {
    formatPrice(value) {
        if (typeof value !== 'number') return value

        return `${value.toFixed(2)} €`;
    },
  },
};

export default formatPrice;
