import { config, collection, singleton, fields } from '@keystatic/core';

const isProd = typeof import.meta.env !== 'undefined' ? import.meta.env.PROD : false;

export default config({
  storage: isProd
    ? {
        kind: 'github',
        repo: 'hqh88/pahui-website',
      }
    : { kind: 'local' },

  singletons: {
    site: singleton({
      label: 'Site Settings',
      path: 'src/data/site',
      format: { data: 'json' },
      schema: {
        announcementBar: fields.text({
          label: 'Announcement Bar Text',
          description: 'Text displayed in the top bar across all pages',
        }),
        footerTagline: fields.text({
          label: 'Footer Tagline',
          description: 'Short tagline in the footer',
        }),
        phone: fields.text({ label: 'Phone Number' }),
        emails: fields.array(fields.text({ label: 'Email' }), {
          label: 'Email Addresses',
          itemLabel: (props) => props.value || 'New Email',
        }),
        address: fields.text({
          label: 'Address',
          multiline: true,
        }),
      },
    }),

    homepage: singleton({
      label: 'Homepage',
      path: 'src/data/homepage',
      format: { data: 'json' },
      schema: {
        heroImage: fields.image({
          label: 'Hero Background Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        heroTitle: fields.text({ label: 'Hero Title' }),
        heroSubtitle: fields.text({ label: 'Hero Subtitle' }),
        heroButtonText: fields.text({ label: 'Hero Button Text' }),
        heroButtonLink: fields.text({ label: 'Hero Button Link' }),

        featuredCollections: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            slug: fields.text({ label: 'Slug (URL path)' }),
            image: fields.image({
              label: 'Collection Image',
              directory: 'public/images',
              publicPath: '/images/',
            }),
          }),
          {
            label: 'Featured Collections (shown on homepage)',
            itemLabel: (props) => props.fields.name.value || 'New Collection',
          }
        ),

        slides: fields.array(
          fields.object({
            image: fields.image({
              label: 'Slide Background Image',
              directory: 'public/images',
              publicPath: '/images/',
            }),
            title: fields.text({ label: 'Title' }),
            description: fields.text({
              label: 'Description',
              multiline: true,
            }),
          }),
          {
            label: 'Slideshow',
            itemLabel: (props) => props.fields.title.value || 'New Slide',
          }
        ),
      },
    }),

    about: singleton({
      label: 'About Page',
      path: 'src/data/about',
      format: { data: 'json' },
      schema: {
        storyImage: fields.image({
          label: 'Story Section Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        storyTitle: fields.text({ label: 'Story Section Title' }),
        storyParagraphs: fields.array(fields.text({ label: 'Paragraph', multiline: true }), {
          label: 'Story Paragraphs',
          itemLabel: (props) => (props.value || '').slice(0, 50) + '...',
        }),
        values: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description' }),
          }),
          {
            label: 'Values (shown as cards)',
            itemLabel: (props) => props.fields.title.value || 'New Value',
          }
        ),
      },
    }),

    contact: singleton({
      label: 'Contact Page',
      path: 'src/data/contact',
      format: { data: 'json' },
      schema: {
        heading: fields.text({ label: 'Page Heading' }),
        subheading: fields.text({ label: 'Subheading' }),
        submitButtonText: fields.text({ label: 'Submit Button Text' }),
        successMessage: fields.text({ label: 'Success Message' }),
      },
    }),
  },

  collections: {
    categories: collection({
      label: 'Product Categories',
      path: 'src/data/categories/*/',
      slugField: 'slug',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Category Name', validation: { isRequired: true } }),
        slug: fields.text({
          label: 'URL Slug',
          description: 'Used in URLs, e.g. "sofas", "dining-tables"',
          validation: { isRequired: true },
        }),
        image: fields.image({
          label: 'Category Image',
          directory: 'public/images/categories',
          publicPath: '/images/categories/',
        }),
        sortOrder: fields.integer({
          label: 'Sort Order',
          description: 'Lower numbers appear first',
          defaultValue: 0,
        }),
      },
    }),

    products: collection({
      label: 'Products',
      path: 'src/data/products/*/',
      slugField: 'id',
      format: { data: 'json' },
      schema: {
        id: fields.text({
          label: 'Product ID / SKU',
          validation: { isRequired: true },
        }),
        name: fields.text({
          label: 'Product Name',
          validation: { isRequired: true },
        }),
        image: fields.image({
          label: 'Product Image',
          directory: 'public/images/products',
          publicPath: '/images/products/',
        }),
        category: fields.text({
          label: 'Category Slug',
          description: 'Must match a category slug, e.g. "sofas"',
          validation: { isRequired: true },
        }),
        size: fields.text({
          label: 'Dimensions',
          description: 'e.g. 306*105*65cm',
        }),
        customizable: fields.checkbox({
          label: 'Size can be customized',
          defaultValue: false,
        }),
      },
    }),
  },
});
