export type Location = {
  slug: string;
  city: string;
  region: string;
  heroTitle: string;
  heroSubtitle: string;
  keywords: string[];
};

function slugifyCity(city: string) {
  return city
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeLocation(city: string): Location {
  return {
    slug: slugifyCity(city),
    city,
    region: "Nigeria",
    heroTitle: `Web Development in ${city}`,
    heroSubtitle: `High-performance websites, landing pages, and custom software built for ${city} businesses — fast, secure, SEO-ready, and designed to convert.`,
    keywords: [
      `web development ${city}`,
      `website design ${city}`,
      `website designers ${city}`,
      `software company ${city}`,
      `SEO ${city}`,
    ],
  };
}

// Major Nigerian cities (expanded as requested)
export const locations: Location[] = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Jos",
  "Kaduna",
  "Benin City",
  "Enugu",
  "Onitsha",
  "Aba",
  "Ilorin",
  "Warri",
  "Owerri",
  "Calabar",
  "Uyo",
  "Abeokuta",
  "Osogbo",
  "Akure",
  "Ado Ekiti",
  "Asaba",
  "Awka",
  "Yenagoa",
  "Lokoja",
  "Minna",
  "Makurdi",
  "Sokoto",
  "Katsina",
  "Maiduguri",
  "Bauchi",
  "Gombe",
  "Yola",
  "Lafia",
  "Zaria",
  "Kwara",
].map(makeLocation);

const lookup = new Map(locations.map((location) => [location.slug, location]));

export function getLocationBySlug(slug: string): Location | undefined {
  return lookup.get(slug);
}

