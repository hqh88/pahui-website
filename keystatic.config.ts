import { config, collection, singleton, fields } from '@keystatic/core';
import { t, type Locale } from './src/i18n/keystatic-labels';

const isProd = typeof import.meta.env !== 'undefined' ? import.meta.env.PROD : false;

export function createKeystaticConfig(locale: Locale = 'en') {
  return config({
    locale: locale === 'zh' ? 'zh-CN' : undefined,
    storage: isProd
      ? {
          kind: 'github',
          repo: 'hqh88/pahui-website',
        }
      : { kind: 'local' },

    singletons: {
      site: singleton({
        label: t('siteSettings', locale),
        path: 'src/data/site',
        format: { data: 'json' },
        schema: {
          announcementBar: fields.text({
            label: t('announcementBarText', locale),
            description: t('announcementBarDesc', locale),
          }),
          footerTagline: fields.text({
            label: t('footerTagline', locale),
            description: t('footerTaglineDesc', locale),
          }),
          phone: fields.text({ label: t('phoneNumber', locale) }),
          emails: fields.array(fields.text({ label: t('email', locale) }), {
            label: t('emailAddresses', locale),
            itemLabel: (props) => props.value || t('newEmail', locale),
          }),
          address: fields.text({
            label: t('address', locale),
            multiline: true,
          }),
        },
      }),

      homepage: singleton({
        label: t('homepage', locale),
        path: 'src/data/homepage',
        format: { data: 'json' },
        schema: {
          heroImage: fields.image({
            label: t('heroBackgroundImage', locale),
            directory: 'public/images',
            publicPath: '/images/',
          }),
          heroTitle: fields.text({ label: t('heroTitle', locale) }),
          heroSubtitle: fields.text({ label: t('heroSubtitle', locale) }),
          heroButtonText: fields.text({ label: t('heroButtonText', locale) }),
          heroButtonLink: fields.text({ label: t('heroButtonLink', locale) }),

          featuredCollections: fields.array(
            fields.object({
              name: fields.text({ label: t('name', locale) }),
              slug: fields.text({ label: t('slugUrlPath', locale) }),
              image: fields.image({
                label: t('collectionImage', locale),
                directory: 'public/images',
                publicPath: '/images/',
              }),
            }),
            {
              label: t('featuredCollections', locale),
              itemLabel: (props) => props.fields.name.value || t('newCollection', locale),
            }
          ),

          slides: fields.array(
            fields.object({
              image: fields.image({
                label: t('slideBackgroundImage', locale),
                directory: 'public/images',
                publicPath: '/images/',
              }),
              title: fields.text({ label: t('title', locale) }),
              description: fields.text({
                label: t('description', locale),
                multiline: true,
              }),
            }),
            {
              label: t('slideshow', locale),
              itemLabel: (props) => props.fields.title.value || t('newSlide', locale),
            }
          ),
        },
      }),

      about: singleton({
        label: t('aboutPage', locale),
        path: 'src/data/about',
        format: { data: 'json' },
        schema: {
          storyImage: fields.image({
            label: t('storySectionImage', locale),
            directory: 'public/images',
            publicPath: '/images/',
          }),
          storyTitle: fields.text({ label: t('storySectionTitle', locale) }),
          storyParagraphs: fields.array(fields.text({ label: t('paragraph', locale), multiline: true }), {
            label: t('storyParagraphs', locale),
            itemLabel: (props) => (props.value || '').slice(0, 50) + '...',
          }),
          values: fields.array(
            fields.object({
              title: fields.text({ label: t('title', locale) }),
              description: fields.text({ label: t('description', locale) }),
            }),
            {
              label: t('valuesCards', locale),
              itemLabel: (props) => props.fields.title.value || t('newValue', locale),
            }
          ),
        },
      }),

      contact: singleton({
        label: t('contactPage', locale),
        path: 'src/data/contact',
        format: { data: 'json' },
        schema: {
          heading: fields.text({ label: t('pageHeading', locale) }),
          subheading: fields.text({ label: t('subheading', locale) }),
          submitButtonText: fields.text({ label: t('submitButtonText', locale) }),
          successMessage: fields.text({ label: t('successMessage', locale) }),
        },
      }),
    },

    collections: {
      categories: collection({
        label: t('productCategories', locale),
        path: 'src/data/categories/*/',
        slugField: 'slug',
        format: { data: 'json' },
        schema: {
          name: fields.text({ label: t('categoryName', locale), validation: { isRequired: true } }),
          slug: fields.text({
            label: t('urlSlug', locale),
            description: t('urlSlugDesc', locale),
            validation: { isRequired: true },
          }),
          image: fields.image({
            label: t('categoryImage', locale),
            directory: 'public/images/categories',
            publicPath: '/images/categories/',
          }),
          sortOrder: fields.integer({
            label: t('sortOrder', locale),
            description: t('sortOrderDesc', locale),
            defaultValue: 0,
          }),
        },
      }),

      products: collection({
        label: t('products', locale),
        path: 'src/data/products/*/',
        slugField: 'id',
        format: { data: 'json' },
        schema: {
          id: fields.text({
            label: t('productIdSku', locale),
            validation: { isRequired: true },
          }),
          name: fields.text({
            label: t('productName', locale),
            validation: { isRequired: true },
          }),
          image: fields.image({
            label: t('productImage', locale),
            directory: 'public/images/products',
            publicPath: '/images/products/',
          }),
          category: fields.text({
            label: t('categorySlug', locale),
            description: t('categorySlugDesc', locale),
            validation: { isRequired: true },
          }),
          size: fields.text({
            label: t('dimensions', locale),
            description: t('dimensionsDesc', locale),
          }),
          customizable: fields.checkbox({
            label: t('sizeCustomizable', locale),
            defaultValue: false,
          }),
        },
      }),
    },
  });
}

// Default export for API route (server-side, locale not needed)
export default createKeystaticConfig('en');
