export default {
  name: 'amenities',
  type: 'document',
  fields: [
    {
      name: 'img_icon',
      title: 'Icono',
      type: 'image',
    },
    {
      name: 'string_name',
      title: 'Titulo',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'string_name',
      media: 'img_icon',
    },
  },
}