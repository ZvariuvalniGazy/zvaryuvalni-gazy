export const COMPANY = {
  name: "Зварювальні Гази",
  slogan: "Промислові гази та устаткування",
  city: "Харків",
  /** Геометка біля міста в шапці: вивіска на Лікарському в'їзді */
  cityMapQuery: "Лікарський в'їзд, 3, Харків, Харківська область, 61000",
  email: "zvariuvalnigazy@gmail.com",
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/+380996883904",

  /** Телефони у шапці сайту */
  headerPhones: ["0(99) 688 39 04", "0(93) 527 85 84"],

  address: {
    country: "Україна",
    postcode: "61000",
    city: "місто Харків",
    street: "провулок Ігоря Остаповича, 3",
  },

  hours: [
    { days: "Пн–Пт", time: "8:00–17:00" },
    { days: "Сб", time: "8:00–13:00" },
  ],

  /** Юридична адреса та адреси провадження діяльності (з геолокацією) */
  locations: [
    {
      title: "Юридична адреса",
      address: "місто Харків, проспект Тракторобудівників, 234-Б, квартира 33",
      mapQuery: "Харків, проспект Тракторобудівників, 234-Б",
    },
    {
      title: "Адреса провадження діяльності",
      address: "місто Харків, провулок Ігоря Остаповича, 3",
      mapQuery: "провулок Ігоря Остаповича, 3, Харків, Харківська область, 61000",
    },
    {
      title: "Адреса провадження діяльності",
      address: "місто Харків, вулиця Китаєнка, 1",
      mapQuery: "Харків, вулиця Китаєнка, 1",
    },
  ],

  people: [
    { role: "Директор", name: "Захарченко Валентина Володимирівна", phone: "+380 93 527 85 84" },
    { role: "Служба підтримки", name: "", phone: "+380 50 323 65 45" },
  ],
} as const;

export const fullAddress = () => {
  const a = COMPANY.address;
  return `${a.country}, ${a.postcode}, ${a.city}, ${a.street}`;
};

export const mapLink = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const mapEmbed = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=uk&z=16&output=embed`;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "провулок Ігоря Остаповича, 3, Харків, Харківська область, 61000",
)}`;
