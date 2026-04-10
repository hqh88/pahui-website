import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

export async function getSiteSettings() {
  return await reader.singletons.site.read();
}

export async function getHomepage() {
  return await reader.singletons.homepage.read();
}

export async function getAbout() {
  return await reader.singletons.about.read();
}

export async function getContact() {
  return await reader.singletons.contact.read();
}

export async function getCategories() {
  const slugs = await reader.collections.categories.list();
  const categories = await Promise.all(
    slugs.map(async (dirSlug) => {
      const cat = await reader.collections.categories.read(dirSlug);
      return cat ? { ...cat, slug: dirSlug } : null;
    })
  );
  return categories
    .filter((c): c is NonNullable<typeof c> => c !== null)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export async function getProducts() {
  const slugs = await reader.collections.products.list();
  const products = await Promise.all(
    slugs.map(async (slug) => {
      const product = await reader.collections.products.read(slug);
      return product ? { ...product, id: slug } : null;
    })
  );
  return products.filter((p): p is NonNullable<typeof p> => p !== null);
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
