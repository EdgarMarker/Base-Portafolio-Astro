export default {
  name: 'postAuthor',
  type: 'document',
  fields: [
    {
      name: 'string_name',
      title: 'Nombre del autor',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug del autor',
      type: 'slug',
      options: {
        source: 'string_name',
        maxLength: 96,
      },
    },
    {
      name: 'text_bio',
      title: 'Biografía del autor',
      type: 'text',
    },
    {
      name: 'img_author',
      title: 'Fotografía del autor',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'string_name',
      subtitle: 'slug.current',
      media: 'img_author',
    },
  },
}
