import { create } from "zustand";

const useStore = create((set) => ({
  products: [
    {
      id: 1,
      name: "Samsung Galaxy S25",
      price: "6399",
      image: "https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/images/72/7250872/Smartfon-Samsung-Galaxy-S25-Ultra-tytanowyczarny-przodtyl-logo.jpg",
      description: "6.9' Dynamic AMOLED 2X, Snapdragon 8 Elite, 12GB RAM, 512GB pamięci, 5000mAh bateria.",
    },
    {
      id: 2,
      name: "IPhone 15 Pro Max",
      price: "5899",
      image: "https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/images/58/5860432/Smartfon-APPLE-iPhone-15-Pro-Max-6-7-01.jpg",
      description: "6.7' Super Retina XDR, A17 Pro, 8GB RAM, 256GB pamięci, 4850mAh bateria.",
    },
    {
      id: 3,
      name: "Xiaomi Redmi Note 14",
      price: "2899",
      discount: "10",
      image: "https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/images/72/7263152/Smartfon-XIAOMI-Redmi-Note-14-6-128GB-120Hz-Czarny-1-1.jpg",
      description: "6.6' AMOLED 120Hz, Snapdragon 7 Gen 3, 8GB RAM, 256GB pamięci, 5000mAh bateria.",
    },
    {
      id: 4,
      name: "Google Pixel 9",
      price: "3699",
      image: "https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/images/67/6789942/Smartfon-GOOGLE-Pixel-9-5G-AI-czarny-1.jpg",
      description: "6.3' OLED 120Hz, Google Tensor G4, 12GB RAM, 256GB pamięci, 4800mAh bateria.",
    },
    {
      id: 5,
      name: "OnePlus 13",
      price: "5299",
      image: "https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/images/72/7263176/Smartfon-ONEPLUS-13-5G-Bialy-1.jpg",
      description: "6.8' LTPO AMOLED 144Hz, Snapdragon 8 Gen 3, 16GB RAM, 512GB pamięci, 5500mAh bateria.",
    },
  ],
  cart: [],

  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));

export default useStore;
