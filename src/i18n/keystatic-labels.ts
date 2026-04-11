export type Locale = 'en' | 'zh';

const labels = {
  // Singletons
  siteSettings: { en: 'Site Settings', zh: '网站设置' },
  announcementBarText: { en: 'Announcement Bar Text', zh: '公告栏文字' },
  announcementBarDesc: {
    en: 'Text displayed in the top bar across all pages',
    zh: '显示在所有页面顶部栏的文字',
  },
  footerTagline: { en: 'Footer Tagline', zh: '页脚标语' },
  footerTaglineDesc: { en: 'Short tagline in the footer', zh: '页脚的简短标语' },
  phoneNumber: { en: 'Phone Number', zh: '电话号码' },
  email: { en: 'Email', zh: '邮箱' },
  emailAddresses: { en: 'Email Addresses', zh: '邮箱地址' },
  newEmail: { en: 'New Email', zh: '新邮箱' },
  address: { en: 'Address', zh: '地址' },

  // Homepage
  homepage: { en: 'Homepage', zh: '首页' },
  heroBackgroundImage: { en: 'Hero Background Image', zh: '主图背景图片' },
  heroTitle: { en: 'Hero Title', zh: '主图标题' },
  heroSubtitle: { en: 'Hero Subtitle', zh: '主图副标题' },
  heroButtonText: { en: 'Hero Button Text', zh: '主图按钮文字' },
  heroButtonLink: { en: 'Hero Button Link', zh: '主图按钮链接' },
  name: { en: 'Name', zh: '名称' },
  slugUrlPath: { en: 'Slug (URL path)', zh: '路径标识 (URL path)' },
  collectionImage: { en: 'Collection Image', zh: '分类图片' },
  featuredCollections: {
    en: 'Featured Collections (shown on homepage)',
    zh: '精选分类（显示在首页）',
  },
  newCollection: { en: 'New Collection', zh: '新分类' },
  slideBackgroundImage: { en: 'Slide Background Image', zh: '幻灯片背景图片' },
  title: { en: 'Title', zh: '标题' },
  description: { en: 'Description', zh: '描述' },
  slideshow: { en: 'Slideshow', zh: '幻灯片' },
  newSlide: { en: 'New Slide', zh: '新幻灯片' },

  // About Page
  aboutPage: { en: 'About Page', zh: '关于页面' },
  storySectionImage: { en: 'Story Section Image', zh: '故事板块图片' },
  storySectionTitle: { en: 'Story Section Title', zh: '故事板块标题' },
  paragraph: { en: 'Paragraph', zh: '段落' },
  storyParagraphs: { en: 'Story Paragraphs', zh: '故事段落' },
  valuesCards: { en: 'Values (shown as cards)', zh: '价值观（卡片展示）' },
  newValue: { en: 'New Value', zh: '新价值观' },

  // Contact Page
  contactPage: { en: 'Contact Page', zh: '联系页面' },
  pageHeading: { en: 'Page Heading', zh: '页面标题' },
  subheading: { en: 'Subheading', zh: '副标题' },
  submitButtonText: { en: 'Submit Button Text', zh: '提交按钮文字' },
  successMessage: { en: 'Success Message', zh: '成功提示消息' },

  // Categories
  productCategories: { en: 'Product Categories', zh: '产品分类' },
  categoryName: { en: 'Category Name', zh: '分类名称' },
  urlSlug: { en: 'URL Slug', zh: 'URL 标识' },
  urlSlugDesc: {
    en: 'Used in URLs, e.g. "sofas", "dining-tables"',
    zh: '用于 URL 路径，例如 "sofas"、"dining-tables"',
  },
  categoryImage: { en: 'Category Image', zh: '分类图片' },
  sortOrder: { en: 'Sort Order', zh: '排序' },
  sortOrderDesc: { en: 'Lower numbers appear first', zh: '数字越小越靠前' },

  // Products
  products: { en: 'Products', zh: '产品' },
  productIdSku: { en: 'Product ID / SKU', zh: '产品编号 / SKU' },
  productName: { en: 'Product Name', zh: '产品名称' },
  productImage: { en: 'Product Image', zh: '产品图片' },
  categorySlug: { en: 'Category Slug', zh: '所属分类标识' },
  categorySlugDesc: {
    en: 'Must match a category slug, e.g. "sofas"',
    zh: '必须与分类标识匹配，例如 "sofas"',
  },
  dimensions: { en: 'Dimensions', zh: '尺寸' },
  dimensionsDesc: { en: 'e.g. 306*105*65cm', zh: '例如 306*105*65cm' },
  sizeCustomizable: { en: 'Size can be customized', zh: '尺寸可定制' },
} as const;

export type LabelKey = keyof typeof labels;

export function t(key: LabelKey, locale: Locale): string {
  return labels[key][locale];
}
