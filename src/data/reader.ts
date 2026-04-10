import siteData from './site.json';
import homepageData from './homepage.json';
import aboutData from './about.json';
import contactData from './contact.json';

export async function getSiteSettings() {
  return siteData;
}

export async function getHomepage() {
  return homepageData;
}

export async function getAbout() {
  return aboutData;
}

export async function getContact() {
  return contactData;
}

export async function getCategories() {
  const categoryModules = import.meta.glob('./categories/*/index.json', { eager: true }) as Record<string, { default: any }>;
  const categories = Object.entries(categoryModules).map(([path, mod]) => {
    const slug = path.split('/')[2]; // ./categories/{slug}/index.json
    const data = mod.default || mod;
    return { ...data, slug };
  });
  return categories.sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export async function getProducts() {
  const productModules = import.meta.glob('./products/*/index.json', { eager: true }) as Record<string, { default: any }>;
  return Object.entries(productModules).map(([path, mod]) => {
    const id = path.split('/')[2]; // ./products/{id}/index.json
    const data = mod.default || mod;
    return { ...data, id };
  });
}

/** Returns data in the same shape as the old products.json for backward compatibility */
export async function getCollectionsWithProducts() {
  const categories = await getCategories();
  const allProducts = await getProducts();

  return categories.map((cat) => ({
    id: cat.slug,
    name: cat.name,
    slug: cat.slug,
    image: cat.image,
    products: allProducts.filter((p) => p.category === cat.slug),
  }));
}
