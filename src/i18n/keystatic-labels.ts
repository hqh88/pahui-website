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
  catSofas: { en: 'Sofas', zh: '沙发 Sofas' },
  catArmChairs: { en: 'Arm Chairs', zh: '扶手椅 Arm Chairs' },
  catCoffeeTables: { en: 'Coffee Tables', zh: '茶几 Coffee Tables' },
  catDiningTables: { en: 'Dining Tables', zh: '餐桌 Dining Tables' },
  catDiningChairs: { en: 'Dining Chairs', zh: '餐椅 Dining Chairs' },
  catBeds: { en: 'Beds', zh: '床 Beds' },
  catBedsideTables: { en: 'Bedside Tables', zh: '床头柜 Bedside Tables' },
  catOthers: { en: 'Others', zh: '其他 Others' },
  dimensions: { en: 'Dimensions', zh: '尺寸' },
  dimensionsDesc: {
    en: 'e.g. 306*105*65cm or "Standard"',
    zh: '例如 306*105*65cm 或 "Standard"',
  },
  sizeCustomizable: { en: 'Size can be customized', zh: '尺寸可定制' },

  // SEO
  seo: { en: 'SEO Settings', zh: 'SEO 设置' },
  seoSiteName: { en: 'Site Name', zh: '站点名称' },
  seoSiteNameDesc: {
    en: 'Used in page titles, e.g. "PA HUI Furniture"',
    zh: '用于页面标题，例如 "PA HUI Furniture"',
  },
  seoDefaultDescription: { en: 'Default Description', zh: '默认描述' },
  seoDefaultDescriptionDesc: {
    en: 'Fallback meta description for pages without their own (50-160 characters)',
    zh: '页面未设置独立描述时使用的默认描述（建议 50-160 字符）',
  },
  seoDefaultOgImage: { en: 'Default Share Image', zh: '默认分享图片' },
  seoDefaultOgImageDesc: {
    en: 'Default image for social media sharing (recommended 1200×630px)',
    zh: '社交媒体分享时的默认图片（建议 1200×630px）',
  },
  seoKeywords: { en: 'Keywords', zh: '关键词' },
  seoKeywordsDesc: {
    en: 'Comma-separated keywords for search engines',
    zh: '用逗号分隔的搜索引擎关键词',
  },
  seoGoogleVerification: { en: 'Google Verification Code', zh: 'Google 验证码' },
  seoGoogleVerificationDesc: {
    en: 'Google Search Console verification meta tag content',
    zh: 'Google Search Console 验证 meta 标签的 content 值',
  },
  analyticsEnabled: { en: 'Enable Analytics', zh: '启用访客统计' },
  analyticsEnabledDesc: {
    en: 'Turn on/off Umami visitor tracking',
    zh: '开启/关闭 Umami 访客追踪',
  },
  analyticsWebsiteId: { en: 'Analytics Website ID', zh: '统计站点 ID' },
  analyticsWebsiteIdDesc: {
    en: 'Umami website ID (from cloud.umami.is dashboard)',
    zh: 'Umami 站点 ID（从 cloud.umami.is 后台获取）',
  },
  analyticsScriptUrl: { en: 'Analytics Script URL', zh: '统计脚本地址' },
  analyticsScriptUrlDesc: {
    en: 'Umami tracking script URL (default: https://cloud.umami.is/script.js)',
    zh: 'Umami 追踪脚本地址（默认：https://cloud.umami.is/script.js）',
  },
  analyticsShareUrl: { en: 'Analytics Dashboard URL', zh: '统计仪表盘链接' },
  analyticsShareUrlDesc: {
    en: 'Umami share URL for embedded dashboard (enable in Umami → Settings → Share URL)',
    zh: 'Umami 分享链接，用于嵌入仪表盘（在 Umami → 设置 → Share URL 中开启）',
  },

  // Per-page SEO fields
  seoTitle: { en: 'SEO Title', zh: 'SEO 标题' },
  seoTitleDesc: {
    en: 'Custom page title for search engines (leave empty to use default)',
    zh: '自定义搜索引擎页面标题（留空使用默认值）',
  },
  seoDescription: { en: 'SEO Description', zh: 'SEO 描述' },
  seoDescriptionDesc: {
    en: 'Custom meta description for this page (50-160 characters)',
    zh: '自定义页面描述（建议 50-160 字符）',
  },
  seoOgImage: { en: 'Share Image', zh: '分享图片' },
  seoOgImageDesc: {
    en: 'Custom image for social media sharing (overrides default)',
    zh: '自定义社交媒体分享图片（覆盖默认值）',
  },
} as const;

export type LabelKey = keyof typeof labels;

export function t(key: LabelKey, locale: Locale): string {
  return labels[key][locale];
}
