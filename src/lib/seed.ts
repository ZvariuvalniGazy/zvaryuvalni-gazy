import type { Product } from "./types";

/** Демо-дані: показуються, доки Supabase не підключено. */
export const SEED_PRODUCTS: Product[] = [
  { id: "1", name: "Кисень технічний", size: "40 л (6 м³)", category: "gases", in_stock: true, price: 345, popular: true },
  { id: "2", name: "Аргон (Ar)", size: "40 л (6 м³)", category: "gases", in_stock: true, price: 420, popular: true },
  { id: "3", name: "Вуглекислий газ (CO₂)", size: "40 л (6 м³)", category: "gases", in_stock: true, price: 290, popular: true },
  { id: "4", name: "Ацетилен (розчинений)", size: "40 л (5 м³)", category: "gases", in_stock: true, price: 615, popular: true },
  { id: "5", name: "Кисень медичний", size: "40 л (6 м³)", category: "gases", in_stock: true, price: 390, popular: false },
  { id: "6", name: "Азот", size: "40 л (6 м³)", category: "gases", in_stock: false, price: 380, popular: false },
  { id: "7", name: "Інверторний зварювальний апарат MMA-250", size: "250 А", category: "welding", in_stock: true, price: 5900, popular: false },
  { id: "8", name: "Напівавтомат MIG/MAG-200", size: "200 А", category: "welding", in_stock: true, price: 11800, popular: false },
  { id: "9", name: "Редуктор балонний кисневий", size: "1 шт.", category: "welding", in_stock: true, price: 980, popular: false },
  { id: "10", name: "Пальник газовий", size: "1 шт.", category: "welding", in_stock: false, price: 760, popular: false },
  { id: "11", name: "Електроди для зварювання", size: "3 мм, 5 кг", category: "supplies", in_stock: true, price: 540, popular: false },
  { id: "12", name: "Дріт зварювальний омідненний", size: "0,8 мм, 5 кг", category: "supplies", in_stock: true, price: 690, popular: false },
  { id: "13", name: "Зварювальна маска «хамелеон»", size: "1 шт.", category: "supplies", in_stock: true, price: 1250, popular: false },
  { id: "14", name: "Шланг газовий", size: "9 мм, 1 м", category: "supplies", in_stock: false, price: 48, popular: false },
];
