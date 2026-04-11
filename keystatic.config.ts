import { config, collection, singleton, fields } from '@keystatic/core';
import { t, type Locale } from './src/i18n/keystatic-labels';

const isProd = typeof import.meta.env !== 'undefined' ? import.meta.env.PROD : false;

function seoFields(locale: Locale) {
  return {
    seoTitle: fields.text({
      label: t('seoTitle', locale),
      description: t('seoTitleDesc', locale),
    }),
    seoDescription: fields.text({
      label: t('seoDescription', locale),
      description: t('seoDescriptionDesc', locale),
      multiline: true,
    }),
    seoOgImage: fields.image({
      label: t('seoOgImage', locale),
      description: t('seoOgImageDesc', locale),
      directory: 'public/images/seo',
      publicPath: '/images/seo/',
    }),
  };
}

export function createKeystaticConfig(locale: Locale = 'en') {
  return config({
    storage: isProd
      ? {
          kind: 'github',
          repo: 'hqh88/pahui-website',
        }
      : { kind: 'local' },

    singletons: {
      seo: singleton({
        label: t('seo', locale),
        path: 'src/data/seo',
        format: { data: 'json' },
        schema: {
          siteName: fields.text({
            label: t('seoSiteName', locale),
            description: t('seoSiteNameDesc', locale),
            validation: { isRequired: true },
          }),
          defaultDescription: fields.text({
            label: t('seoDefaultDescription', locale),
            description: t('seoDefaultDescriptionDesc', locale),
            multiline: true,
          }),
          defaultOgImage: fields.image({
            label: t('seoDefaultOgImage', locale),
            description: t('seoDefaultOgImageDesc', locale),
            directory: 'public/images/seo',
            publicPath: '/images/seo/',
          }),
          keywords: fields.text({
            label: t('seoKeywords', locale),
            description: t('seoKeywordsDesc', locale),
          }),
          googleVerification: fields.text({
            label: t('seoGoogleVerification', locale),
            description: t('seoGoogleVerificationDesc', locale),
          }),
          analyticsEnabled: fields.checkbox({
            label: t('analyticsEnabled', locale),
            description: t('analyticsEnabledDesc', locale),
            defaultValue: true,
          }),
          analyticsWebsiteId: fields.text({
            label: t('analyticsWebsiteId', locale),
            description: t('analyticsWebsiteIdDesc', locale),
          }),
          analyticsScriptUrl: fields.text({
            label: t('analyticsScriptUrl', locale),
            description: t('analyticsScriptUrlDesc', locale),
          }),
        },
      }),

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
          phone: fields.text({
            label: t('phoneNumber', locale),
            description: t('phoneNumberDesc', locale),
          }),
          emails: fields.array(fields.text({ label: t('email', locale) }), {
            label: t('emailAddresses', locale),
            description: t('emailAddressesDesc', locale),
            itemLabel: (props) => props.value || t('newEmail', locale),
          }),
          address: fields.text({
            label: t('address', locale),
            description: t('addressDesc', locale),
            multiline: true,
          }),
        },
      }),

      homepage: singleton({
        label: t('homepage', locale),
        path: 'src/data/homepage',
        format: { data: 'json' },
        schema: {
          ...seoFields(locale),
          heroImage: fields.image({
            label: t('heroBackgroundImage', locale),
            directory: 'public/images',
            publicPath: '/images/',
          }),
          heroTitle: fields.text({
            label: t('heroTitle', locale),
            description: t('heroTitleDesc', locale),
            validation: { isRequired: true },
          }),
          heroSubtitle: fields.text({
            label: t('heroSubtitle', locale),
            description: t('heroSubtitleDesc', locale),
          }),
          heroButtonText: fields.text({
            label: t('heroButtonText', locale),
            description: t('heroButtonTextDesc', locale),
          }),
          heroButtonLink: fields.text({
            label: t('heroButtonLink', locale),
            description: t('heroButtonLinkDesc', locale),
          }),

          featuredCollections: fields.array(
            fields.object({
              name: fields.text({
                label: t('name', locale),
                validation: { isRequired: true },
              }),
              slug: fields.text({
                label: t('slugUrlPath', locale),
                description: t('slugUrlPathDesc', locale),
                validation: { isRequired: true },
              }),
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
              title: fields.text({
                label: t('title', locale),
                validation: { isRequired: true },
              }),
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
          ...seoFields(locale),
          storyImage: fields.image({
            label: t('storySectionImage', locale),
            directory: 'public/images',
            publicPath: '/images/',
          }),
          storyTitle: fields.text({
            label: t('storySectionTitle', locale),
            validation: { isRequired: true },
          }),
          storyParagraphs: fields.array(
            fields.text({
              label: t('paragraph', locale),
              description: t('paragraphDesc', locale),
              multiline: true,
            }),
            {
              label: t('storyParagraphs', locale),
              itemLabel: (props) => (props.value || '').slice(0, 40) + (props.value && props.value.length > 40 ? '...' : ''),
            }
          ),
          values: fields.array(
            fields.object({
              title: fields.text({
                label: t('valueTitle', locale),
                description: t('valueTitleDesc', locale),
                validation: { isRequired: true },
              }),
              description: fields.text({
                label: t('valueDescription', locale),
                description: t('valueDescriptionDesc', locale),
              }),
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
          ...seoFields(locale),
          heading: fields.text({
            label: t('pageHeading', locale),
            description: t('pageHeadingDesc', locale),
            validation: { isRequired: true },
          }),
          subheading: fields.text({
            label: t('subheading', locale),
            description: t('subheadingDesc', locale),
          }),
          submitButtonText: fields.text({
            label: t('submitButtonText', locale),
            description: t('submitButtonTextDesc', locale),
            validation: { isRequired: true },
          }),
          successMessage: fields.text({
            label: t('successMessage', locale),
            description: t('successMessageDesc', locale),
            validation: { isRequired: true },
          }),
        },
      }),
    },

    collections: {
      categories: collection({
        label: t('productCategories', locale),
        path: 'src/data/categories/*/',
        slugField: 'slug',
        format: { data: 'json' },
        columns: ['name', 'sortOrder'],
        schema: {
          name: fields.text({
            label: t('categoryName', locale),
            validation: { isRequired: true },
          }),
          slug: fields.text({
            label: t('urlSlug', locale),
            description: t('urlSlugDesc', locale),
            validation: { isRequired: true },
          }),
          image: fields.image({
            label: t('categoryImage', locale),
            description: t('categoryImageDesc', locale),
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
        columns: ['name', 'category'],
        schema: {
          id: fields.text({
            label: t('productIdSku', locale),
            description: t('productIdSkuDesc', locale),
            validation: { isRequired: true },
          }),
          name: fields.text({
            label: t('productName', locale),
            description: t('productNameDesc', locale),
            validation: { isRequired: true },
          }),
          category: fields.select({
            label: t('category', locale),
            options: [
              { label: t('catSofas', locale), value: 'sofas' },
              { label: t('catArmChairs', locale), value: 'arm-chairs' },
              { label: t('catCoffeeTables', locale), value: 'coffee-tables' },
              { label: t('catDiningTables', locale), value: 'dining-tables' },
              { label: t('catDiningChairs', locale), value: 'dining-chairs' },
              { label: t('catBeds', locale), value: 'beds' },
              { label: t('catBedsideTables', locale), value: 'bedside-tables' },
              { label: t('catOthers', locale), value: 'others' },
            ],
            defaultValue: 'sofas',
          }),
          image: fields.image({
            label: t('productImage', locale),
            description: t('productImageDesc', locale),
            directory: 'public/images/products',
            publicPath: '/images/products/',
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
