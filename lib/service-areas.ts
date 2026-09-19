import { istanbulNeighborhoods } from "./istanbul-neighborhoods";

export type ServiceArea = { name: string; slug: string; type: "mahalle" | "ilce"; district?: string };

const slugify = (value: string) => value.toLocaleLowerCase("tr-TR")
  .replaceAll("ı", "i").replaceAll("ğ", "g").replaceAll("ü", "u").replaceAll("ş", "s").replaceAll("ö", "o").replaceAll("ç", "c")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const umraniyeNeighborhoods = [
  "Adem Yavuz", "Altınşehir", "Armağanevler", "Aşağı Dudullu", "Atakent", "Atatürk", "Cemil Meriç", "Çakmak",
  "Çamlık", "Dumlupınar", "Elmalıkent", "Esenevler", "Esenkent", "Fatih Sultan Mehmet", "Finanskent", "Hekimbaşı",
  "Huzur", "Ihlamurkuyu", "İnkılap", "İstiklal", "Kazım Karabekir", "Madenler", "Mehmet Akif", "Necip Fazıl", "Parseller",
  "Saray", "Site", "Şerifali", "Tatlısu", "Tepeüstü", "Topağacı", "Yamanevler", "Yenişehir", "Yukarı Dudullu"
];

const istanbulDistricts = [
  "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş",
  "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih",
  "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer",
  "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Üsküdar", "Ümraniye", "Zeytinburnu"
];

export const serviceAreas: ServiceArea[] = [
  ...umraniyeNeighborhoods.map((name) => ({ name, slug: `${slugify(name)}-oto-cekici`, type: "mahalle" as const, district: "Ümraniye" })),
  ...istanbulNeighborhoods
    .filter((area) => area.district !== "Ümraniye")
    .map((area) => ({
      name: area.name.replace(/\s+Mah\.$/, ""),
      slug: `${area.districtSlug}-${area.slug}-oto-cekici`,
      type: "mahalle" as const,
      district: area.district,
    })),
  ...istanbulDistricts.map((name) => ({ name, slug: `${slugify(name)}-oto-cekici`, type: "ilce" as const }))
];

export const priorityAreas = serviceAreas.filter((area) => ["Ümraniye", "Çekmeköy", "Sancaktepe", "Üsküdar", "Ataşehir", "Beykoz", "Şile", "Kadıköy"].includes(area.name) && area.type === "ilce");

export const findArea = (slug: string) => serviceAreas.find((area) => area.slug === slug);
