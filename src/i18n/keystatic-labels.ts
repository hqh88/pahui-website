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
  phoneNumberDesc: { en: 'e.g. +86 137-0234-0231', zh: '例如 +86 137-0234-0231' },
  email: { en: 'Email', zh: '邮箱' },
  emailAddresses: { en: 'Email Addresses', zh: '邮箱地址' },
  emailAddressesDesc: {
    en: 'Contact email addresses shown on the website',
    zh: '显示在网站上的联系邮箱',
  },
  newEmail: { en: 'New Email', zh: '新邮箱' },
  address: { en: 'Address', zh: '地址' },
  addressDesc: {
    en: 'Company address for contact and delivery',
    zh: '公司联系及收发货地址',
  },

  // Homepage
  homepage: { en: 'Homepage', zh: '首页' },
  heroBackgroundImage: { en: 'Hero Background Image', zh: '主图背景图片' },
  heroTitle: { en: 'Hero Title', zh: '主图标题' },
  heroTitleDesc: { en: 'Main heading on the hero section', zh: '主图区域的大标题' },
  heroSubtitle: { en: 'Hero Subtitle', zh: '主图副标题' },
  heroSubtitleDesc: { en: 'Text below the main heading', zh: '大标题下方的说明文字' },
  heroButtonText: { en: 'Hero Button Text', zh: '主图按钮文字' },
  heroButtonTextDesc: { en: 'Keep under 20 characters', zh: '建议不超过 20 个字符' },
  heroButtonLink: { en: 'Hero Button Link', zh: '主图按钮链接' },
  heroButtonLinkDesc: {
    en: 'Relative path (e.g. /collections) or full URL',
    zh: '相对路径（如 /collections）或完整 URL',
  },
  name: { en: 'Name', zh: '名称' },
  slugUrlPath: { en: 'Slug (URL path)', zh: '路径标识 (URL path)' },
  slugUrlPathDesc: {
    en: 'Lowercase letters and hyphens only, e.g. "sofas"',
    zh: '仅限小写字母和连字符，例如 "sofas"',
  },
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
  paragraphDesc: {
    en: 'Each paragraph displays as a separate text block',
    zh: '每个段落在页面上独立显示为一个文本块',
  },
  storyParagraphs: { en: 'Story Paragraphs', zh: '故事段落' },
  valueTitle: { en: 'Value Title', zh: '价值观标题' },
  valueTitleDesc: { en: 'Short title for the card, e.g. "Quality"', zh: '卡片的简短标题，例如"品质"' },
  valueDescription: { en: 'Value Description', zh: '价值观描述' },
  valueDescriptionDesc: {
    en: 'Brief description, keep under 200 characters',
    zh: '简要描述，建议不超过 200 字符',
  },
  valuesCards: { en: 'Values (shown as cards)', zh: '价值观（卡片展示）' },
  newValue: { en: 'New Value', zh: '新价值观' },

  // Contact Page
  contactPage: { en: 'Contact Page', zh: '联系页面' },
  pageHeading: { en: 'Page Heading', zh: '页面标题' },
  pageHeadingDesc: { en: 'e.g. "How Can We Help?"', zh: '例如"有什么可以帮您？"' },
  subheading: { en: 'Subheading', zh: '副标题' },
  subheadingDesc: { en: 'Text below the heading', zh: '标题下方的说明文字' },
  submitButtonText: { en: 'Submit Button Text', zh: '提交按钮文字' },
  submitButtonTextDesc: { en: 'Keep under 20 characters', zh: '建议不超过 20 个字符' },
  successMessage: { en: 'Success Message', zh: '成功提示消息' },
  successMessageDesc: {
    en: 'Message shown after form submission',
    zh: '表单提交成功后显示的提示消息',
  },

  // Categories
  productCategories: { en: 'Product Categories', zh: '产品分类' },
  categoryName: { en: 'Category Name', zh: '分类名称' },
  urlSlug: { en: 'URL Slug', zh: 'URL 标识' },
  urlSlugDesc: {
    en: 'Used in URLs, e.g. "sofas", "dining-tables"',
    zh: '用于 URL 路径，例如 "sofas"、"dining-tables"',
  },
  categoryImage: { en: 'Category Image', zh: '分类图片' },
  categoryImageDesc: {
    en: 'Displayed on the category landing page',
    zh: '显示在分类页面的封面图',
  },
  sortOrder: { en: 'Sort Order', zh: '排序' },
  sortOrderDesc: { en: 'Lower numbers appear first', zh: '数字越小越靠前' },

  // Products
  products: { en: 'Products', zh: '产品' },
  productIdSku: { en: 'Product ID / SKU', zh: '产品编号 / SKU' },
  productIdSkuDesc: {
    en: 'Format: PREFIX-NUMBER, e.g. PHS-1001, PHAC-2005',
    zh: '格式：前缀-编号，例如 PHS-1001、PHAC-2005',
  },
  productName: { en: 'Product Name', zh: '产品名称' },
  productNameDesc: {
    en: 'Display name shown on the website',
    zh: '显示在网站上的产品名称',
  },
  productImage: { en: 'Product Image', zh: '产品图片' },
  productImageDesc: {
    en: 'Main image shown in catalog and detail page',
    zh: '在产品列表和详情页展示的主图',
  },
  category: { en: 'Category', zh: '所属分类' },
  catSofas: { en: 'Sofas', zh: '沙发' },
  catArmChairs: { en: 'Arm Chairs', zh: '扶手椅' },
  catCoffeeTables: { en: 'Coffee Tables', zh: '茶几' },
  catDiningTables: { en: 'Dining Tables', zh: '餐桌' },
  catDiningChairs: { en: 'Dining Chairs', zh: '餐椅' },
  catBeds: { en: 'Beds', zh: '床' },
  catBedsideTables: { en: 'Bedside Tables', zh: '床头柜' },
  catOthers: { en: 'Others', zh: '其他' },
  dimensions: { en: 'Dimensions', zh: '尺寸' },
  dimensionsDesc: {
    en: 'e.g. 306*105*65cm or "Standard"',
    zh: '例如 306*105*65cm 或 "Standard"',
  },
  sizeCustomizable: { en: 'Size can be customized', zh: '尺寸可定制' },
} as const;

export type LabelKey = keyof typeof labels;

export function t(key: LabelKey, locale: Locale): string {
  return labels[key][locale];
}
