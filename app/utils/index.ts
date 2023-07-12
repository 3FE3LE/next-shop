const utils = {
  formatPrice(price: number) {
    const formattedPrice = price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formattedPrice;
  },
};

export default utils;
